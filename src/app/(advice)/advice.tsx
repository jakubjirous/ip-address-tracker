"use client";

import Section from "@/app/(advice)/section";
import { fetchAdvice } from "@/app/(fetch)/fetchAdvice";
import { AdviceType } from "@/app/(fetch)/types";
import DesktopDividerIcon from "@/theme/icons/DesktopDividerIcon";
import DiceIcon from "@/theme/icons/DiceIcon";
import MobileDividerIcon from "@/theme/icons/MobileDividerIcon";
import { Heading, IconButton, Text } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import React, { useCallback } from "react";

const Advice = ({ initialAdvice }: { initialAdvice: AdviceType }) => {
  const {
    data: advice,
    isFetching,
    refetch,
  } = useQuery({
    queryKey: ["advice"],
    queryFn: fetchAdvice,
    initialData: initialAdvice,
    suspense: true,
    enabled: false,
  });

  const handleGenerate = useCallback(() => {
    if (!isFetching) {
      refetch();
    }
  }, [isFetching]);

  return (
    <Section
      size={["sm", "sm", "md"]}
      gap={["4", "4", "8"]}
      display="flex"
      flexDirection="column"
      alignItems="center"
      textAlign="center"
    >
      <Text size={["sm", "sm", "md"]}>Advice #{advice?.slip.id}</Text>
      <Heading
        as="h1"
        flex="1"
        display="flex"
        alignItems="center"
        justifyContent="center"
        size={["sm", "sm", "md"]}
      >
        &ldquo;{advice?.slip.advice}&rdquo;
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
        onClick={handleGenerate}
        isDisabled={isFetching}
        icon={<DiceIcon />}
        aria-label="Generate advice"
      />
    </Section>
  );
};

export default Advice;
