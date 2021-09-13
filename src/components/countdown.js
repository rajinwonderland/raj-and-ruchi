import { Stack, StackDivider } from "@chakra-ui/layout";
import React from "react";
import useCountdownStats from "../hooks/useCountdownStats";
import { Stat } from "./stat";

export function Countdown() {
  const stats = useCountdownStats();
  return (
    <Stack
      spacing="1"
      direction={{
        base: "row",
      }}
      divider={<StackDivider />}
    >
      {stats.map((stat, i) => (
        <Stat key={i} {...stat} />
      ))}
    </Stack>
  );
}
