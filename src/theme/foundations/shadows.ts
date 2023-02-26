import { pxToRem } from "@/utils/unitConvertors";

/**
 * https://chakra-ui.com/docs/styled-system/theme#alphas
 */
const shadows = {
  outline: `0 0 ${pxToRem(5)} ${pxToRem(
    2
  )} var(--chakra-colors-botticelli-100)`,
  hover: `0 0 ${pxToRem(40)} 0 var(--chakra-colors-aquamarine-100)`,
};

export default shadows;
