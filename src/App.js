import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import PokemonList from "./components/PokemonList";
import TypeList from "./components/TypeList";
import PokemonDetail from "./components/PokemonDetail";

import "./App.css";

export class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
            <Route
              exact
              path="/pokemons"
              render={(props) => (
                <React.Fragment>
                  <PokemonList />
                </React.Fragment>
              )}
            />
            <Route
              exact
              path="/types"
              render={(props) => (
                <React.Fragment>
                  <TypeList />
                </React.Fragment>
              )}
            />
            <Route
              exact
              path="/pokemon/:id"
              component={PokemonDetail}
            />
        </div>
      </Router>
    );
  }
}

export default App;
