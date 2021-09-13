import { Box } from "@chakra-ui/react";
import React from "react";

export default function GT({ children, colors, ...props }) {
  return (
    <Box
      bgGradient={`linear(to-l, ${colors})`}
      bgClip="text"
      fontWeight="extrabold"
      {...props}
    >
      {children}
    </Box>
  );
}
