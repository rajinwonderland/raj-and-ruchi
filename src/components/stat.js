import { Box, Stack, useColorModeValue } from "@chakra-ui/react";
import * as React from "react";

export const Stat = (props) => {
  const { title, value, ...rest } = props;
  return (
    <Stack
      direction="column-reverse"
      maxW="12rem"
      mx="auto"
      as="dl"
      textAlign="center"
      {...rest}
    >
      <Box
        as="dt"
        color={useColorModeValue("text.600", "whiteAlpha.700")}
        fontWeight="bold"
        textTransform="uppercase"
      >
        {title}
      </Box>
      <Box
        as="dd"
        fontSize={{
          base: "3xl",
          md: "6xl",
        }}
        fontWeight="extrabold"
        color={useColorModeValue("maroon.500", "secondary.700")}
      >
        {value}
      </Box>
    </Stack>
  );
};
