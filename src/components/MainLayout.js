import React from "react";
import Header from "./Header";

export const MainLayout = ({ children }) => {
  return (
    <>
      <div component={"main"}>
        <div className="container-fluid position-relative bg-white p-0">
          <Header />
          <div className="content">{children}</div>
        </div>
      </div>
    </>
  );
};
