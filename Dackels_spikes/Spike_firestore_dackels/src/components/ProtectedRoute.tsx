import { ReactNode, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate } from "react-router-dom";
import { checkUserStatus } from "../utils/userServices";

type ProtectedRouteProps = {
  children: ReactNode;
};

function ProtectedRoute({ children }: ProtectedRouteProps) {
  // console.log("protected route rendered");
  const { user } = useContext(AuthContext);
  const isUserLoggedin = user ? true : false;

  //   const isUserLoggedin = checkUserStatus(user);

  return <>{isUserLoggedin ? children : <h1>You need to login first</h1>}</>;
  //   return <>{isUserLoggedin ? children : <Navigate to={"/"} />}</>;
}

export default ProtectedRoute;
