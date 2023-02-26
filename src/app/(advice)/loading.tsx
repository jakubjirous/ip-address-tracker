"use client";

import { pulse, roll } from "@/theme/foundations/keyframes";
import DiceIcon from "@/theme/icons/DiceIcon";
import { Box } from "@chakra-ui/react";

const rollAnimation = `${roll} 400ms linear infinite`;
const pulseAnimation = `${pulse} 2s linear infinite`;

const Loading = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      w="16"
      h="16"
      borderRadius="full"
      fontSize="2xl"
      bg="aquamarine.100"
      color="bayoux.900"
      animation={pulseAnimation}
    >
      <DiceIcon animation={rollAnimation} />
    </Box>
  );
};

export default Loading;
