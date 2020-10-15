import React, { useState, useEffect } from "react";
import axios from "axios";

export const TypeList = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [pokemons, setPokemons] = useState([])

  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/type").then((res) => {
      setPokemons(res.data.results);
      setIsLoading(false);
    });
  }, []);


  if (isLoading) {
    return <p></p>;
  } else {
    return pokemons.map((type) => (
      <h1 key={type.name} className="pokemon-type">{type.name}</h1>
    ));
  }
}

export default TypeList;
