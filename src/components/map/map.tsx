import { useMapState } from "@/hooks";
import { LocationIcon } from "@/icons";
import "mapbox-gl/dist/mapbox-gl.css";
import React, { FC, useMemo } from "react";
import ReactMapGL, { Marker } from "react-map-gl";

export const Map: FC = () => {
  const {
    map: [mapViewport, setMapViewport],
    marker: [makerViewport],
  } = useMapState();

  const { longitude, latitude, zoom } = useMemo(() => {
    return {
      longitude: 10.69404926798569,
      latitude: 41.00972811395383,
      zoom: 0.882812691030048,
    };
  }, []);

  return (
    <ReactMapGL
      initialViewState={{
        longitude,
        latitude,
        zoom,
      }}
      mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_SECRET_KEY}
      mapStyle="mapbox://styles/mapbox/streets-v12"
      onMove={(event) => setMapViewport(event.viewState)}
      {...mapViewport}
    >
      {makerViewport && (
        <Marker
          latitude={makerViewport?.latitude}
          longitude={makerViewport?.longitude}
          offset={[18, -55]}
        >
          <LocationIcon />
        </Marker>
      )}
    </ReactMapGL>
  );
};
