import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth } from "../../firebase/firebaseconfig";
import { GoogleAuthProvider } from "firebase/auth";

export const Authcontext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setuser] = useState(null);
  const [loading, setloading] = useState(true);
  const provider = new GoogleAuthProvider();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currenstuser) => {
      setuser(currenstuser);
      setloading(false);
      if (currenstuser && currenstuser.email) {
        const logeduser = {
          email: currenstuser.email,
        };
        fetch("http://localhost:5000/jwt", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(logeduser),
        })
          .then((res) => res.json())
          .then((datas) => {
            localStorage.setItem("cars-access-token", datas.token);
          });
      } else {
        localStorage.removeItem("cars-access-token");
      }
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

  const gogleloggedin = () => {
    return signInWithPopup(auth, provider);
  };

  const authinfo = {
    createUser,
    signin,
    loading,
    user,
    singout,
    gogleloggedin,
  };

  return (
    <Authcontext.Provider value={authinfo}>{children}</Authcontext.Provider>
  );
};

export default AuthProvider;
