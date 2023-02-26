import { AdviceType } from "@/app/(fetch)/types";
import delayedFetch from "@/utils/delayedFetch";
import getRandomNumberInRange from "@/utils/getRandomNumberInRange";

export const fetchAdvice = async (): Promise<AdviceType> => {
  const response = await delayedFetch(
    `${process.env.apiUrl}/advice`,
    getRandomNumberInRange(250, 2000)
  );

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  return response.json();
};
