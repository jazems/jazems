import { Box, Text } from "@chakra-ui/react";

const Header = ({ label, size }) => {
  return (
    <Box py="20px">
      <Text fontSize={size ? size : "2em"}>{label}</Text>
    </Box>
  );
};

export default Header;
