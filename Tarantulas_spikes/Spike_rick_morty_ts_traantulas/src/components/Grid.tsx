import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import CharacterCard from "./CharacterCard";
import { Character } from "../types/customTypes";

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
                <CharacterCard character={character} />
              </Col>
            );
          })}
      </Row>
    </Container>
  );
}

export default Grid;
