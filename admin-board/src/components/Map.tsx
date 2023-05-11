// import React, { useEffect } from "react";
// import { GoogleMap, MarkerF, InfoWindowF } from "@react-google-maps/api";
// import { useState } from "react";
// import Utils from "@/utils/helper";
// import axios from "axios";
// import { Dna } from "react-loader-spinner";

// export const Map = ({ resData, setResData }: { resData: any, setResData: any }) => {
//     const [selected, setSelected] = useState<any>({});
//     const [loading, setLoading] = useState<boolean>(false)

//     const onSelect = (item: any) => {
//         setSelected(item);
//     }
//     const resId = typeof window !== "undefined" ? localStorage.getItem("id") : "";

//     useEffect(() => {
//         setLoading(true)
//         if (resId) {
//             axios
//                 .get(`${Utils.API_URL}/restaurant?id=${resId}`)
//                 .then((res) => {
//                     setResData(res.data.result)
//                     setLoading(false)
//                 })
//                 .catch((err) => console.log(err)
//                 )
//         }
//     }, [])
//     if (loading) return <div className="flex justify-center items-center h-screen w-full">
//         <Dna
//             visible={true}
//             height="80"
//             width="80"
//             ariaLabel="dna-loading"
//             wrapperStyle={{}}
//             wrapperClass="dna-wrapper"
//         />
//     </div>
//     return (
//         <div className="w-full h-full">
//             <GoogleMap
//                 zoom={14}
//                 center={{
//                     lat: 47.91491313549779,
//                     lng: 106.90851741242646,
//                 }}
//                 mapContainerClassName="map-container-for-home"
//             >
//                 {
//                     resData.map((item: any, index: any) => {
//                         return <MarkerF
//                             position={{
//                                 lat: item?.address?.location?.coordinates[0],
//                                 lng: item?.address?.location?.coordinates[1],
//                             }}
//                             key={index}
//                             onClick={() => onSelect(item)}
//                         />
//                     })
//                 }
//             </GoogleMap>
//         </div>
//     );
// };
