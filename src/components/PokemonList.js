import React, { useState, useEffect, useCallback, useRef } from "react";
import axios from "axios";
import Pokemon from "./Pokemon";
import styled from "styled-components";

export const PokemonList = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [pokemons, setPokemons] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [nextUrl, setNextUrl] = useState("https://pokeapi.co/api/v2/pokemon");

  useEffect(() => {
    setIsLoading(true);
    let cancel;
    axios({
      method: "GET",
      url: nextUrl,
      cancelToken: new axios.CancelToken((c) => (cancel = c)),
    })
      .then((res) => {
        setPokemons((prevPokemons) => [...prevPokemons, ...res.data.results]);
        setNextUrl(res.data.next);
        setIsLoading(false);
      })
      .catch((e) => {
        if (axios.isCancel(e)) return;
      });
    return () => cancel();
  }, [pageNumber]);

  const observer = useRef();
  const lastPokemonRef = useCallback(
    (node) => {
      if (isLoading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          setPageNumber((prevPageNumber) => prevPageNumber + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [isLoading]
  );
  const allPokemons = pokemons.map((pokemon, index) => {
    if (pokemons.length === index + 1) {
      console.log(pokemon.name);
      return (
        <div key={pokemon.name} ref={lastPokemonRef}>
          <Pokemon pokemon={pokemon} />
        </div>
      );
    } else {
      return (
        <div key={pokemon.name}>
          <Pokemon pokemon={pokemon} />
        </div>
      );
    }
  });
  return <Pokemons className="pokemons">{allPokemons}</Pokemons>;
};

const Pokemons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  position: relative;
`;

export default PokemonList;
