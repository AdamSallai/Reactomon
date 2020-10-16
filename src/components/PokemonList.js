import React, { useState, useEffect } from "react";
import axios from "axios";
import Pokemon from "./Pokemon";
import styled from "styled-components";


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
    return <Pokemons className="pokemons">{allPokemons}</Pokemons>;
  }
}

const Pokemons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  position: relative;
`


export default PokemonList;
