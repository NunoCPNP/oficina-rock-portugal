import { createContext, useState, useEffect } from "react";
import { toast } from "react-toastify";
import Router from "next/router";

import firebase, {
  firestore,
  createUserProfileDocument,
} from "@/services/firebase";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

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
      const response = await firebase
        .auth()
        .signInWithPopup(new firebase.auth.GoogleAuthProvider());

      await handleUser(response.user);

      Router.push("/");
    } catch(error) {
      console.log(error);
    }
  };

  const signout = async () => {
    try {
      await firebase.auth().signOut();

      handleUser(false);

      Router.push("/");
    } catch(error) {
      console.log(error)
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
