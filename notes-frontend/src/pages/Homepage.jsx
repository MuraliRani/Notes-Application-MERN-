import {
  Button,
  Flex,
  HStack,
  Heading,
  Image,
  Spacer,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export default function Homepage() {
  const nav = useNavigate();
  return (
    <Stack minH={"100vh"} direction={{ base: "column", md: "row" }}>
      <Flex
        p={8}
        flex={1}
        align={"center"}
        alignItems={"center"}
        justify={"center"}
      >
        <Stack spacing={6} w={"full"} maxW={"lg"}>
          <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
            <Text color={"#FF1493"} as={"span"}>
              Your Notes
            </Text>{" "}
          </Heading>
          <Text fontSize={{ base: "md", lg: "lg" }} color={"gray.500"}>
            This MERN Notes App is designed to help you manage and organize your
            notes efficiently.
          </Text>
          <Stack direction={"column"} spacing={4}>
            <Button
              rounded={"full"}
              bg={"black"}
              color={"white"}
              _hover={{
                bg: "#E0FFFF",
                color: "#000",
              }}
              onClick={() => {
                nav("/login");
              }}
            >
              Log In
            </Button>
            <Button
              rounded={"full"}
              bg={"black"}
              color={"white"}
              _hover={{
                bg: "#E0FFFF",
                color: "#000",
              }}
              onClick={() => {
                nav("/register");
              }}
            >
              Sign Up
            </Button>
          </Stack>
          <Spacer />
          {/* <Image src="/mern.png" /> */}
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image alt={"Login Image"} objectFit={"cover"} src="/Notes.jpg" />
      </Flex>
    </Stack>
  );
}
