import { Box, Heading, Stack, Text } from "@chakra-ui/layout";
import * as React from "react";
import Card from "../components/card";
import { Countdown } from "../components/countdown";
import { Hero } from "../components/hero";
import useCountdownStats from "../hooks/useCountdownStats";
import dunes from "../images/dunes-rnr.jpeg";
// markup
const IndexPage = () => {
  const stats = useCountdownStats();
  return (
    <main>
      <title>Home Page</title>
      <Hero
        title="Raj & Ruchi"
        tagline="It's finally happening! 💕"
        subtitle="We can't wait to share our special day with you. Help us capture our wedding with Joy."
        image={{
          src: dunes,
          alt: "Raj & Ruchi looking like Bollywood stars in the dunes",
          htmlHeight: "411px",
          htmlWidth: "411px",
          crossOrigin: "anonymous",
          objectPosition: "top left",
        }}
      />

      <Stack
        w="full"
        direction={{
          base: "column",
          md: "row",
        }}
      >
        <Card />
        <Box
          as="section"
          maxW="7xl"
          mx="auto"
          px={{
            base: "6",
            md: "8",
          }}
          py={{
            base: "12",
            md: "20",
          }}
        >
          <Box my="12" textAlign="center">
            <Heading
              size="2xl"
              fontWeight="normal"
              lineHeight="normal"
              fontFamily="display"
            >
              November 30th, 2021
            </Heading>
            <Text fontSize="lg" mt="4" fontWeight="medium" color="text.600">
              We can't wait to share our special day with you. Help us capture
              our wedding with Joy.
            </Text>
          </Box>
          <Countdown />
        </Box>
      </Stack>
    </main>
  );
};

export default IndexPage;
