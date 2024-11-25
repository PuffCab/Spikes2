import { useParams } from "react-router-dom";

function DetailsPage() {
  //   const params = useParams();
  const { characterName } = useParams();
  //   console.log("params", params);

  //I could fetch using the name/id from the url
  return (
    <div>
      <h1>MOre details about {characterName}</h1>
    </div>
  );
}

export default DetailsPage;
