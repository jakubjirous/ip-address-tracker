"use client";

import { Form, Map } from "@/components";
import { useGeolocation, useMapState } from "@/hooks";
import { ArrowIcon } from "@/icons";
import React, { useCallback, useEffect, useState } from "react";

const Page = () => {
  const [search, setSearch] = useState();

  const [mapViewport, setMapViewport] = useMapState();

  const { data, isFetching, isSuccess, isError } = useGeolocation(search);

  const onSubmit = useCallback(
    (value) => {
      setSearch(value);
    },
    [search]
  );

  useEffect(() => {
    if (data && isSuccess) {
      setMapViewport({
        ...mapViewport,
        longitude: data.location.lng,
        latitude: data.location.lat,
      });
    }
  }, [data, isSuccess]);

  return (
    <>
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
      <Map />
    </>
  );
};

export default Page;
