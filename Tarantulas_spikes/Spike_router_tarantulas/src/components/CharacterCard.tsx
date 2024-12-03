import { useState } from "react";
import { Button } from "react-bootstrap";
import { Character } from "../types/customTypes";
import CardModal from "./CardModal";

type CharacterCardProps = {
  character: Character;
};

const CharacterCard = ({ character }: CharacterCardProps) => {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img
              src={character.image}
              alt="Avatar"
              style={{ width: "200px", height: "200px" }}
            />
          </div>
          <div className="flip-card-back">
            <h2>{character.name}</h2>
            <Button variant="primary" onClick={handleShow}>
              Show more
            </Button>
          </div>
        </div>
      </div>
      <CardModal
        show={show}
        setShow={setShow}
        gender={character.gender}
        status={character.status}
      />
    </>
  );
};

export default CharacterCard;
