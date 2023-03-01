import { GeolocationType } from "@/hooks";
import { detectIpOrDomain } from "@/utils";
import axios from "axios";

export const fetchGeolocation = async (
  search: string
): Promise<GeolocationType> => {
  const { ipAddress, domain } = detectIpOrDomain(search.trim());

  const { data } = await axios.get(
    `${process.env.NEXT_PUBLIC_GEOLOCATION_API_URL}?apiKey=${process.env.NEXT_PUBLIC_GEOLOCATION_SECRET_KEY}&ipAddress=${ipAddress}&domain=${domain}`
  );

  return data;
};
