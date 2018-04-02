import React from "react";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Character from "./components/Character";
import characters from "./characters.json";
import Nav from "./components/Navbar";
import Footer from "./components/Footer";
// import Container from "./components/Container";

const App = () => (

  <Wrapper>
    <Nav />
    <Title />
    <Character
      name={characters[0].name}
      image={characters[0].image}
    />
     <Character
      name={characters[1].name}
      image={characters[1].image}
    />
    <Character
      name={characters[2].name}
      image={characters[2].image}
    />
    <Character
      name={characters[3].name}
      image={characters[3].image}
    />
    <Character
      name={characters[4].name}
      image={characters[4].image}
    />
    <Character
      name={characters[5].name}
      image={characters[5].image}
    />
    <Character
      name={characters[6].name}
      image={characters[6].image}
    />
    <Character
      name={characters[7].name}
      image={characters[7].image}
    />
    <Character
      name={characters[8].name}
      image={characters[8].image}
    />
    <Character
      name={characters[9].name}
      image={characters[9].image}
    />
    <Character
      name={characters[10].name}
      image={characters[10].image}
    />
    <Character
      name={characters[11].name}
      image={characters[11].image}
    />
    <footer />
  </Wrapper>
);

export default App;
