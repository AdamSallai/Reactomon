import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import PokemonList from "./components/PokemonList";

import "./App.css";

export class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <div className="main">
            <Route
              exact
              path="/pokemons"
              render={(props) => (
                <React.Fragment>
                  <PokemonList />
                </React.Fragment>
              )}
            />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
