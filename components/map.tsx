import GoogleMapReact from "google-map-react";
import { ThemeContext } from "pages/_app";
import { FC, useContext, useEffect, useState } from "react";
import { MapMarker } from "./map-marker";

const darkMode = [
  {
    elementType: "geometry",
    stylers: [
      {
        color: "#212121",
      },
    ],
  },
  {
    elementType: "labels.icon",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#757575",
      },
    ],
  },
  {
    elementType: "labels.text.stroke",
    stylers: [
      {
        color: "#212121",
      },
    ],
  },
  {
    featureType: "administrative",
    elementType: "geometry",
    stylers: [
      {
        color: "#757575",
      },
    ],
  },
  {
    featureType: "administrative.country",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#9e9e9e",
      },
    ],
  },
  {
    featureType: "administrative.land_parcel",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "administrative.locality",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#bdbdbd",
      },
    ],
  },
  {
    featureType: "poi",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#757575",
      },
    ],
  },
  {
    featureType: "poi.park",
    elementType: "geometry",
    stylers: [
      {
        color: "#181818",
      },
    ],
  },
  {
    featureType: "poi.park",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#616161",
      },
    ],
  },
  {
    featureType: "poi.park",
    elementType: "labels.text.stroke",
    stylers: [
      {
        color: "#1b1b1b",
      },
    ],
  },
  {
    featureType: "road",
    elementType: "geometry.fill",
    stylers: [
      {
        color: "#00e1ff",
      },
      {
        weight: 0.5,
      },
    ],
  },
  {
    featureType: "road",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#8a8a8a",
      },
    ],
  },
  {
    featureType: "road.arterial",
    elementType: "geometry",
    stylers: [
      {
        color: "#08d4e2",
      },
      {
        weight: 1,
      },
    ],
  },
  {
    featureType: "road.highway",
    elementType: "geometry",
    stylers: [
      {
        color: "#1194c0",
      },
      {
        weight: 0.5,
      },
    ],
  },
  {
    featureType: "road.highway",
    elementType: "geometry.fill",
    stylers: [
      {
        weight: 2,
      },
    ],
  },
  {
    featureType: "road.highway.controlled_access",
    elementType: "geometry",
    stylers: [
      {
        color: "#0076f5",
      },
      {
        weight: 1.5,
      },
    ],
  },
  {
    featureType: "road.local",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#616161",
      },
    ],
  },
  {
    featureType: "transit",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#757575",
      },
    ],
  },
  {
    featureType: "water",
    elementType: "geometry",
    stylers: [
      {
        color: "#000",
      },
    ],
  },
  {
    featureType: "water",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#3d3d3d",
      },
    ],
  },
];
const lightMode = [
  {
    elementType: "geometry",
    stylers: [
      {
        color: "#c9d4de",
      },
    ],
  },
  {
    elementType: "labels.icon",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#616161",
      },
    ],
  },
  {
    elementType: "labels.text.stroke",
    stylers: [
      {
        color: "#f5f5f5",
      },
    ],
  },
  {
    featureType: "administrative.land_parcel",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#bdbdbd",
      },
    ],
  },
  {
    featureType: "poi",
    elementType: "geometry",
    stylers: [
      {
        color: "#eee",
      },
    ],
  },
  {
    featureType: "poi",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#757575",
      },
    ],
  },
  {
    featureType: "poi.park",
    elementType: "geometry",
    stylers: [
      {
        color: "#878787",
      },
    ],
  },
  {
    featureType: "poi.park",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#9e9e9e",
      },
    ],
  },
  {
    featureType: "road",
    elementType: "geometry",
    stylers: [
      {
        color: "#08a4e7",
      },
      {
        weight: 0.5,
      },
    ],
  },
  {
    featureType: "road.arterial",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#757575",
      },
    ],
  },
  {
    featureType: "road.highway",
    elementType: "geometry",
    stylers: [
      {
        color: "#dadada",
      },
    ],
  },
  {
    featureType: "road.highway",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#616161",
      },
    ],
  },
  {
    featureType: "road.local",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#9e9e9e",
      },
    ],
  },
  {
    featureType: "transit.line",
    elementType: "geometry",
    stylers: [
      {
        color: "#e5e5e5",
      },
    ],
  },
  {
    featureType: "transit.station",
    elementType: "geometry",
    stylers: [
      {
        color: "#eee",
      },
    ],
  },
  {
    featureType: "water",
    elementType: "geometry",
    stylers: [
      {
        color: "#e3e3e3",
      },
    ],
  },
  {
    featureType: "water",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#9e9e9e",
      },
    ],
  },
];

const COORDINATES = {
  lat: -33.9243828,
  lng: 18.4152467,
};

export const Map: FC = () => {
  const theme = useContext(ThemeContext);
  const [styles, setStyles] = useState(theme.theme === "light-theme" ? lightMode : darkMode);
  const [update, setUpdate] = useState(true);

  useEffect(() => {
    setUpdate(false);
    setStyles(theme.theme === "light-theme" ? lightMode : darkMode);
    setTimeout(
      () => {
        setUpdate(true);
      },
      200
    );
  }, [theme]);

  return (
    <>
      <div className="map">
        {theme.theme === "light-theme"
          ? <GoogleMapReact
              bootstrapURLKeys={{ key: "AIzaSyB1nUbJXlxsbvMJEyFojX0KQXLWeKjB5FM" }}
              defaultCenter={COORDINATES}
              defaultZoom={15}
              options={{
                styles: lightMode,
              }}
            >
              <MapMarker lat={COORDINATES.lat} lng={COORDINATES.lng} text="My Marker" />
            </GoogleMapReact>
          : <GoogleMapReact
              bootstrapURLKeys={{ key: "AIzaSyB1nUbJXlxsbvMJEyFojX0KQXLWeKjB5FM" }}
              defaultCenter={COORDINATES}
              defaultZoom={15}
              options={{
                styles: darkMode,
              }}
            >
              <MapMarker lat={COORDINATES.lat} lng={COORDINATES.lng} text="My Marker" />
            </GoogleMapReact>}
      </div>
      <style jsx>{`
        .map {
          width: auto;
          height: 500px;
          position: relative;
          z-index: 2;
          @media screen and (min-width: 960px) {
            margin-left: -64px;
            margin-right: -64px;
          }
        }
      `}</style>
    </>
  );
};
