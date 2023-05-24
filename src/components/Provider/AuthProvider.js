import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../../firebase/firebaseconfig";

export const Authcontext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setuser] = useState(null);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currenstuser) => {
      setuser(currenstuser);
      setloading(false);
    });
    return () => {
      return unsubscribe();
    };
  }, []);

  const createUser = (email, password) => {
    setloading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signin = (email, password) => {
    setloading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const singout = () => {
    setloading(true);
    return signOut(auth);
  };
  const authinfo = { createUser, signin, loading, user, singout };

  return (
    <Authcontext.Provider value={authinfo}>{children}</Authcontext.Provider>
  );
};

export default AuthProvider;
