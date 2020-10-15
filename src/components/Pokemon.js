import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Pokemon = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [pokemon, setPokemon] = useState({});


  const getPokemon = () => {
    setIsLoading(true);
    axios.get(props.pokemon.url).then((response) => {
      setPokemon(response.data);
      setIsLoading(false);
    });
  };

  useEffect(getPokemon, []);

  if (isLoading) {
    return <p></p>;
  } else {
    const pokemonURL = "/pokemon/" + pokemon.id;
    return (
      <Link to={{pathname: pokemonURL, state: pokemon}}>
        <div className="pokemon-box">
          <img src={pokemon.sprites.front_default} alt="" />
          <div className="pokemon-name-box">
            <p>{pokemon.name}</p>
          </div>
        </div>
      </Link>
    );
  }
};

export default Pokemon;
