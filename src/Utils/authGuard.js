import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ Component, redirectPath, ...props }) => {
  const { isLoggedIn } = useSelector((state) => state.AuthReducer);
  if (!isLoggedIn) {
    return <Navigate to={redirectPath} />;
  }
  return <Component {...props} />;
};
