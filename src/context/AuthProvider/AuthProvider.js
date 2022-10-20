import React, { createContext, useState } from 'react';
import app from '../../firebase configuration/firebase.config';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const googleProvider = new GoogleAuthProvider();

  const authInfo = { user };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
