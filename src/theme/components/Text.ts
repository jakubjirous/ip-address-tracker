import { defineStyleConfig } from "@chakra-ui/react";

const Text = defineStyleConfig({
  baseStyle: {
    fontWeight: "bold",
    lineHeight: "base",
    letterSpacing: "widest",
    textTransform: "uppercase",
    color: "aquamarine.100",
  },
  sizes: {
    sm: {
      fontSize: "sm",
    },
    md: {
      fontSize: "md",
    },
  },
  variants: {
    error: {
      color: "red.500",
    },
  },
  defaultProps: {
    size: "sm",
  },
});

export default Text;
