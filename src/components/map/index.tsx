import React, { useState } from "react";

import { APIProvider, Map, Marker } from "@vis.gl/react-google-maps";

interface Props {
    cameraLocation: google.maps.LatLngLiteral;
    clickedPlace: (
        location: google.maps.LatLngLiteral,
        address: string
    ) => void;
    location: google.maps.LatLngLiteral | null;
}

const MyMap: React.FC<Props> = ({ cameraLocation, clickedPlace, location }) => {
    const [markerPosition, setMarkerPosition] = useState<{
        lat: number;
        lng: number;
    } | null>(location);

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

    const mapClickHandler = async (
        latLng: google.maps.LatLngLiteral | null
    ) => {
        if (latLng) {
            const lat = latLng.lat;
            const lng = latLng.lng;
            const address: string = await getAddress(latLng);
            clickedPlace(latLng, address);
            setMarkerPosition({ lat, lng });
            console.log(address);
        }
    };

    return (
        <div style={{ height: "180px" }}>
            <APIProvider apiKey={"AIzaSyCoxB02mXlIQ3UuJy7MJpCYaDm-FqgC78E"}>
                <Map
                    zoom={5}
                    center={{
                        lat: cameraLocation.lat,
                        lng: cameraLocation.lng,
                    }}
                    gestureHandling={"greedy"}
                    disableDefaultUI={true}
                    onClick={(e) => mapClickHandler(e.detail.latLng)}
                >
                    {markerPosition && <Marker position={markerPosition} />}
                </Map>
            </APIProvider>
        </div>
    );
};

export default MyMap;