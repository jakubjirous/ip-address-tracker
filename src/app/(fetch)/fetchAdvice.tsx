import { AdviceType } from "@/app/(fetch)/types";

export const fetchAdvice = async (): Promise<AdviceType> => {
  const response = await fetch(`${process.env.apiUrl}/advice`);

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  return response.json();
};
