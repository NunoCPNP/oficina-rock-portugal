import { createContext, useState, useEffect } from "react";
import Router from "next/router";

import firebase, { createUserProfileDocument } from "@/services/firebase";

const AuthContext = createContext();

const formatUser = async (user) => ({
  uid: user.uid,
  email: user.email,
  name: user.displayName,
  photoUrl: user.photoURL,
});

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const handleUser = async (currentUser) => {
    if (currentUser) {

      createUserProfileDocument(currentUser);

      const formatedUser = await formatUser(currentUser);

      setUser(formatedUser);

      return formatedUser.email;
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
