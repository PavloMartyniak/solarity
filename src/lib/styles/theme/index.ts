import { extendTheme, theme as base } from "@chakra-ui/react";
import colors from "./colors";
import Button from "./button";
import Card from "./card";

export const chakraTheme = extendTheme({
  ...base,
  components: {
    Button,
    Card,
  },
  colors,
});
