import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ThemeContext } from "../context/ThemeContext";

const Pokemon = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [pokemon, setPokemon] = useState({});
  const [theme] = useContext(ThemeContext);

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
      <Link to={{ pathname: pokemonURL, state: pokemon }}>
        <PokemonBox theme={theme}>
          <img src={pokemon.sprites.front_default} alt="" />
          <PokemonNameBox theme={theme}>
            <p>{pokemon.name}</p>
          </PokemonNameBox>
        </PokemonBox>
      </Link>
    );
  }
};

const PokemonBox = styled.div`
  color: ${props => props.theme.textColor};
  width: 110px;
  height: 110px;
  background-color: ${props => props.theme.pokemonBoxColor};
  margin: 20px;
  border: 2px black solid;
  border-radius: 20px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  padding: 20px;
  img {
    position: absolute;
    top: 0%;
  }
`;

const PokemonNameBox = styled.div`
  background-color: ${props => props.theme.cardNameColor};
  border-top:1px black solid;
  width: 100%;
  height: 40px;
  font-size: 24px;
  position: absolute;
  text-align: center;
  bottom: 0%;
`;


export default Pokemon;
