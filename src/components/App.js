import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";
import { name, city } from "../data/data";

function App() {
  return (
    <div>
      <NavBar />
      <Home name={name} city={city} />
      <About />
    </div>
  );
}

export default App;
