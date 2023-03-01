"use client";

import { GeolocationType } from "@/hooks";
import { fetchGeolocation } from "@/hooks/use-geolocation/fetch-geolocation";
import { useQuery } from "@tanstack/react-query";

export const useGeolocation = (
  search: string,
  initialGeolocation?: GeolocationType
) => {
  return useQuery({
    queryKey: ["geolocation", search],
    queryFn: () => fetchGeolocation(search),
    refetchOnWindowFocus: false,
    enabled: !!search,
    initialData: initialGeolocation,
  });
};
