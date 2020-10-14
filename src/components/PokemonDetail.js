import React, { Component } from "react";

export class PokemonDetail extends Component {
  state = {
    loading: true,
    pokemon: {},
  };

  componentDidMount() {
    this.setState({
      pokemon: this.props.location.state,
      loading: false,
    });
  }

  render() {
    if (!this.state.loading){
      return <div>{this.state.pokemon.name}</div>;
    }
    return <div></div>
  }
}

export default PokemonDetail;
