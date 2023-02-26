import { pxToRem } from "@/utils/unitConvertors";
import { keyframes } from "@chakra-ui/react";

export const roll = keyframes({
  "0%": {
    transform: "rotate(0) translateX(0)",
  },
  "25%": {
    transform: `rotate(90deg) translateX(${pxToRem(-4)})`,
  },
  "50%": {
    transform: "rotate(180deg) translateX(0)",
  },
  "75%": {
    transform: `rotate(270deg) translateX(${pxToRem(4)})`,
  },
  "100%": {
    transform: "rotate(360deg) translateX(0)",
  },
});

export const pulse = keyframes({
  "0%": {
    boxShadow: `0 0 0 0 var(--chakra-colors-aquamarine-100)`,
  },
  "50%": {
    boxShadow: `0 0 ${pxToRem(40)} 0 var(--chakra-colors-aquamarine-100)`,
  },
  "100%": {
    boxShadow: `0 0  0 var(--chakra-colors-aquamarine-100)`,
  },
});
