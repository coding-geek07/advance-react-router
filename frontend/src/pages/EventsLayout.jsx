import React from "react";
import { Outlet } from "react-router";

const EventsLayout = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default EventsLayout;
