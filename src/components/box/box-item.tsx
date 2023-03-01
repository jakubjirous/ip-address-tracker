import React, { FC, PropsWithChildren } from "react";

export const BoxItem: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="relative w-full after:absolute after:top-1 after:-left-8 after:ml-0.5 after:h-76 after:w-px after:bg-slate-200 after:content-[''] after:first:content-[] md:pr-4">
      {children}
    </div>
  );
};
