import { cardAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(cardAnatomy.keys);

const baseStyle = definePartsStyle({
  container: {
    rounded: "2xl",
    border: "1px solid",
    borderColor: "#EBECED!important",
    bg: "white",
    shadow: "none",
  },
  header: {
    roundedTop: "2xl",
    bg: "gray.1",
    fontWeight: 600,
    fontSize: "xl",
  },
  footer: {
    borderBottom: "1px solid",
    borderColor: "gray.3",
    roundedBottom: "2xl",
    bg: "gray.1",
    fontWeight: 600,
    fontSize: "xl",
    px: 6,
    py: 4,
  },
  body: {
    p: 0,
  },
});

const Card = defineMultiStyleConfig({ baseStyle });

export default Card;
