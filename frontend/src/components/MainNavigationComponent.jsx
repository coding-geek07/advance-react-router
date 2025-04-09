import React from "react";
import "./MainNavigation.css";
import { NavLink } from "react-router";

const MainNavigationComponent = () => {
  const linkActive = ({ isActive }) => (isActive ? "linkActive" : undefined);
  return (
    <>
      <ul className="listItems">
        <li>
          <NavLink to="" className={linkActive}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="events" className={linkActive}>
            Events
          </NavLink>
        </li>
        <li>
          <NavLink to="newEvent" className={linkActive}>
            New Event
          </NavLink>
        </li>
      </ul>
    </>
  );
};

export default MainNavigationComponent;
