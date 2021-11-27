import {
  ListIcon,
  ListItem,
  List,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Center,
  Box,
  Image,
  VStack,
  Stack,
  Text,
} from "@chakra-ui/react";

import { CheckCircleIcon, RepeatClockIcon } from "@chakra-ui/icons";
import berkeleyLogo from "../assets/berkeleyLogo.png";
import "./Education.css";

const Education = () => {
  return (
    <>
      <Center>
        <VStack>
          <Text fontSize="24px" fontWeight="bold">
            University of California, Berkeley
          </Text>
          <Text fontSize="18px">B.A. Computer Science, Data Science</Text>
          <Text as="i">C/O 2024</Text>
          <Box py="30px">
            <Image className="berkeleyLogo" src={berkeleyLogo} boxSize="150px" />
          </Box>
        </VStack>
      </Center>
      <Box>
        <Text fontWeight="bold" fontSize="1.1em">
          Relevant Coursework
        </Text>
      </Box>

      <Accordion allowToggle allowMultiple>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                Computer Science
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Text>
              <List>
                <ListItem>
                  <ListIcon as={CheckCircleIcon} color="green.500" />
                  CS 61A: Structure & Interpretation of Computer Programs
                </ListItem>
                <ListItem>
                  <ListIcon as={CheckCircleIcon} color="green.500" />
                  CS 61B: Data Structures & Algorithms
                </ListItem>
                <ListItem>
                  <ListIcon as={CheckCircleIcon} color="green.500" />
                  CS 70: Discrete Math & Probability
                </ListItem>
                <ListItem>
                  <ListIcon as={CheckCircleIcon} color="green.500" />
                  EECS 16A/B: Designing Information Devices and Systems I & II
                </ListItem>
              </List>
            </Text>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                Data Science, <i>Domain Emphasis: Economics</i>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <List>
              <ListItem>
                <ListIcon as={CheckCircleIcon} color="green.500" />
                DATA 8: The Foundations of Data Science
              </ListItem>
              <ListItem>
                <ListIcon as={RepeatClockIcon} color="yellow.500" />
                DATA 88E: Economic Models
              </ListItem>
              <ListItem>
                <ListIcon as={RepeatClockIcon} color="yellow.500" />
                DATA 100: Principles and Techniques of Data Science
              </ListItem>
              <ListItem>
                <ListIcon as={CheckCircleIcon} color="green.500" />
                ECON 100A: Microeconomics
              </ListItem>
            </List>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </>
  );
};

export default Education;
