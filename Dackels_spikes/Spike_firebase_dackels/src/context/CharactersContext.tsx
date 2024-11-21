import { ReactNode, createContext, useEffect, useState } from "react";
import { ApiOkResponse, Character, Info } from "../types/customTypes";

//2.1 Define type for context values

type CharactersContextProviderProps = {
  children: ReactNode;
};

type CharactersContextType = {
  charactersList: Character[] | null;
  userSearch: string;
  info: Info | null;
  url: string;
  setUserSearch: (searchTerm: string) => void;
  setUrl: (urlAddress: string) => void;
  getCharacters: (apiUrl: string) => Promise<void>;
};

//2. define the initial value of the context(initial value of all states and functions i am sharing through our provider)
const charactersContextInitialValue = {
  charactersList: [] as Character[],
  userSearch: "",
  info: {} as Info,
  url: "",
  setUserSearch: () => {
    throw new Error("context still not initialized");
  },
  setUrl: () => {
    throw new Error("context still not initialized");
  },
  getCharacters: () => {
    throw new Error("context still not initialized");
  },
};

//1. Create Context
export const CharactersContext = createContext<CharactersContextType>(
  charactersContextInitialValue
);

//3. Define the content of our Wharehouse/store/context (the provider)
export const CharactersContextProvider = ({
  children,
}: CharactersContextProviderProps) => {
  //   console.log("children", children);
  // console.log("%c CharactersContext rerendered", "color:yellow");

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
      //   console.log("data", data);
      setCharactersList(data.results);
      setInfo(data.info);
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    getCharacters(url);
  }, [url]);
  return (
    <CharactersContext.Provider
      value={{
        charactersList,
        userSearch,
        info,
        url,
        setUserSearch,
        setUrl,
        getCharacters,
      }}
    >
      {children}
    </CharactersContext.Provider>
  );
};
