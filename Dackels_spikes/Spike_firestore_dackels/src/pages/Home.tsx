import React, { useContext } from "react";
import { CharactersContext } from "../context/CharactersContext";
import { db } from "../config/firebaseConfig";

function Home() {
  const { charactersList } = useContext(CharactersContext);
  // console.log("app", app);
  // console.log("db", db);
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
