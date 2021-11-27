import Navbar from "./components/Navbar";
import Header from "./components/Heading";
import Education from "./components/Education";
import AboutMe from "./components/AboutMe";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import { VStack, Box, Stack, Image, Text } from "@chakra-ui/react";

import portrait from "./assets/portrait.jpeg";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Stack mx="5%" my="5%">
        <VStack justifyContent="center" spacing="20px">
          <Image src={portrait} boxSize="200px" borderRadius="full" />
          <Text fontSize="48px" fontWeight="bold">
            Jazem Siddiqui
          </Text>
        </VStack>

        <Header label="About Me" />
        <Box px={{ base: "none", md: "80px" }}>
          <AboutMe />
        </Box>
        <Header label="Education" />
        <Box px={{ base: "none", md: "40px" }}>
          <Education />
        </Box>
        <Header label="Experience" />
        <Header label="Projects" />
        <Box px={{ base: "none", md: "80px" }}>
          <Projects />
        </Box>
        <Header label="Skills" />
        <Header label="Contact" size="1.5em" />
      </Stack>
      <Footer />
    </div>
  );
}

export default App;
