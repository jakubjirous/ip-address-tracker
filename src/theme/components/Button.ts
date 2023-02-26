import { roll } from "@/theme/foundations/keyframes";
import { pxToRem } from "@/utils/unitConvertors";
import { defineStyleConfig } from "@chakra-ui/react";

const Button = defineStyleConfig({
  baseStyle: {
    borderRadius: "full",
    transitionProperty: "common",
    transitionDuration: "slower",
    fontSize: "2xl",
    bg: "aquamarine.100",
    color: "bayoux.900",
    h: "16",
    w: "16",

    _hover: {
      boxShadow: "hover",
    },

    _focusVisible: {
      boxShadow: "outline",
      outline: `${pxToRem(1)} solid transparent`,
    },

    _disabled: {
      cursor: "wait",
      boxShadow: "unset",
      svg: {
        animation: `${roll} 400ms linear infinite`,
      },
    },
  },
  variants: {
    fixed: {
      position: "absolute",
      bottom: 0,
      transform: "translateY(var(--chakra-space-8))",
    },
  },
});

export default Button;
