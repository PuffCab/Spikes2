import React from "react";
import { Link, Outlet } from "react-router-dom";

function Team() {
  return (
    <div>
      <h3>The show is made by</h3>
      <nav>
        <Link to={"artists"}>Artists</Link> |
        <Link to={"producers"}>Producers</Link>
      </nav>
      {<Outlet context={{ extraInfo: "you are in teams section" }} />}
    </div>
  );
}

export default Team;
