import { GeolocationType } from "@/hooks/types";
import { detectIpOrDomain } from "@/utils";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchGeolocation = async (search: string): Promise<GeolocationType> => {
  const { ipAddress, domain } = detectIpOrDomain(search.trim());

  const { data } = await axios.get(
    `${process.env.NEXT_PUBLIC_GEOLOCATION_API_URL}?apiKey=${process.env.NEXT_PUBLIC_GEOLOCATION_SECRET_KEY}&ipAddress=${ipAddress}&domain=${domain}`
  );

  return data;
};

const useGeolocation = (search: string) => {
  return useQuery({
    queryKey: ["geolocation", search],
    queryFn: () => fetchGeolocation(search),
    refetchOnWindowFocus: false,
    enabled: !!search,
  });
};

export { useGeolocation, fetchGeolocation };
