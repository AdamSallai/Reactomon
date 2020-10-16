import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const Header = (props) => {
  return (
    <NavHeader>
      <H1>Pokémon</H1>
      <Nav className="links">
        <Link className="link" to="/pokemons">
          Pokemons
        </Link>
        <Link className="link" to="/types">
          Types
        </Link>
      </Nav>
    </NavHeader>
  );
};

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background: rgb(1, 19, 63);
  .link {
    text-decoration: none;
    width: 300px;
    text-align: center;
    padding: 20px 50px;
    background: rgb(1, 19, 63);
    color: white;
    font-size: 24px;
    &:hover {
      background: rgb(1, 24, 82);
    }
  }
`;
const NavHeader = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const H1 = styled.h1`
  font-size: 48px;
  margin: 50px;
`;

export default Header;
