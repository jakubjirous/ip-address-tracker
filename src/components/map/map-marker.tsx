import { useMapState } from "@/hooks";
import React, { FC, PropsWithChildren } from "react";
import { Marker } from "react-map-gl";

export const MapMarker: FC<PropsWithChildren> = ({ children }) => {
  const {
    marker: [makerViewport],
  } = useMapState();

  return makerViewport ? (
    <Marker
      latitude={makerViewport?.latitude}
      longitude={makerViewport?.longitude}
      offset={[18, -55]}
    >
      {children}
    </Marker>
  ) : null;
};
