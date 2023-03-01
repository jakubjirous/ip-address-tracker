"use client";

import { Box, Form, Map } from "@/components";
import { GeolocationType, useGeolocation, useMapState } from "@/hooks";
import { ArrowIcon, LocationIcon } from "@/icons";
import React, { useCallback, useEffect, useState } from "react";

const Tracker = ({
  initialGeolocation,
}: {
  initialGeolocation: GeolocationType;
}) => {
  const [search, setSearch] = useState();

  const {
    map: [, setMapViewport],
    marker: [, setMarkerViewport],
  } = useMapState();

  const { data, isFetching, isSuccess, isError } = useGeolocation(
    search,
    initialGeolocation
  );

  const onSubmit = useCallback(
    (value) => {
      setSearch(value);
    },
    [search]
  );

  useEffect(() => {
    if (data && isSuccess) {
      setMapViewport({
        longitude: data.location.lng,
        latitude: data.location.lat,
        zoom: 9,
      });
      setMarkerViewport({
        longitude: data.location.lng,
        latitude: data.location.lat,
        zoom: 9,
      });
    }
  }, [data, isSuccess]);

  return (
    <>
      <div className="items-center justify-center bg-mobile-pattern bg-cover bg-center bg-no-repeat md:bg-desktop-pattern">
        <section className="absolute top-0 left-0 right-0 z-10 flex h-auto flex-col items-center gap-9 p-6">
          <Form onSubmit={onSubmit} isLoading={isFetching} isError={isError}>
            <Form.Control>
              <Form.Label>IP Address Tracker</Form.Label>
              <Form.InputGroup>
                <Form.Input />
                <Form.Submit>
                  <ArrowIcon />
                </Form.Submit>
              </Form.InputGroup>
            </Form.Control>
          </Form>
          <Box>
            <Box.Item>
              <Box.Heading>IP Address</Box.Heading>
              <Box.Content>{data?.ip || "–"}</Box.Content>
            </Box.Item>
            <Box.Item>
              <Box.Heading>Location</Box.Heading>
              <Box.Content>
                {data?.location?.city && data?.location?.country
                  ? `${data?.location?.city}, ${data?.location?.country}
              ${data?.location?.postalCode}`
                  : "–"}
              </Box.Content>
            </Box.Item>
            <Box.Item>
              <Box.Heading>Timezone</Box.Heading>
              <Box.Content>
                {data?.location?.timezone
                  ? `UTC ${data?.location?.timezone}`
                  : "–"}
              </Box.Content>
            </Box.Item>
            <Box.Item>
              <Box.Heading>ISP</Box.Heading>
              <Box.Content>{data?.isp || "–"}</Box.Content>
            </Box.Item>
          </Box>
        </section>
      </div>
      <Map>
        <Map.Marker>
          <LocationIcon />
        </Map.Marker>
      </Map>
    </>
  );
};

export default Tracker;
