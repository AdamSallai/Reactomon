import React, { useState, useEffect } from "react";

const PokemonDetail = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [pokemon, setPokemon] = useState({});

  useEffect(() => {
    setPokemon(props.location.state);
    setIsLoading(false);
  }, [props.location.state])

  if (!isLoading){
    return <div>{pokemon.name}</div>;
  }
  return <div></div>
  
}

export default PokemonDetail;
