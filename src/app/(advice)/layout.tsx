"use client";

import { Grid } from "@chakra-ui/react";
import React, { ReactNode } from "react";

const AdviceLayout = ({ children }: { children: ReactNode }) => {
  return (
    <Grid h="100vh" placeItems="center">
      {children}
    </Grid>
  );
};

export default AdviceLayout;
