/**
 * https://chakra-ui.com/docs/styled-system/advanced-theming#single-part-component
 */
const Section = {
  baseStyle: {
    position: "relative",
    bg: "bayoux.500",
    borderRadius: "2xl",
    w: "100vw",
  },
  sizes: {
    sm: {
      p: 8,
      pb: 14,
      maxW: "xs",
      aspectRatio: "36 / 38",
    },
    md: {
      p: 10,
      pb: 16,
      maxW: "xl",
      aspectRatio: "58 / 36",
    },
  },
  defaultProps: {
    size: "sm",
  },
};

export default Section;
