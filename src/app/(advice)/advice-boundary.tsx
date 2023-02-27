"use client";

import Advice from "@/app/(advice)/advice";
import Error from "@/app/(advice)/error";
import { AdviceType } from "@/app/(fetch)/types";
import Loading from "@/app/(advice)/loading";
import { useQueryErrorResetBoundary } from "@tanstack/react-query";
import React from "react";
import { ErrorBoundary } from "react-error-boundary";
import { Suspense } from "react";

const AdviceBoundary = ({ initialAdvice }: { initialAdvice: AdviceType }) => {
  const { reset } = useQueryErrorResetBoundary();

  return (
    <ErrorBoundary
      onReset={reset}
      fallbackRender={({ resetErrorBoundary }) => (
        <Error onClick={() => resetErrorBoundary()} />
      )}
    >
      <Suspense fallback={<Loading />}>
        <Advice initialAdvice={initialAdvice} />
      </Suspense>
    </ErrorBoundary>
  );
};

export default AdviceBoundary;
