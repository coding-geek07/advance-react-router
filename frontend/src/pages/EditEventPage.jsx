import React from "react";
import { useParams } from "react-router";

const EditEventPage = () => {
  const params = useParams();
  return <div>EditEventPage: {params.editEventId}</div>;
};

export default EditEventPage;
