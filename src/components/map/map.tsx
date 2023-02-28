import { useMapState } from "@/hooks";
import { LocationIcon } from "@/icons";
import "mapbox-gl/dist/mapbox-gl.css";
import React, { FC } from "react";
import ReactMapGL, { Marker } from "react-map-gl";

export const Map: FC = () => {
  const [mapViewport] = useMapState();

  return (
    <ReactMapGL
      initialViewState={{ ...mapViewport }}
      mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_SECRET_KEY}
      mapStyle="mapbox://styles/mapbox/streets-v12"
      {...mapViewport}
    >
      <Marker
        latitude={mapViewport.latitude}
        longitude={mapViewport.longitude}
        offset={[18, -55]}
      >
        <LocationIcon />
      </Marker>
    </ReactMapGL>
  );
};
