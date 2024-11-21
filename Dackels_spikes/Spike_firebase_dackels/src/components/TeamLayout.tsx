import React from "react";
import { Link, Outlet } from "react-router-dom";

function TeamLayout() {
  return (
    <>
      <Outlet />
      <nav>
        <Link to={"scripts"}>Scripting Team</Link> |
        <Link to={"producers"}>Producers Team</Link>
      </nav>
    </>
  );
}

export default TeamLayout;
