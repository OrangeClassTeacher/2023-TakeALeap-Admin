import React from 'react'
import { Map } from './Map'

export default function ProfileInfo({ resData, setResData }: { resData: any, setResData: any }) {
    return (
        <div className="flex flex-col flex-wrap gap-5 m-5 m-0 md:mx-20 h-[600px] overflow-y-auto">
            <div className="flex flex-row ">
                <label className="w-2/6 font-bold">Restaurant name:</label>
                <h3 className="border-b w-4/6 focus:outline-none focus:border-purple-600 focus:border-b-2 transition-colors peer">
                    {resData?.restaurantName}
                </h3>
            </div>
            <div className="flex flex-row  ">
                <label className="font-bold w-2/6">Email:</label>
                <h3 className="border-b w-4/6 focus:outline-none focus:border-purple-600 focus:border-b-2 transition-colors peer">
                    {resData?.email}
                </h3>
            </div>
            <div className="flex flex-row  ">
                <label className="font-bold w-2/6">Discription:</label>
                <h3 className="border-b w-4/6 focus:outline-none focus:border-purple-600 focus:border-b-2 transition-colors peer">
                    {" "}
                    {resData?.description}
                </h3>
            </div>
            <div className="flex flex-row  ">
                <label className="font-bold w-2/6">District:</label>
                <h3 className="border-b w-4/6 focus:outline-none focus:border-purple-600 focus:border-b-2 transition-colors peer">
                    {resData?.address?.district}
                </h3>
            </div>
            <div className="flex flex-row  ">
                <label className="font-bold w-2/6">Street:</label>
                <h3 className="border-b w-4/6 focus:outline-none focus:border-purple-600 focus:border-b-2 transition-colors peer">
                    {resData?.address?.street}
                </h3>
            </div>
            <div className="flex flex-row  ">
                <label className="font-bold w-2/6">Address:</label>
                <h3 className="border-b w-4/6 focus:outline-none focus:border-purple-600 focus:border-b-2 transition-colors peer">
                    {resData?.address?.address}
                </h3>
            </div>
            <div className="flex flex-row  ">
                <label className="font-bold w-2/6">Cuisine type:</label>
                <h3 className="border-b w-4/6 focus:outline-none focus:border-purple-600 focus:border-b-2 transition-colors peer">
                    <div>
                        {resData?.cuisineType?.length > 0
                            ? resData?.cuisineType.join(" ")
                            : "Please select at least one cuisine type"}
                    </div>

                </h3>
            </div>
            <div className="flex flex-row ">
                <label className="font-bold w-2/6">Phone number:</label>
                <h3 className="border-b w-4/6 focus:outline-none focus:border-purple-600 focus:border-b-2 transition-colors peer">
                    {" "}
                    {resData?.contact?.phone}
                </h3>
            </div>
            <div className="flex flex-row ">
                <label className="font-bold w-2/6">Facebook link:</label>
                <h3 className="border-b w-4/6 focus:outline-none focus:border-purple-600 focus:border-b-2 transition-colors peer">
                    {" "}
                    {resData?.contact?.facebook}
                </h3>
            </div>
            <div className="flex flex-row ">
                <label className="font-bold w-2/6">Instagram link:</label>
                <h3 className="border-b focus:outline-none focus:border-purple-600 focus:border-b-2 transition-colors peer">
                    {" "}
                    {resData?.contact?.instagram}
                </h3>
            </div>
            <div className="flex flex-row ">
                <label className="font-bold w-2/6">Page link:</label>
                <h3 className="border-b focus:outline-none focus:border-purple-600 focus:border-b-2 transition-colors peer">
                    {" "}
                    {resData?.contact?.link}
                </h3>
            </div>

            <div className="flex gap-5 w-full">
                <h3 className="font-bold w-2/6">Schedule:</h3>
                <div className="flex w-4/6 gap-20">
                    <div className="flex flex-col">
                        <label className="font-bold">Mon-Fri:</label>
                        <h3 className="border-b focus:outline-none focus:border-purple-600 focus:border-b-2 transition-colors peer">
                            {resData?.schedule?.weekday?.open}{" "}~{" "}
                            {resData?.schedule?.weekday?.close}
                        </h3>
                    </div>
                    <div className="flex flex-col">
                        <label className="font-bold">Weekend:</label>
                        <h3 className="border-b focus:outline-none focus:border-purple-600 focus:border-b-2 transition-colors peer">
                            {resData?.schedule?.weekend?.open}{" "}~{" "}
                            {resData?.schedule?.weekend?.close}
                        </h3>
                    </div>
                </div>
            </div>
            <div className="flex flex-row">
                <label className="font-bold w-2/6">Last Update: </label>
                <h3 className="border-b w-4/6 focus:outline-none focus:border-purple-600 focus:border-b-2 transition-colors peer">
                    {" "}
                    {resData?.updatedAt?.slice(0, 10)}
                </h3>
            </div>
            <div className="flex flex-row ">
                {resData._id && (<Map resData={resData} setResData={setResData} />)}
            </div>
        </div>
    )
}
