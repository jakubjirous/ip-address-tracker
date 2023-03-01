import { MapMarker } from "@/components/map/map-marker";
import { useMapState } from "@/hooks";
import "mapbox-gl/dist/mapbox-gl.css";
import React, { FC, useMemo } from "react";
import ReactMapGL from "react-map-gl";

export const Map: FC = () => {
  const {
    map: [mapViewport, setMapViewport],
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
      <MapMarker />
    </ReactMapGL>
  );
};
