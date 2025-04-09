import React from "react";
import { Link, useParams } from "react-router";

const EventDetailPage = () => {
  const params = useParams();

  return (
    <>
      <div>EventDetailPage: {params.eventId}</div>
      <Link to=".." relative="path">
        Back
      </Link>
    </>
  );
};

export default EventDetailPage;
