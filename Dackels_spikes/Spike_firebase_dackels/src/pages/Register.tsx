import React, { ChangeEvent, FormEvent, useContext, useState } from "react";
import { auth } from "../config/firebaseConfig";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";

function Register() {
  //   console.log("auth", auth);
  const { register } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleRegisterClick = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("email, password:::", email, password);
    register(email, password);
  };

  return (
    <div>
      <h2>Register</h2>
      <div>
        <form onSubmit={handleRegisterClick}>
          <div>
            <input
              type="text"
              name="email"
              id="email"
              onChange={handleEmailChange}
            />
            <label htmlFor="email">Email</label>
          </div>
          <div>
            <input
              type="text"
              name="password"
              id="password"
              onChange={handlePasswordChange}
            />
            <label htmlFor="password">password</label>
          </div>
          <button>Register</button>
        </form>
      </div>
      <Link to={"/login"}>Do you have an account? just login</Link>
    </div>
  );
}

export default Register;
