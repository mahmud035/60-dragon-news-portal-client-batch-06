import React, { createContext, useEffect, useState } from 'react';
import app from '../../firebase configuration/firebase.config';
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from 'firebase/auth';

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const googleProvider = new GoogleAuthProvider();

  //* 1. Create User
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //* 2. Email SignIn
  const emailSignIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  //* 3. Google SignIn
  const googleSignIn = () => {
    return signInWithPopup(auth, googleProvider);
  };

  //* 4. LogOut
  const logOut = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log('inside auth state change', currentUser);
      setUser(currentUser);
    });

    return () => {
      unSubscribe();
    };
  }, []);

  const authInfo = { user, googleSignIn, logOut, createUser, emailSignIn };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
