import Navbar from "./components/Navbar";
import Header from "./components/Heading";
import Education from "./components/Education";
import AboutMe from "./components/AboutMe";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import { VStack, Box, Stack, Image, Text } from "@chakra-ui/react";
import "./App.css";
import portrait from "./assets/portrait.jpg";

function App() {
  const inSectionSpacingMd = "5em";
  const inSectionSpacingBase = "2.5em";
  return (
    <div className="App">
      <Navbar />
      <Stack mx="5%" my="5%">
        <VStack justifyContent="center" spacing="0.2em">
          <Image src={portrait} boxSize="200px" borderRadius="full" />
          <Text fontSize="44px" fontWeight="bold">
            Jazem Siddiqui
          </Text>
          <Text fontSize="24px">📍 Berkeley, CA</Text>
        </VStack>

        <Box id="aboutMe">
          <Header label="About Me" />
          <Box
            my={{ base: inSectionSpacingBase, md: inSectionSpacingMd }}
            px={{ base: "none", md: "80px" }}
          >
            <AboutMe />
          </Box>
        </Box>

        <Box id="education">
          <Header label="Education" />
          <Box
            my={{ base: inSectionSpacingBase, md: inSectionSpacingMd }}
            px={{ base: "none", md: "40px" }}
          >
            <Education />
          </Box>
        </Box>

        <Box className="section" id="experience">
          <Header label="Experience" />
          <Box
            my={{ base: inSectionSpacingBase, md: inSectionSpacingMd }}
            px={{ base: "none", md: "40px" }}
          >
            <Experience />
          </Box>
        </Box>

        <Box className="section" id="projects">
          <Header label="Projects" />
          <Box my={{ base: inSectionSpacingBase, md: inSectionSpacingMd }}>
            <Projects />
          </Box>
        </Box>

        <Box className="section" id="skills">
          <Header label="Skills" />
          <Box my={{ base: inSectionSpacingBase, md: inSectionSpacingMd }}>
            <Skills />
          </Box>
        </Box>

        <Box className="section" id="contact">
          <Header label="Contact" size="1.5em" />
          <Box my={{ base: inSectionSpacingBase }}>
            <Contact />
          </Box>
        </Box>
      </Stack>
      <Footer />
    </div>
  );
}

export default App;
