import React, { useState, createContext } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = (props) => {
  const [colorTheme, setColorTheme] = useState("dark");

  return (
    <ThemeContext.Provider value={[theme[colorTheme], setColorTheme]}>
      {props.children}
    </ThemeContext.Provider>
  );
};

const theme = {
  light: {
    name: "light",
    textColor: "#000",
    navbarColor: "#d3f0ff",
    navbarHoverColor: "#98c5ff",
    cardNameColor: "#76b0ff",
    borderColor: "black",
    pokemonBoxColor: "#97cfff",
    mainColor: "#b5dffe",
    backgroundColor: "#97cfff"
  },
  dark: {
    name: "dark",
    textColor: "#fff",
    navbarColor: "#120043",
    navbarHoverColor: "#1a0062",
    cardNameColor: "#120043",
    borderColor: "white",
    pokemonBoxColor: "#1a0088",
    mainColor: "#1a0062",
    backgroundColor: "#0d0624"
  },
};
