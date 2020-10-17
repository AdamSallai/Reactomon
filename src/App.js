import React, {useContext} from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import PokemonList from "./components/PokemonList";
import TypeList from "./components/TypeList";
import PokemonDetail from "./components/PokemonDetail";
import styled, { createGlobalStyle } from "styled-components";
import { ThemeContext } from "./context/ThemeContext";


const App = () => {
  const [theme] = useContext(ThemeContext);

  return (
    <Router>
      <GlobalStyle theme={theme}/>
        <div>
          <Header />
          <Main theme={theme}>
            <Route exact path="/pokemons" component={PokemonList} />
            <Route exact path="/types" component={TypeList} />
            <Route exact path="/pokemon/:id" component={PokemonDetail} />
          </Main>
        </div>
    </Router>
  );
};

const GlobalStyle = createGlobalStyle`
  * {
  padding: 0;
  margin: 0;
  color: ${(props) => props.theme.textColor};
}

body {
  background-color: ${(props) => props.theme.backgroundColor};
}
`;

const Main = styled.div`
  background-color: ${(props) => props.theme.mainColor};
  width: 80%;
  position: relative;
  transform: translate(-50%);
  left: 50%;
  border: 1px black solid;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
`;

export default App;
