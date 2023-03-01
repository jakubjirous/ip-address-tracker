import { BoxContent } from "@/components/box/box-content";
import { BoxHeading } from "@/components/box/box-heading";
import { BoxItem } from "@/components/box/box-item";
import React, { PropsWithChildren } from "react";

export const Box = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex w-full max-w-6xl flex-col content-center items-center gap-6 rounded-2xl bg-white p-6 text-center md:min-h-164 md:flex-row md:items-start md:py-10 md:px-8 md:text-left">
      {children}
    </div>
  );
};

Box.Item = BoxItem;
Box.Heading = BoxHeading;
Box.Content = BoxContent;
