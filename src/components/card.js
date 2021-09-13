import { Box, Img, Stack, Text } from "@chakra-ui/react";
import React from "react";
import elephants from "../images/elephants.png";
import gman from "../images/ghanesh.png";

export default function Card() {
  return (
    <Stack
      maxW="5xl"
      minW={{
        base: "100%",
        md: "xl",
      }}
      flex="1"
      minH="100vh"
      justifyContent="center"
      alignItems="center"
      textAlign="center"
      pos="relative"
      bg="primary.600"
      color="secondary.300"
    >
      <Text as="h2" fontSize="3xl" mb={4} fontFamily="display">
        Costa Mesa, California
      </Text>
      <Text fontWeight="medium">Tuesday, November 30th, 2021</Text>
      <Box pos="absolute" top="0" w="full">
        <Img src={gman} alt="gman" />
      </Box>
      <Box pos="absolute" bottom="0" w="full">
        <Img src={elephants} alt="elephants" />
      </Box>
    </Stack>
  );
}
