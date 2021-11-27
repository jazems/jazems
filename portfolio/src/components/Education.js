import { Center, Box, Image, VStack, HStack, Text } from "@chakra-ui/react";
import berkeleyLogo from "../assets/berkeleyLogo.png";

const Education = () => {
  return (
    <Center>
      <HStack spacing="100px">
        <Image src={berkeleyLogo} boxSize="175px" />
        <VStack justifyContent="start">
          <Box fontSize="1.5em">
            <Text>UC Berkeley</Text>
          </Box>
          <Box>
            <Text>B.A. Computer Science, Data Science</Text>
          </Box>
          <Box>
            <Text fontWeight="bold">Relevant Coursework</Text>
            <Text>
              CS 61A: Structure & Interpretation of Computer Programs
              <br />
              CS 61B: Data Structures & Algorithms
              <br />
              CS 70: Discrete Math & Probability <br />
              EECS 16A/B: Designing Information Devices and Systems I & II
            </Text>
          </Box>
        </VStack>
      </HStack>
    </Center>
  );
};

export default Education;
