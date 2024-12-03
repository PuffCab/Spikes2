import { Navigate, useNavigate } from "react-router-dom";

function NoMatchPage() {
  const navigate = useNavigate();

  const goTo = () => {
    navigate("/", { replace: true });
  };

  return (
    <div>
      <h1>Sorry...there is no content to display</h1>
      {/* <button
        onClick={() => {
          navigate("/");
        }}
      >
        go to Home
      </button> */}
      <button onClick={goTo}>go to Home</button>
      {/* <Navigate to={"/"} /> */}
    </div>
  );
}

export default NoMatchPage;
