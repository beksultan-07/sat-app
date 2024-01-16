import React, { useEffect, useState } from "react";

import { APIProvider, Map, Marker } from "@vis.gl/react-google-maps";

interface Props {
    cameraLocation: google.maps.LatLngLiteral;
    clickedPlace: (
        location: google.maps.LatLngLiteral,
        address: string
    ) => void;
    location: google.maps.LatLngLiteral | null;
    locationVariants: Array<google.maps.LatLngLiteral>;
}
const getAddress = (location: google.maps.LatLngLiteral) => {
    return fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${
            location.lat
        },${location.lng}&key=${"AIzaSyCoxB02mXlIQ3UuJy7MJpCYaDm-FqgC78E"}`
    )
        .then((res) => res.json())
        .then((res) => {
            return res.results[0].formatted_address;
        });
};

const MyMap: React.FC<Props> = ({
    cameraLocation,
    clickedPlace,
    location,
    locationVariants,
}) => {
    const [markerPosition, setMarkerPosition] = useState<{
        lat: number;
        lng: number;
    } | null>(location);

    useEffect(() => {
        setMarkerPosition(location);
    }, [location]);

    const mapClickHandler = async (
        latLng: google.maps.LatLngLiteral | null
    ) => {
        if (latLng) {
            const lat = latLng.lat;
            const lng = latLng.lng;
            const address: string = await getAddress(latLng);
            clickedPlace(latLng, address);
            setMarkerPosition({ lat, lng });
        }
    };

    const markerClickHandler = (e: google.maps.MapMouseEvent) => {
        if (e.latLng) {
            const lng = e.latLng.lng();
            const lat = e.latLng.lat();

            mapClickHandler({ lng, lat });
        }
    };

    return (
        <div style={{ height: "180px" }}>
            <APIProvider apiKey={import.meta.env.VITE_GOOGLE_API_KEY}>
                <Map
                    zoom={8}
                    center={{
                        lat: cameraLocation.lat,
                        lng: cameraLocation.lng,
                    }}
                    gestureHandling={"greedy"}
                    disableDefaultUI={true}
                    onClick={(e) => mapClickHandler(e.detail.latLng)}
                >
                    {locationVariants.map((el, idx) => (
                        <Marker position={el} key={idx} />
                    ))}
                    {markerPosition && (
                        <Marker
                            position={markerPosition}
                            onClick={(e) => markerClickHandler(e)}
                        />
                    )}
                </Map>
            </APIProvider>
        </div>
    );
};

export default MyMap;
