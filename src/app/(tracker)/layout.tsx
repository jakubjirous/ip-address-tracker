"use client";

import React, { ReactNode } from "react";

const TrackerLayout = ({ children }: { children: ReactNode }) => {
  return (
    <section className="grid h-full grid-cols-1 grid-rows-40 md:grid-rows-35">
      {children}
    </section>
  );
};

export default TrackerLayout;
