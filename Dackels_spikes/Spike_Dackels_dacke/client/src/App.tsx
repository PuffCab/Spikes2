import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Register from "./pages/Register";
import Login from "./pages/Login";
import useUserStatus from "./hooks/useUserStatus";

function App() {
  const isUserLoggedIn = useUserStatus();
  console.log("isUserLoggedIn :>> ", isUserLoggedIn);

  const logout = () => {
    localStorage.removeItem("token");
  };
  useEffect(() => {
    if (isUserLoggedIn === "logged in") {
      console.log("%c user is logged in", "color:green");
    } else {
      console.log("%c you need to login", "color:red");
    }
  }, [isUserLoggedIn]);

  return (
    <>
      <h1>Dackels App</h1>
      <button onClick={logout}>Logout</button>
      <hr />
      <Register />
      <hr />
      <Login />
    </>
  );
}

export default App;
