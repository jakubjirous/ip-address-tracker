import { useMapState } from "@/hooks";
import { LocationIcon } from "@/icons";
import React, { FC } from "react";
import { Marker } from "react-map-gl";

export const MapMarker: FC = () => {
  const {
    marker: [makerViewport],
  } = useMapState();

  return makerViewport ? (
    <Marker
      latitude={makerViewport?.latitude}
      longitude={makerViewport?.longitude}
      offset={[18, -55]}
    >
      <LocationIcon />
    </Marker>
  ) : null;
};
