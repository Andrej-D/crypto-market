import React from "react";
import { Outlet } from "react-router";
import { MainLayout } from "../components/MainLayout";

export const GlobalAppRoute = () => {
  return (
    <MainLayout>
      <Outlet />
    </MainLayout>
  );
};
