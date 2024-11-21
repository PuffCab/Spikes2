import React, { useContext } from "react";
import { CharactersContext } from "../context/CharactersContext";

function Test() {
  const { info } = useContext(CharactersContext);
  console.log("info", info);
  return <div>Nested Route</div>;
}

export default Test;
