"use client";

import Section from "@/app/(advice)/section";
import DesktopDividerIcon from "@/theme/icons/DesktopDividerIcon";
import DiceIcon from "@/theme/icons/DiceIcon";
import MobileDividerIcon from "@/theme/icons/MobileDividerIcon";
import { Heading, IconButton, Text } from "@chakra-ui/react";
import React from "react";

const Error = ({ onClick }: { onClick: () => void }) => {
  return (
    <Section
      size={["sm", "sm", "md"]}
      gap={["4", "4", "8"]}
      display="flex"
      flexDirection="column"
      alignItems="center"
      textAlign="center"
    >
      <Text size={["sm", "sm", "md"]} variant="error">
        Try again
      </Text>
      <Heading
        as="h1"
        flex="1"
        display="flex"
        alignItems="center"
        justifyContent="center"
        size={["sm", "sm", "md"]}
      >
        &#8264; There was an error &#8265;
      </Heading>
      <MobileDividerIcon
        width="100%"
        height="auto"
        display={["flex", "flex", "none"]}
      />
      <DesktopDividerIcon
        width="100%"
        height="auto"
        display={["none", "none", "flex"]}
      />
      <IconButton
        variant="fixed"
        onClick={onClick}
        icon={<DiceIcon />}
        aria-label="Try again"
      />
    </Section>
  );
};

export default Error;
