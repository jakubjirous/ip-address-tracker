import AdviceBoundary from "@/app/(advice)/adviceBoundary";
import { fetchAdvice } from "@/app/(fetch)/fetchAdvice";
import React from "react";

const Page = async () => {
  const initialAdvice = await fetchAdvice();

  return <AdviceBoundary initialAdvice={initialAdvice} />;
};

export default Page;
