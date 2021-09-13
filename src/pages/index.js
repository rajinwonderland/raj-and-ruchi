import { SimpleGrid } from "@chakra-ui/layout";
import * as React from "react";
import { Hero } from "../components/hero";
import { Stat } from "../components/stat";
import useCountdownTimer from "../hooks/useCountdownTimer";
import dunes from "../images/dunes-rnr.jpeg";
// markup
const IndexPage = () => {
  const { month, day, hour, min, sec } = useCountdownTimer();
  const stats = [month, day, hour, min, sec].map((stat, i) => ({
    title: `${
      i === 0
        ? "Months"
        : i === 1
        ? "Days"
        : i === 2
        ? "Hours"
        : i === 3
        ? "Minutes"
        : "Seconds"
    }`,
    value: stat,
  }));
  return (
    <main>
      <title>Home Page</title>
      <Hero
        title="Raj & Ruchi"
        tagline="It's finally happening! 💕"
        subtitle="November 30th, 2021"
        image={{
          src: dunes,
          alt: "Raj & Ruchi looking like Bollywood stars in the dunes",
          htmlHeight: "411px",
          htmlWidth: "411px",
          crossOrigin: "anonymous",
          objectPosition: "top left",
        }}
      />
      <SimpleGrid columns={5} maxW="5xl" mx="auto">
        {stats.map((stat, i) => (
          <Stat key={i} {...stat} />
        ))}
      </SimpleGrid>
    </main>
  );
};

export default IndexPage;
