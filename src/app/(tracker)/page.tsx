import Tracker from "@/app/(tracker)/tracker";
import { fetchGeolocation } from "@/hooks";
import React from "react";

const Page = async () => {
  const initialGeolocation = await fetchGeolocation("");

  return <Tracker initialGeolocation={initialGeolocation} />;
};

export default Page;
