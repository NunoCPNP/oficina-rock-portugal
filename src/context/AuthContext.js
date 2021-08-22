import { createContext, useState, useEffect } from "react";
import Router from "next/router";

import firebase, {
  firestore,
  createUserProfileDocument,
} from "@/services/firebase";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const handleUser = async (currentUser) => {
    if (currentUser) {
      await createUserProfileDocument(currentUser);

      const collectionRef = firestore.collection("users").doc(currentUser.uid);

      const snapShot = await collectionRef.get();

      setUser(snapShot.data());

      return snapShot.data();
    }

    setUser(false);

    return false;
  };

  const signinGoogle = async () => {
    try {
      setLoading(true);

      const response = await firebase
        .auth()
        .signInWithPopup(new firebase.auth.GoogleAuthProvider());

      await handleUser(response.user);
      Router.push("/");
    } finally {
      setLoading(false);
    }
  };

  const signout = async () => {
    try {
      await firebase.auth().signOut();

      handleUser(false);

      Router.push("/");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const unsubscribe = firebase.auth().onIdTokenChanged(handleUser);
    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        signinGoogle,
        signout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const AuthConsumer = AuthContext.Consumer;

export default AuthContext;
