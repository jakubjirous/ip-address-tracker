"use client";

import { Form } from "@/components";
import { useGeolocation } from "@/hooks";
import { ArrowIcon } from "@/icons";
import React, { useCallback, useState } from "react";

const Tracker = () => {
  const [search, setSearch] = useState();

  const { data, isFetching, isError } = useGeolocation(search);

  console.log("data", data);

  const onSubmit = useCallback(
    (value) => {
      setSearch(value);
    },
    [search]
  );

  return (
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
  );
};

export default Tracker;
