import Card from "./Card";
import { SimpleGrid } from "@chakra-ui/layout";

const Projects = () => {
  return (
    <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacingX="30px">
      <Card title="useForm Hook" body="Description" />
      <Card title="useForm Hook" body="Description" />
      <Card title="useForm Hook" body="Description" />
      <Card title="useForm Hook" body="Description" />
      <Card title="useForm Hook" body="Description" />
      <Card title="useForm Hook" body="Description" />
    </SimpleGrid>
  );
};

export default Projects;
