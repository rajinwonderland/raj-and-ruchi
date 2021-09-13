// 1. Import the extendTheme function
import { extendTheme } from "@chakra-ui/react";
import {
  breakpoints,
  colors,
  fonts,
  mdx,
  sizes,
  textStyles,
} from "../../styles/foundations";

// 2. Extend the theme to include custom colors, fonts, etc
export default extendTheme({
  config: {
    cssVarPrefix: "raj-n-ruchi",
    initialColorMode: "light",
    useSystemColorMode: false,
  },
  colors,
  fonts,
  breakpoints,
  sizes,
  textStyles,
  mdx,
});
