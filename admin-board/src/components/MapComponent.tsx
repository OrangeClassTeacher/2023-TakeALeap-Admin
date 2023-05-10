import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import { useState } from "react";
import { IRestaurant } from "./Interface";


export default function MapComponent({ setResData, resData }: { resData: IRestaurant, setResData: any }) {
    const mapStyle = {
        borderRadius: '20px',
        height: '300px',
        width: '100%'
    }

    const [cursorType, setCursorType] = useState("");
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: "AIzaSyAhjl1X_pQkIAeTUWlWv4cKKUDqgyxDCQE",
    });
    const [startCoordinates, setStartCoordinates] = useState({ x: "", y: "" });
    const [choose, setChoose] = useState<boolean>(false); //false - start, true - finish


    if (!isLoaded) return <div>Loading...</div>;
    return (
        <div>
            <div className="flex item-center gap-10">
                <label className="text-l">Coordinates: </label>
                <input
                    // placeholder="x"
                    value={startCoordinates.x}
                    onFocus={() => {
                        setCursorType("crosshair");
                        setChoose(false);
                    }}
                    className="form-input"
                />
                <input
                    // placeholder="y"
                    value={startCoordinates.y}
                    className="form-input"
                />
            </div>
            <GoogleMap
                mapContainerStyle={mapStyle}
                options={{ draggableCursor: cursorType }}
                onClick={(e) => {
                    if (!choose) {
                        setStartCoordinates({ x: e.latLng?.lat(), y: e.latLng?.lng() });
                        setResData({
                            ...resData, address: { ...resData.address, location: { ...resData.address.location, coordinates: [...resData.address.location.coordinates, e.latLng?.lat(), e.latLng?.lng()] } }
                        })
                    }
                }}
                zoom={13}
                center={{ lat: 47.918397396512695, lng: 106.9179234683272 }}
                mapContainerClassName="map-container"
            >
                <Marker
                    position={{ lat: +startCoordinates.x, lng: +startCoordinates.y }}
                />
            </GoogleMap>
        </div >
    );
}
