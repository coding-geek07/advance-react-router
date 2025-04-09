import React from "react";
import { useNavigate } from "react-router";

const EventsPage = () => {
  const navigateTo = useNavigate();
  const navigationHandler = (event) => {
    navigateTo(`${event.target.id}`);
  };
  return (
    <>
      <div>EventsPage</div>
      <ul onClick={navigationHandler}>
        <li id="1">Event 1</li>
        <li id="2">Event 2</li>
        <li id="3">Event 3</li>
      </ul>
    </>
  );
};

export default EventsPage;
