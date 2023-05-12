import React, { useEffect } from "react";
import { GoogleMap, MarkerF, InfoWindowF } from "@react-google-maps/api";
import { useState } from "react";
import Utils from "@/utils/helper";
import axios from "axios";
import { Dna } from "react-loader-spinner";
import { IRestaurant } from "./Interface";

export const Map = ({ resData, setResData }: { resData: IRestaurant, setResData: any }) => {
    const resId = typeof window !== "undefined" ? localStorage.getItem("id") : "";
    const [loading, setLoading] = useState<boolean>(false)

    console.log(resData);

    const mapStyle = {
        borderRadius: '20px',
        height: '300px',
        width: '100%'
    }
    // useEffect(() => {
    //     setLoading(true)
    //     if (resId) {
    //         axios
    //             .get(`${Utils.API_URL}/restaurant?id=${resId}`)
    //             .then((res) => {
    //                 setResData(res.data.result)
    //                 setLoading(false)
    //             })
    //             .catch((err) => console.log(err)
    //             )
    //     }
    // }, [])

    // if (loading) return <div className="flex justify-center items-center h-screen w-full">
    //     <Dna
    //         visible={true}
    //         height="80"
    //         width="80"
    //         ariaLabel="dna-loading"
    //         wrapperStyle={{}}
    //         wrapperClass="dna-wrapper"
    //     />
    // </div>
    return (
        <div className="w-full h-full">
            <GoogleMap
                mapContainerStyle={mapStyle}
                zoom={14}
                center={{
                    lat: 47.91491313549779,
                    lng: 106.90851741242646,
                }}
                mapContainerClassName="map-container"
            >
                <MarkerF
                    position={{
                        lat: resData?.address?.location?.coordinates[0],
                        lng: resData?.address?.location?.coordinates[1],
                    }}
                // key={ }
                // onClick={() => onSelect()}
                />

            </GoogleMap>
        </div>
    );
};
