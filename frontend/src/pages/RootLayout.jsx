import React from "react";
import { Outlet } from "react-router";
import MainNavigationComponent from "../components/MainNavigationComponent";

const RootLayout = () => {
  return (
    <>
      <MainNavigationComponent />
      <div className="container">
        <Outlet />
      </div>
    </>
  );
};

export default RootLayout;
