import React from "react";
import { Route, Navigate } from "react-router-dom";
import { isAuthenticated } from "./Auth/auth-helpers";

const PrivateRoute = ({ component: Component, path, ...props }) => (
  <Route
    path={path}
    element={
      isAuthenticated() ? <Component {...props} /> : <Navigate to="/login" />
    }
  />
);

export default PrivateRoute;
