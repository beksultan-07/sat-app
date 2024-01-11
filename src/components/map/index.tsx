import React from "react";

import { APIProvider, Map } from "@vis.gl/react-google-maps";

const MyMap = ({ lat = 41.2044, lng = 74.7661 }) => {
    return (
        <div style={{ height: "180px" }}>
            <APIProvider apiKey={"AIzaSyCoxB02mXlIQ3UuJy7MJpCYaDm-FqgC78E"}>
                <Map
                    zoom={5}
                    center={{ lat, lng }}
                    gestureHandling={"greedy"}
                    disableDefaultUI={true}
                />
            </APIProvider>
        </div>
    );
};

export default MyMap;
