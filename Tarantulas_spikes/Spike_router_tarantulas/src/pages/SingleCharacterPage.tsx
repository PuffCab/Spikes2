import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { Character } from "../types/customTypes";

function SingleCharacterPage() {
  const params = useParams();
  const location = useLocation();
  console.log("location", location);
  // const {characterId} = useParams()
  const [singleCharacter, setSingleCharacter] = useState<Character | null>(
    null
  );
  console.log("params", params);

  const getSingleCharacter = async () => {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character/${params.characterId}`
    );
    const result: Character = await response.json();
    setSingleCharacter(result);
  };

  useEffect(() => {
    getSingleCharacter();
  }, []);

  return (
    <div>
      <h1>This is the page from {singleCharacter?.name}</h1>
    </div>
  );
}

export default SingleCharacterPage;
