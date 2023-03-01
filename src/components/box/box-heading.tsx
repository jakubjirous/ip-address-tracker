import React, { FC, PropsWithChildren } from "react";

export const BoxHeading: FC<PropsWithChildren> = ({ children }) => {
  return (
    <h2 className="text-3xs font-medium uppercase tracking-widest text-dusty-500 md:text-xs">
      {children}
    </h2>
  );
};
