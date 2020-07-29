// Write your Character component here
import React from "react";
import reactstrap, {
  Card,
  CardText,
  CardBody,
  CardTitle,
  Col,
  CardImg,
  CardSubtitle,
  CardLink,
  Row,
} from "reactstrap";
import "./Character.css";

const Character = ({ character }) => {
  return (
    <Col xs="6" md="4" b xl="3" className="Character-Card">
      <Card>
        <CardImg top width="100%" src={character.image} alt={character.name} />
        <CardBody>
          <CardTitle>{character.name}</CardTitle>
          <CardSubtitle>{character.status}</CardSubtitle>
          <CardText>
            {character.species} {character.gender}
          </CardText>
          <CardBody>
            <Col>
              <CardLink href={character.url}>More Information</CardLink>
            </Col>
            <CardLink href={character.episode[0]}>First Appearance</CardLink>
          </CardBody>
        </CardBody>
      </Card>
    </Col>
  );
};

export default Character;
