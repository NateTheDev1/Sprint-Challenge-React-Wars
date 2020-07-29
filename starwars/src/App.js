import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import Character from "./components/Character";
import reactstrap, { Container, Row } from "reactstrap";

// Try to think through what state you'll need for this app before starting. Then build out
// the state properties here.

// Fetch characters from the API in an effect hook. Remember, anytime you have a
// side effect in a component, you want to think about which state and/or props it should
// sync up with, if any.

const url = `https://rickandmortyapi.com/api/character/`;

const App = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setCharacters(response.data.results);
        console.log(response.data.results);
      })
      .catch((err) => {
        console.log("There was an error fetching the correct data...", err);
      });
  }, []);

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <Container>
        <Row>
          {characters.map((c) => (
            <Character character={c} key={c.id} />
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default App;
