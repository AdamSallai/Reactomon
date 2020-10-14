import React, { Component } from 'react';
import axios from 'axios';

export class TypeList extends Component {
  state = { results: []};
  
  componentDidMount() {
    axios
      .get("https://pokeapi.co/api/v2/type")
      .then(res => {
        this.setState({...res.data})
      })
  }
  render() {
    return this.state.results.map((type) => (
      <h1 className="pokemon-type">{type.name}</h1>
    ))
  }
}

export default TypeList
