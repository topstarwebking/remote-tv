import React from "react";

import { Navigate, Outlet } from "react-router-dom";
// import { useDispatch } from "react-redux";

// import { authActions } from "../store/reducer/auth";

const useAuth = () => {
  const token = localStorage.getItem("authToken");
  if (token) {
    return true;
  } else {
    return false;
  }
};

const ProtectedRoutes = (props) => {
  const auth = useAuth();
  return auth ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoutes;
