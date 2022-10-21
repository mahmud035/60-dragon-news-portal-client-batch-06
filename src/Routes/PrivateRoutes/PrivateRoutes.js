import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import Spinner from 'react-bootstrap/Spinner';

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  const location = useLocation();

  if (loading) {
    return (
      <Spinner
        animation="border"
        variant="danger"
        className="position-absolute top-25 start-50"
      />
    );
  }

  if (user && user.uid) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivateRoutes;

/* 
1. only allow authenticated users to visit the route
2. fixed page reload issue
3. Redirect user to the route they wanted to go before login
*/
