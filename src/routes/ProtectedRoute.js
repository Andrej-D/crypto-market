import React from "react";
import { Outlet } from "react-router";
import { useLogIn } from "../hooks/useLogIn";
import { Navigate } from "react-router-dom";

export const ProtectedRoute = () => {
  const { isLoggedIn } = useLogIn();

  if (!isLoggedIn) {
    return <Navigate to={"/"} />;
  }

  return <Outlet />;
};
