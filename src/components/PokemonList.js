import React, { useState, useEffect } from "react";
import axios from "axios";
import Pokemon from "./Pokemon";

export const PokemonList = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [pokemons, setPokemons] = useState([]);


  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon").then((res) => {
      setPokemons(res.data.results);
      setIsLoading(false);
    });
  },[])

  if (isLoading) {
    return <p></p>;
  } else {
    const allPokemons = pokemons.map((pokemon) => (
      <Pokemon key={pokemon.name} pokemon={pokemon} />
    ));
    return <div className="main">{allPokemons}</div>;
  }
}

export default PokemonList;
