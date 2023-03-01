import React, { FC, PropsWithChildren } from "react";

export const BoxItem: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="relative w-full md:pr-4 md:after:absolute md:after:top-1 md:after:-left-8 md:after:ml-0.5 md:after:h-76 md:after:w-px md:after:bg-slate-200 md:after:content-[''] md:after:first:content-[]">
      {children}
    </div>
  );
};
