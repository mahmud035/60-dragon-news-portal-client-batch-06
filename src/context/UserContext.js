import React, { createContext } from 'react';

const AuthContext = createContext();

const authInfo = {};

const UserContext = ({ children }) => {
  return (
    <>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </>
  );
};

export default UserContext;
