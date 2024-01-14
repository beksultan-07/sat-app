import React from "react";

import { APIProvider, Map } from "@vis.gl/react-google-maps";

interface Props {
    lat: number;
    lng: number;
    clickedPlace: (lat?: number, lng?: number) => void;
}

const MyMap: React.FC<Props> = ({ lat, lng, clickedPlace }) => {
    return (
        <div style={{ height: "180px" }}>
            <APIProvider apiKey={"AIzaSyCoxB02mXlIQ3UuJy7MJpCYaDm-FqgC78E"}>
                <Map
                    zoom={5}
                    center={{ lat, lng }}
                    gestureHandling={"greedy"}
                    disableDefaultUI={true}
                    onClick={(e) =>
                        clickedPlace(e.detail.latLng?.lat, e.detail.latLng?.lng)
                    }
                />
            </APIProvider>
        </div>
    );
};

export default MyMap;
