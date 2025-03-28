import { useEffect, useState } from "react";
import { middleOfUSA } from "../lib/constants";
import { Popup, useMap } from "@vis.gl/react-maplibre";
import { getLocation } from "../lib/api";

export default function YouAreHere() {
  const [popupLocation, setPopupLocation] = useState(middleOfUSA);
  const { current: map } = useMap();

  useEffect(() => {
    if (!map) return;
    (async () => {
      const location = await getLocation();
      if (location !== middleOfUSA) {
        setPopupLocation([80.23, 26.5121])
        map.flyTo({ center: [80.23, 26.5121], zoom: 15 });
      }
    })();
  }, [map]);

  if (!map) return null;

  return (
    <Popup
      longitude={popupLocation[0]}
      latitude={popupLocation[1]}>
      <h3>You are approximately here!</h3>
    </Popup>
  );
}