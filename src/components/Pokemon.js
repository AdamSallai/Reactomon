import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export class Pokemon extends Component {
  state = {
    name: "",
    sprites: { front_default: "" },
  };

  componentDidMount() {
    axios.get(this.props.pokemon.url).then((response) => {
      this.setState(response.data);
    });
  };

  render() {
    const pokemonURL = "/pokemon/"+this.state.id;

    return (
      <Link to={{
        pathname: pokemonURL,
        state: this.state
        }}>
        <div className="pokemon-box">
          <img src={this.state.sprites.front_default} alt="" />
          <div className="pokemon-name-box">
            <p>{this.state.name}</p>
          </div>
        </div>
      </Link>
    );
  }
}

export default Pokemon;
