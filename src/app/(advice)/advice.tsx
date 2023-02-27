"use client";

import { fetchAdvice } from "@/app/(fetch)/fetchAdvice";
import { AdviceType } from "@/app/(fetch)/types";
import { useQuery } from "@tanstack/react-query";
import React, { useCallback } from "react";

const Advice = ({ initialAdvice }: { initialAdvice: AdviceType }) => {
  const { data, isFetching, refetch } = useQuery({
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

  return <h1 className="text-3xl font-bold underline">Hello world!</h1>;
};

export default Advice;
