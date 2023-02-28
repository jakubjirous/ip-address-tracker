import React, { FC, PropsWithChildren } from "react";
import { useFormContext } from "react-hook-form";

export const FormInputGroup: FC<PropsWithChildren> = ({ children }) => {
  const {
    formState: { errors },
  } = useFormContext();

  return (
    <div
      className={`flex h-12 w-full flex-nowrap rounded-2xl text-base focus-within:outline-none focus-within:ring-3 md:h-15 ${
        errors?.search ? "ring-red-500" : ""
      }`}
    >
      {children}
    </div>
  );
};
