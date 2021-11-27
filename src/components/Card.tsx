import { Box, Center, useColorModeValue, Heading, Text, Stack, Image } from "@chakra-ui/react";
import Modal from "./Modal";

type props = {
  title: string;
  body: string;
  technologies: string;
  src: any;
  local: boolean;
};

export default function ProductSimple({ title, body, technologies, src, local = false }: props) {
  const img = local ? src : `url(${src})`;
  return (
    <Center py={12}>
      <Box
        role={"group"}
        p={6}
        maxW={"330px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.800")}
        boxShadow={"2xl"}
        rounded={"lg"}
        pos={"relative"}
        zIndex={1}
      >
        <Box
          rounded={"lg"}
          mt={-12}
          pos={"relative"}
          height={"230px"}
          _after={{
            transition: "all .3s ease",
            content: '""',
            w: "full",
            h: "full",
            pos: "absolute",
            top: 5,
            left: 0,
            backgroundImage: img,
            filter: "blur(15px)",
            zIndex: -1,
          }}
          _groupHover={{
            _after: {
              filter: "blur(20px)",
            },
          }}
        >
          <Image rounded={"lg"} height={230} width={282} objectFit={"cover"} src={src} />
        </Box>
        <Stack pt={10} align={"center"} spacing="15px">
          <Heading fontSize={"2xl"} fontFamily={"body"} fontWeight={500}>
            {title}
          </Heading>
          <Stack direction={"row"} align={"center"}>
            <Modal title={title} body={body} technologies={technologies} />
          </Stack>
        </Stack>
      </Box>
    </Center>
  );
}
