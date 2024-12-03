import { Col, Container, Row } from "react-bootstrap";
import CharacterCard from "./CharacterCard";
import { Character } from "../types/customTypes";
import { Link } from "react-router-dom";

type GridProps = {
  charactersList: Character[];
};

function Grid({ charactersList }: GridProps) {
  return (
    <Container>
      <Row>
        {charactersList &&
          charactersList.map((character) => {
            return (
              <Col key={character.id}>
                <Link to={`${character.id}`} state={{ info: "some info" }}>
                  <CharacterCard character={character} />
                </Link>
              </Col>
            );
          })}
      </Row>
    </Container>
  );
}

export default Grid;
