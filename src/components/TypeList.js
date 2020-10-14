import React, { Component } from "react";
import axios from "axios";

export class TypeList extends Component {
  state = { loading: true };

  componentDidMount() {
    axios.get("https://pokeapi.co/api/v2/type").then((res) => {
      this.setState({ loading: false, ...res.data });
    });
  }
  render() {
    if (this.state.loading) {
      return <p></p>;
    } else {
      return this.state.results.map((type) => (
        <h1 key={type.name} className="pokemon-type">{type.name}</h1>
      ));
    }
  }
}

export default TypeList;
