"use client";

import React, { ReactNode } from "react";

const TrackerLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="grid h-full grid-cols-1 grid-rows-mobile md:grid-rows-desktop">
      {children}
    </div>
  );
};

export default TrackerLayout;
