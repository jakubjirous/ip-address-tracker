"use client";

import { MapViewport } from "@/hooks";
import React, {
  createContext,
  Dispatch,
  FC,
  PropsWithChildren,
  SetStateAction,
  useContext,
  useState,
} from "react";

type MapStateContextType = {
  map: [MapViewport, Dispatch<SetStateAction<MapViewport>>];
  marker: [MapViewport, Dispatch<SetStateAction<MapViewport>>];
};

const MapStateContext = createContext<MapStateContextType>(
  {} as MapStateContextType
);

export const MapProvider: FC<PropsWithChildren> = ({ children }) => {
  const mapState = useState<MapViewport>();
  const markerState = useState<MapViewport>();

  return (
    <MapStateContext.Provider value={{ map: mapState, marker: markerState }}>
      {children}
    </MapStateContext.Provider>
  );
};

export const useMapState = () => {
  const context = useContext(MapStateContext);

  if (context === undefined) {
    throw new Error("useStateMap has to be used within <MapProvider>");
  }
  return context;
};
