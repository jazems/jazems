import Card from "./Card";
import { SimpleGrid } from "@chakra-ui/react";
import useformdemo from "../assets/useformdemo.gif";
import arlertdemo from "../assets/arlertdemo.png";
import byowdemo from "../assets/byowdemo.png";
import bearmapsdemo from "../assets/bearmapsdemo.png";
import tictactoedemo from "../assets/tictactoedemo.gif";

const Projects = () => {
  return (
    <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacingX="30px">
      <Card
        title="useForm Hook"
        body="Custom React hook for forms with text input validation and submission logic. Can also add new text inputs to the form."
        technologies="React.js, Chakra-ui"
        src={useformdemo}
      />
      <Card
        title="Tic-Tac-Toe"
        body="Simple tic-tac-toe game with resettable score tracker."
        technologies="React.js, HTML, CSS"
        src={tictactoedemo}
      />
      <Card
        title="Arlert Toolkit"
        body="A lightweight Discord administration toolkit with 10+ commands. Used Mongo to store custom bot prefixes and embed colors."
        technologies="Node.js, MongoDB, Discord.js API"
        src={arlertdemo}
      />
      <Card
        title="BearMaps"
        body="Developed backend of a web-browser based Google Maps clone of Berkeley, including rastering, routing, and autocomplete functions in Java. This was developed in CS61B: Data Structures."
        technologies="Java"
        src={bearmapsdemo}
      />
      <Card
        title="Build Your Own World"
        body="Designed and implemented a 2D tile-based game in which players must explore caves to retrieve a key in order to unlock a treasure room before time runs out. This was developed in CS61B: Data Structures."
        technologies="Java, StdDraw"
        src={byowdemo}
      />
    </SimpleGrid>
  );
};

export default Projects;
