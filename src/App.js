import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import PokemonList from "./components/PokemonList";
import TypeList from "./components/TypeList";
import PokemonDetail from "./components/PokemonDetail";

import "./App.css";

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <div className="main">
          <Route exact path="/pokemons" component={PokemonList} />
          <Route exact path="/types" component={TypeList} />
          <Route exact path="/pokemon/:id" component={PokemonDetail} />
        </div>
      </div>
    </Router>
  );
};

export default App;
