import { FormContext } from "@/components";
import SpinnerIcon from "@/spinner-icon";
import React, { FC, PropsWithChildren, useContext } from "react";

export const FormSubmit: FC<PropsWithChildren> = ({ children }) => {
  const { isLoading } = useContext(FormContext);

  return (
    <button
      type="submit"
      disabled={isLoading}
      className="flex h-12 w-12 items-center justify-center rounded-r-2xl bg-black text-white transition duration-300 ease-in-out focus-visible:outline-none focus-visible:ring-3 active:bg-dusty-900 enabled:hover:bg-dusty-900 md:h-15 md:w-15"
    >
      {isLoading ? <SpinnerIcon /> : <>{children}</>}
    </button>
  );
};
