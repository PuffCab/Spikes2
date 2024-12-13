import React, { ChangeEvent, FormEvent, useRef, useState } from "react";
import { LoginOkResponse, User } from "../types/customTypes";

function Login() {
  const [newUser, setNewUser] = useState<User | null>(null);
  const [userCredentials, setUserCredentials] = useState({
    email: "",
    password: "",
  });
  const handleRegisterChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUserCredentials({
      ...userCredentials!,
      [e.target.name]: e.target.value,
    });
  };

  const handleLoginSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log("userCredentials :>> ", userCredentials);
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    const urlencoded = new URLSearchParams();
    urlencoded.append("email", userCredentials.email);
    urlencoded.append("password", userCredentials.password);

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: urlencoded,
    };

    try {
      const response = await fetch(
        "http://localhost:5000/api/user/login",
        requestOptions
      );
      const result = (await response.json()) as LoginOkResponse;
      console.log("result :>> ", result);
      if (result.token) {
        //1. if there is a token in the response, store it in localStorage
        localStorage.setItem("token", result.token);
        //2. Set user (probably in AuthContext with the user info)

        setNewUser(result.user);
      }
      if (!result.token) {
        throw new Error("There is no token, login again");
      }
    } catch (error) {
      console.log("error :>> ", error);
    }
  };
  return (
    <div>
      <h2>Login</h2>
      <div>
        <div>
          <form onSubmit={handleLoginSubmit}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={userCredentials.email}
              onChange={handleRegisterChange}
            />
            <label htmlFor="password">Password</label>

            <input
              type="password"
              name="password"
              id="password"
              value={userCredentials.password}
              onChange={handleRegisterChange}
            />
            <button>Login</button>
          </form>
        </div>
      </div>
      <div>
        {/* {console.log("newUser image", newUser.userImage)} */}
        {newUser && (
          <img
            src={newUser.avatar}
            alt="user avatar picture"
            style={{ width: "200px" }}
          />
        )}
      </div>
    </div>
  );
}

export default Login;
