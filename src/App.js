import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import PokemonList from "./components/PokemonList";
import TypeList from "./components/TypeList";
import PokemonDetail from "./components/PokemonDetail";
import styled from "styled-components";

import "./App.css";

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Main>
          <Route exact path="/pokemons" component={PokemonList} />
          <Route exact path="/types" component={TypeList} />
          <Route exact path="/pokemon/:id" component={PokemonDetail} />
        </Main>
      </div>
    </Router>
  );
};

const Main = styled.div`
  background-color: rgb(238, 238, 238);
  width: 80%;
  position: relative;
  transform: translate(-50%);
  left:50%;
  border: 1px black solid;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
`;

export default App;
