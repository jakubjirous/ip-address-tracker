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

type MapStateContextType = [MapViewport, Dispatch<SetStateAction<MapViewport>>];

const MapStateContext = createContext<MapStateContextType>(
  {} as MapStateContextType
);

export const MapProvider: FC<PropsWithChildren> = ({ children }) => {
  const mapState = useState<MapViewport>({
    longitude: -123.116226,
    latitude: 49.246292,
    zoom: 9,
  });

  return (
    <MapStateContext.Provider value={mapState}>
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
