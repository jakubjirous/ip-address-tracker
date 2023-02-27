import AdviceBoundary from "@/app/(advice)/advice-boundary";
import { fetchAdvice } from "@/app/(fetch)/fetch-advice";
import React from "react";

const Page = async () => {
  const initialAdvice = await fetchAdvice();

  return <AdviceBoundary initialAdvice={initialAdvice} />;
};

export default Page;
