import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { User } from "../types/customTypes";

function NavBar() {
  const { user, logout } = useContext(AuthContext);

  const handleLogoutClick = () => {
    logout();
  };
  return (
    <nav>
      <NavLink to="/">
        {({ isActive }) => {
          return isActive ? "Home" : "not at Home";
        }}
      </NavLink>{" "}
      |{" "}
      {user && (
        <NavLink
          to="/characters"
          style={({ isActive }) => {
            return isActive ? { fontSize: "50px" } : {};
          }}
        >
          Characters
        </NavLink>
      )}
      |{""} <Link to="/register">Register</Link> |{" "}
      <Link to="/login">Login</Link> | <Link to="/chat">Chat</Link> |{" "}
      <Link to="/about">About</Link> | <NavLink to="/team">Team</NavLink>|{" "}
      {user && (
        <Button onClick={handleLogoutClick} variant="danger">
          Logout
        </Button>
      )}
    </nav>
  );
}

export default NavBar;
