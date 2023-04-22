import React, { useEffect, useState } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

function MyComponent() {
  const [zoom, setZoom] = useState(11);
  const [containerStyle, setContainerStyle] = useState({
    width: "100%",
    maxWidth: "588px",
    height: "581px",
  });

  const center = {
    lat: 32.7073,
    lng: -97.3632,
  };

  const offices = [
    {
      id: 0,
      lat: 32.71069,
      lng: -97.38585,
    },
    {
      id: 1,
      lat: 32.44201,
      lng: -97.79567,
    },
  ];

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    const handleResize = () => {
      if (mediaQuery.matches) {
        setContainerStyle({
          ...containerStyle,
          height: "300px",
        });
        setZoom(8);
      } else {
        setContainerStyle({
          ...containerStyle,
          height: "581px",
        });
        setZoom(9);
      }
    };
    mediaQuery.addListener(handleResize);
    handleResize();
    return () => mediaQuery.removeListener(handleResize);
  }, []);

  return (
    <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_API}>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={zoom}>
        {offices &&
          offices.map((office, idx) => (
            <Marker
              key={office.id}
              position={{ lat: office.lat, lng: office.lng }}
            />
          ))}
      </GoogleMap>
    </LoadScript>
  );
}

export default React.memo(MyComponent);
