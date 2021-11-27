import { Box, Center, useColorModeValue, Heading, Text, Stack, Image } from "@chakra-ui/react";
import Modal from "./Modal";

const IMAGE = "https://s10.gifyu.com/images/useformdemo.gif";

type props = {
  title: string;
  body: string;
};

export default function ProductSimple({ title, body }: props) {
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
            backgroundImage: `url(${IMAGE})`,
            filter: "blur(15px)",
            zIndex: -1,
          }}
          _groupHover={{
            _after: {
              filter: "blur(20px)",
            },
          }}
        >
          <Image rounded={"lg"} height={230} width={282} objectFit={"cover"} src={IMAGE} />
        </Box>
        <Stack pt={10} align={"center"} spacing="15px">
          <Heading fontSize={"2xl"} fontFamily={"body"} fontWeight={500}>
            {title}
          </Heading>
          <Stack direction={"row"} align={"center"}>
            <Modal title={title} body={body} />
          </Stack>
        </Stack>
      </Box>
    </Center>
  );
}
