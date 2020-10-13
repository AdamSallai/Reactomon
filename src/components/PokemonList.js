import React, { Component } from 'react'
import axios from 'axios'
import Pokemon from './Pokemon';

export class PokemonList extends Component {
  state = { results: []};

  componentDidMount() {
    axios
      .get("https://pokeapi.co/api/v2/pokemon")
      .then(res => {
        this.setState({...res.data})
      })
  }

  render() {
    const pokemons = this.state.results.map(pokemon => (
      <Pokemon key={pokemon.name} pokemon={pokemon}/>
    ))
    return (
      <div className="main">
        {pokemons}
      </div>
    )
  }
}

export default PokemonList
