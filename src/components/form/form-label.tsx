import React, { FC, PropsWithChildren } from "react";

export const FormLabel: FC<PropsWithChildren> = ({ children }) => {
  return (
    <label
      htmlFor="input"
      className="flex w-full justify-center text-center text-2xl font-medium text-white md:text-3xl"
      aria-label="Form label"
    >
      {children}
    </label>
  );
};
