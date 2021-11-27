import { Box, Text, HStack } from "@chakra-ui/react";
import { EmailIcon, PhoneIcon } from "@chakra-ui/icons";

const Contact = () => {
  return (
    <>
      <HStack>
        <EmailIcon color="blue.500" />
        <Text>jazem@berkeley.edu</Text>
      </HStack>
      <HStack>
        <PhoneIcon color="blue.500" />
        <Text>(510) 697-8805</Text>
      </HStack>
    </>
  );
};

export default Contact;
