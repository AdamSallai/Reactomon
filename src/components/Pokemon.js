import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export class Pokemon extends Component {
  state = {
    loading: true
  };

  componentDidMount() {
    axios.get(this.props.pokemon.url).then((response) => {
      this.setState({loading: false, ...response.data});
    });
  }

  render() {
    if (this.state.loading) {
      return <p></p>;
    } else {
      const pokemonURL = "/pokemon/" + this.state.id;
      return (
        <Link
          to={{
            pathname: pokemonURL,
            state: this.state,
          }}
        >
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
}

export default Pokemon;
