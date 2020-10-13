import React, { Component } from 'react'
import axios from 'axios'


export class Pokemon extends Component {
  state = {
    name: "",
    sprites: {front_default:""}
  }

  componentDidMount = () => {
    axios
      .get(this.props.pokemon.url)
      .then(response => {
        this.setState(response.data)
      });
  }


  render() {
    return (
      <div className="pokemon-box">
        <img src={this.state.sprites.front_default} alt=""/>
        <p>{this.state.name}</p>
      </div>
    )
    
  }
}

export default Pokemon
