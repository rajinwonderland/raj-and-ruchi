import * as React from "react";
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
      <br />
      <Countdown />
    </main>
  );
};

export default IndexPage;
