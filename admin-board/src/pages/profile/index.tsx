import React, { useEffect, useState } from "react";
import { IRestaurant } from "@/components/Interface";
import axios from "axios";
import Link from "next/link";
import Image from "next/image";
import logo from "../../assets/defaultavatar.jpeg";


export default function Index() {
  const resId = typeof window !== "undefined" ? localStorage.getItem("id") : "";
  const [resData, setResDate] = useState<IRestaurant>();
  const [modalShow, setModalShow] = useState<boolean>(false);

  useEffect(() => {
    if (resId) {
      axios
        .get(`http://localhost:8080/api/restaurant?id=${resId}`)
        .then((res) => setResDate(res.data.result))
        .catch((err) => console.log(err));
    }
  }, []);

  return (
    <div className=" ">
      <div className="bg-white border rounded-lg w-6/6 h-full gap-5 m-5 p-5">
        <div className="relative mb-32">
          <Image
            className="rounded-lg w-full h-[400px] object-cover"
            src={resData?.img[0] ? resData?.img[0] : ""}
            alt="food"
            width={300}
            height={300}
          />
          <Image
            className="rounded-full absolute -bottom-20 left-20 border "
            src={logo}
            alt="food"
            width={200}
            height={200}
          />
        </div>

        <div className="flex flex-col flex-wrap gap-5 m-5 m-0 md:mx-20 h-[600px] overflow-scroll">
          <div className="flex flex-row gap-20">
            <label>Restaurant name: {resData?.restaurantName} </label>
          </div>
          <div className="flex flex-row gap-20">
            <label>Email: {resData?.email} </label>
          </div>
          <div className="flex flex-row gap-20">
            <label>Discription: {resData?.description} </label>
          </div>
          <div className="flex flex-row gap-20">
            <label>District: {resData?.address?.district} </label>
          </div>
          <div className="flex flex-row gap-20">
            <label>Street: {resData?.address?.street} </label>
          </div>
          <div className="flex flex-row gap-20">
            <label>Address: {resData?.address?.address} </label>
          </div>
          <div className="flex flex-row gap-20">
            <label>Cuisine type: {resData?.cuisineType} </label>
          </div>
          <div className="flex flex-row gap-20">
            <label>Phone: {resData?.contact?.phone} </label>
          </div>
          <div className="flex flex-row gap-20">
            <label>Facebook: {resData?.contact?.facebook} </label>
          </div>
          <div className="flex flex-row gap-20">
            <label>Instagram: {resData?.contact?.Instagram} </label>
          </div>
          <div className="flex flex-row gap-20">
            <label>Page link: {resData?.contact?.link} </label>
          </div>
          <div className="flex flex-row gap-20">
            <label>Location: map uzuuleh </label>
          </div>
          <div className="flex flex-row gap-20">
            <label>
              Schedule: Mon-Fri {resData?.schedule?.weekday?.open}~{" "}
              {resData?.schedule?.weekday?.close} Weekend{" "}
              {resData?.schedule?.weekend?.open}~{" "}
              {resData?.schedule?.weekend?.close}{" "}
            </label>
          </div>
          <div className="flex flex-row gap-20">
            <label>Last Update: </label>
          </div>
        </div>

        <button className="rounded-full bg-yellow-500 text-white p-2 m-5">
          Edit profile
        </button>
        {/* <ProfileEdit /> */}
      </div>
    </div>
  );
}
