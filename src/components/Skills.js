import { Center, Table, Thead, Tbody, Tr, Th, Td, TableCaption } from "@chakra-ui/react";

const Skills = () => {
  return (
    <Table size="sm" variant="striped" colorScheme="gray">
      <TableCaption placement="bottom">Last Updated: Nov. 2021</TableCaption>
      <Thead>
        <Tr>
          <Th>Languages</Th>
          <Th>Libraries/Tools/Frameworks</Th>
        </Tr>
      </Thead>
      <Tbody>
        <Tr>
          <Td>Python</Td>
          <Td>React.js</Td>
        </Tr>
        <Tr>
          <Td>Javascript</Td>
          <Td>Node.js</Td>
        </Tr>
        <Tr>
          <Td>Java</Td>
          <Td>Pandas</Td>
        </Tr>
        <Tr>
          <Td>HTML/CSS</Td>
          <Td>NumPy</Td>
        </Tr>
        <Tr>
          <Td>SQL</Td>
          <Td>Matplotlib</Td>
        </Tr>
      </Tbody>
    </Table>
  );
};

export default Skills;
