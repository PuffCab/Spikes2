import { ChangeEvent } from "react";

type SearchProps = {
  handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

function Search({ handleInputChange }: SearchProps) {
  return (
    <input
      type="text"
      placeholder="type a character's name"
      onChange={handleInputChange}
    />
  );
}

export default Search;
