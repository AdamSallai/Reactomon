import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ThemeContext } from "../../context/ThemeContext";

export const Header = (props) => {
  const [theme, setTheme] = useContext(ThemeContext);

  const themeChanger = () => {
    setTheme(theme.name === 'light' ? 'dark': 'light');
  }

  return (
    <NavHeader>
      <H1>Reactomon</H1>
      <Nav className="links" theme={theme}>
        <Link className="link" to="/pokemons">
          Pokemons
        </Link>
        <Link className="link" to="/types">
          Types
        </Link>
        <p onClick={themeChanger}>Theme: {theme.name}</p>
      </Nav>
    </NavHeader>
  );
};

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: ${(props) => props.theme.navbarColor};
  .link,
  p {
    cursor: pointer;
    text-decoration: none;
    font-weight: bold;
    width: 300px;
    text-align: center;
    padding: 20px 50px;
    font-size: 28px;
    &:hover {
      background: ${(props) => props.theme.navbarHoverColor};
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
  font-size: 68px;
  margin: 50px;
`;

export default Header;
