import { useContext } from "react";
import { CharactersContext } from "../context/CharactersContext";
import { AuthContext } from "../context/AuthContext";

function Scripts() {
  const { info } = useContext(CharactersContext);

  console.log("info", info);
  return <div>List of Scripters from the Show</div>;
}

export default Scripts;
