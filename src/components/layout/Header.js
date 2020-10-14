import React from "react";
import { Link } from "react-router-dom";

export const Header = (props) => {
  return (
    <header>
      <h1>Pokémon</h1>
      <nav className="links">
        <Link className="link" to="/pokemons">
          Pokemons
        </Link>
        <Link className="link" to="/types">
          Types
        </Link>
      </nav>
    </header>
  );
};

export default Header;
