import React from "react";
import { useOutletContext } from "react-router-dom";

function Artists() {
  const context = useOutletContext();
  console.log("context", context);
  return <div>Info about the artists of the show</div>;
}

export default Artists;
