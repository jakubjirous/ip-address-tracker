"use client";

import { MapProvider } from "@/hooks";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React, { ReactNode, useState } from "react";

const Providers = ({ children }: { children: ReactNode }) => {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <MapProvider>{children}</MapProvider>
    </QueryClientProvider>
  );
};

export default Providers;
