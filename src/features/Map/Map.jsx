import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import React from "react";

function Map() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.MAP_API,
  });
  return (
    <GoogleMap
      zoom={10}
      center={{ lat: 44, lng: -80 }}
      style={{
        width: "581px",
        height: "433px",
        borderRadius: "31px",
        background: "#fff",
      }}
    >
      <Marker position={{ lat: 44, lng: -80 }} />
    </GoogleMap>
  );
}

export default Map;
