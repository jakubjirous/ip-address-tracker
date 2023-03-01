import { GeolocationType } from "@/hooks";
import { useIsFetching } from "@tanstack/react-query";
import React, { FC } from "react";

const BoxItem: FC<{ heading: string; content: string }> = ({
  heading,
  content,
}) => {
  const isFetchingGeolocation = useIsFetching({ queryKey: ["geolocation"] });

  return (
    <div className="relative w-full after:absolute after:top-1 after:-left-8 after:ml-0.5 after:h-76 after:w-px after:bg-slate-200 after:content-[''] after:first:content-[] md:pr-4">
      <h2 className="text-3xs font-medium uppercase tracking-widest text-dusty-500 md:text-xs">
        {heading}
      </h2>
      <p className="mt-2 whitespace-pre-line text-base font-medium md:mt-3 md:text-xl">
        {isFetchingGeolocation ? (
          <span className="mt-1 inline-flex h-4.5 w-9/12 animate-pulse rounded-xl bg-slate-100 md:mt-1.5 md:w-4/5"></span>
        ) : (
          <>{content}</>
        )}
      </p>
    </div>
  );
};

export const Box: FC<{ data?: GeolocationType }> = ({ data }) => {
  return (
    <div className="flex w-full max-w-6xl flex-col content-center items-center gap-6 rounded-2xl bg-white p-6 text-center md:min-h-164 md:flex-row md:items-start md:py-10 md:px-8 md:text-left">
      <BoxItem heading="IP Address" content={data?.ip || "–"} />
      <BoxItem
        heading="Location"
        content={
          data?.location?.city && data?.location?.country
            ? `${data?.location?.city}, ${data?.location?.country}
              ${data?.location?.postalCode}`
            : "–"
        }
      />
      <BoxItem
        heading="Timezone"
        content={
          data?.location?.timezone ? `UTC ${data?.location?.timezone}` : "–"
        }
      />
      <BoxItem heading="ISP" content={data?.isp || "–"} />
    </div>
  );
};
