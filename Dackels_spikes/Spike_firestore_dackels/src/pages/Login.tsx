import { ChangeEvent, FormEvent, useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";

function Login() {
  //   console.log("auth", auth);
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleLoginClick = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // console.log("email, password:::", email, password);
    login(email, password);
  };

  return (
    <div>
      <h2>Login</h2>
      <div>
        <form onSubmit={handleLoginClick}>
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
          <button>Login</button>
        </form>
      </div>
      <Link to={"/register"}>New here? Create an account</Link>
    </div>
  );
}

export default Login;
