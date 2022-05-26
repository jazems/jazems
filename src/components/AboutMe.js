import { Box, Text } from "@chakra-ui/react";
const AboutMe = () => {
  return (
    <>
      <Box fontSize="1.1em">
        Hey! I'm a third year at UC Berkeley dual majoring in Computer Science and Data Science.
        Professionally, I hope to leverage my student background in software development, tech
        consulting, and product management to build beautiful, yet robust software for causes that
        matter. I will be interning at <b>Anaplan</b> on the platform engineering team during summer
        2022. Previously, I was a member of Web Development at Berkeley, where I did front-end web
        development for industry clients under an agile scrum framework with other product managers
        and engineers. For fall 2022 I am interested in joining organizations where I can further my
        development skills and network with a community of fun and talented students. In my free
        time you'll find me playing{" "}
        <a href="https://www.smashbros.com/en_US/" target="_blank">
          <Text as="u">Smash</Text>
        </a>
        , learning Japanese, or tampering with web3. If you have any questions, please don't
        hesitate to reach out!
      </Box>
    </>
  );
};

export default AboutMe;
