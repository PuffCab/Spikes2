import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <h2>asdasddasd</h2>
      <Link to="/">Home</Link> | <Link to="characters">Characters</Link> |{" "}
      <NavLink
        style={({ isActive }) => {
          return isActive ? { fontSize: "50px" } : {};
        }}
        to={"about"}
      >
        {({ isActive }) => {
          return isActive ? "You are in About" : "About";
        }}
      </NavLink>{" "}
      |<Link to={"team"}>Team</Link>
    </nav>
  );
}

export default Navbar;
