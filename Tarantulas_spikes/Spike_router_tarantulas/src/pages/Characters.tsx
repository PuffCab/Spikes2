import { ChangeEvent, MouseEvent, useEffect, useState } from "react";
import { ApiOkResponse, Character, Info } from "../types/customTypes";
import { Button } from "react-bootstrap";

import Grid from "../components/Grid";
import Search from "../components/Search";

const Characters = () => {
  const [charactersList, setCharactersList] = useState<Character[] | null>(
    null
  );

  const [userSearch, setUserSearch] = useState("");
  const [info, setInfo] = useState<Info | null>(null);
  const [url, setUrl] = useState("https://rickandmortyapi.com/api/character");

  const getCharacters = async (apiUrl: string) => {
    try {
      const response = await fetch(apiUrl);
      const data = (await response.json()) as ApiOkResponse;
      console.log("data", data);
      setCharactersList(data.results);
      setInfo(data.info);
    } catch (error) {
      console.log("error", error);
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    // console.log("e.target.value", e.target.value);
    setUserSearch(e.target.value);
  };
  //This is the longer version of charactersList?.filter(.....)
  //   if (charactersList) {
  //     const filteredCharacters = charactersList.filter((character) => {
  //       return character.name.includes(userSearch);
  //     });
  //   }
  const filteredCharacters = charactersList?.filter((character) => {
    return character.name.toLowerCase().includes(userSearch.toLowerCase());
  });

  const handlePaginationButtonClick = (e: MouseEvent<HTMLButtonElement>) => {
    const eventTarget = e.target as HTMLButtonElement;
    //   console.log("e.target.value", eventTarget.value);
    const buttonType = eventTarget.value;
    if (buttonType === "Next") {
      if (info && info.next) {
        setUrl(info.next);
      }
    }
    if (buttonType === "Prev") {
      if (info && info.prev) {
        setUrl(info.prev);
      }
    }
  };

  useEffect(() => {
    getCharacters(url);
  }, [url]);

  return (
    <div>
      <div>
        <Search handleInputChange={handleInputChange} />
      </div>
      <div>
        <Button
          onClick={handlePaginationButtonClick}
          value="Prev"
          disabled={info?.prev ? false : true}
        >
          Prev
        </Button>
        <Button
          onClick={handlePaginationButtonClick}
          value="Next"
          disabled={info?.next ? false : true}
        >
          Next
        </Button>
      </div>
      <div>
        {filteredCharacters && <Grid charactersList={filteredCharacters} />}
      </div>
    </div>
  );
};

export default Characters;
