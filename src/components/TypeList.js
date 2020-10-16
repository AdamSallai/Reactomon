import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

export const TypeList = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [pokemons, setPokemons] = useState([]);

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
      <Type key={type.name}>
        {type.name}
      </Type>
    ));
  }
};

const Type = styled.h1`
  text-align: center;
  margin-bottom: 10px;
`;

export default TypeList;
