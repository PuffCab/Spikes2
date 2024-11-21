import React, { useContext } from "react";
import { CharactersContext } from "../context/CharactersContext";
import { app } from "../config/firebaseConfig";

function Home() {
  const { charactersList } = useContext(CharactersContext);
  console.log("app", app);
  return (
    <div>
      <h1>Home</h1>

      <h3>
        You can find the information of{" "}
        {charactersList?.length ? charactersList?.length : "N/A"} characters
      </h3>
    </div>
  );
}

export default Home;
