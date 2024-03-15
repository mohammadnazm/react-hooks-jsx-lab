import React from "react";
import { name, city, image } from "../data/data"; // Adjust the path to your file

const About = () => {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>
        My name is {name}. I'm from {city}.
      </p>
      <img src={image} alt="I made this" />
    </div>
  );
};

export default About;
