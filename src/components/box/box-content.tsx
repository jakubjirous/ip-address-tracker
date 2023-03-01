import { useIsFetching } from "@tanstack/react-query";
import React, { FC, PropsWithChildren } from "react";

const BoxContentSkeleton: FC = () => {
  return (
    <span className="mt-1 inline-flex h-4.5 w-9/12 animate-pulse rounded-xl bg-slate-100 md:mt-1.5 md:w-4/5"></span>
  );
};

export const BoxContent: FC<PropsWithChildren> = ({ children }) => {
  const isFetchingGeolocation = useIsFetching({ queryKey: ["geolocation"] });

  return (
    <p className="mt-2 whitespace-pre-line text-base font-medium md:mt-3 md:text-xl">
      {isFetchingGeolocation ? <BoxContentSkeleton /> : children}
    </p>
  );
};
