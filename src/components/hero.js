import {
  Box,
  Heading,
  HStack,
  Img,
  Stack,
  Text,
  useColorModeValue as mode,
} from "@chakra-ui/react";
import * as React from "react";

export const Hero = ({ title, tagline, subtitle, image }) => {
  return (
    <Box as="section" pb="24" pos="relative" px={{ base: "6", lg: "12" }}>
      <Box maxW="7xl" mx="auto">
        <Box
          maxW={{ lg: "md", xl: "xl" }}
          pt={{ base: "20", lg: "40" }}
          pb={{ base: "16", lg: "24" }}
        >
          <HStack
            className="group"
            as="a"
            href="#"
            rounded="lg"
            fontSize="sm"
            mb="8"
            display="inline-flex"
            minW="18rem"
          >
            <Box fontWeight="medium">{tagline}</Box>
          </HStack>
          <Heading
            as="h1"
            size="3xl"
            lineHeight="1"
            fontWeight="extrabold"
            letterSpacing="tight"
          >
            {title}
          </Heading>
          <Text
            mt={4}
            fontSize="xl"
            fontWeight="medium"
            color={mode("gray.600", "gray.400")}
          >
            {subtitle}
          </Text>
          <Stack
            direction={{ base: "column", sm: "row" }}
            spacing="4"
            mt="8"
          ></Stack>
        </Box>
      </Box>
      <Box
        pos={{ lg: "absolute" }}
        insetY={{ lg: "0" }}
        insetEnd={{ lg: "0" }}
        bg="gray.50"
        w={{ base: "full", lg: "50%" }}
        height={{ base: "96", lg: "full" }}
        sx={{
          clipPath: { lg: "polygon(8% 0%, 100% 0%, 100% 100%, 0% 100%)" },
        }}
      >
        <Img objectFit="cover" {...image} height="100%" width="100%" />
      </Box>
    </Box>
  );
};
