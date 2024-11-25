import { Navigate, useNavigate } from "react-router-dom";

function NoMatchPage() {
  const navigateTo = useNavigate();

  const redirectTo = () => {
    navigateTo("/");
  };
  return (
    <div>
      <h1>Nothing to display here</h1>
      <button
        // onClick={() => {
        //   navigateTo("/");
        // }}
        onClick={redirectTo}
      >
        take me home
      </button>
      {/* <Navigate to={"/"} /> */}
    </div>
  );
}

export default NoMatchPage;
