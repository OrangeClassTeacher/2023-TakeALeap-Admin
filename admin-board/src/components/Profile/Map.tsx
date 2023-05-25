import React from "react";
import { GoogleMap, MarkerF, useLoadScript } from "@react-google-maps/api";
import { Dna } from "react-loader-spinner";
import { IRestaurant } from "../Interface/Interface";

export const Map = ({ resData }: { resData: IRestaurant }) => {

    const mapStyle = {
        borderRadius: '20px',
        height: '300px',
        width: '60%'
    }
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: "AIzaSyAhjl1X_pQkIAeTUWlWv4cKKUDqgyxDCQE" as string,
    })
    if (isLoaded && !resData) return <Dna />;
    return (
        <div className="w-full h-full">
            <GoogleMap
                mapContainerStyle={mapStyle}
                zoom={14}
                center={{
                    lat: resData?.address?.location?.coordinates[0],
                    lng: resData?.address?.location?.coordinates[1],
                }}
                mapContainerClassName="map-container"
            >
                <MarkerF
                    position={{
                        lat: resData?.address?.location?.coordinates[0],
                        lng: resData?.address?.location?.coordinates[1],
                    }}
                />

            </GoogleMap>
        </div>
    );
};
