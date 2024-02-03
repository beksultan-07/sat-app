interface geocodingResponse {
    results: {
        geometry: {
            location: google.maps.LatLngLiteral;
        };
    }[];
}

export const getLocationVariants = (address: string) => {
    return fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
            address
        )}&key=${import.meta.env.VITE_GOOGLE_API_KEY}`
    )
        .then((res) => res.json())
        .then((res: geocodingResponse) => res);
};
