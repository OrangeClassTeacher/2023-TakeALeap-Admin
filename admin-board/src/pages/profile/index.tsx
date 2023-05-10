import React, { useEffect, useState } from "react";
import { IRestaurant } from "@/components/Interface";
import axios from "axios";
import Link from "next/link";
import Image from "next/image";
import logo from "../../assets/defaultavatar.jpeg";
import { ProfileResEdit } from "@/components/ProfileResEdit";
import ProfileEdit from "@/components/ProfileEdit";
import { UploadModal } from "@/components/UploadModal";
import MapComponent from "@/components/MapComponent";

export default function Index() {
  const token =
    typeof window !== "undefined" ? localStorage.getItem("token") : "";
  const init: IRestaurant = {
    restaurantName: "",
    address: {
      district: "",
      street: "",
      building: "",
      address: "",
      location: {
        type: "",
        coordinates: [],
      },
    },
    restaurantRate: [
      {
        rateType: "",
        userId: "",
        score: 0,
        comment: "",
      },
    ],
    cuisineType: [],
    contact: {
      phone: 0,
      facebook: "",
      Instagram: "",
      link: "",
    },
    email: "",
    img: [],
    logoImg: "",
    schedule: {
      weekday: { open: 0, close: 0 },
      weekend: { open: 0, close: 0 },
    },
    description: "",
    createdAt: "",
    updatedAt: "",
    token: token ? token : "",
  };
  const resId = typeof window !== "undefined" ? localStorage.getItem("id") : "";
  const [resData, setResData] = useState<IRestaurant>(init);
  const [modalShow, setModalShow] = useState<boolean>(false);
  const [modal, setModal] = useState<boolean>(false);
  const [multi, setMulti] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (resId) {
      axios
        .get(`http://localhost:8080/api/restaurant?id=${resId}`)
        .then((res) => {
          setResData({ ...res.data.result, token: token ? token : "" });
        })
        .catch((err) => console.log(err));
    }
    console.log(resData);
  }, []);

  return (
    <div className="">
      <div
        className={
          loading
            ? "flex absolute bg-white/75 h-screen w-screen justify-around items-center top-0 z-50"
            : "hidden"
        }>
        <p className="text-black text-4xl uppercase">loading</p>
      </div>
      <div className="bg-white border rounded-lg w-6/6 h-full gap-5 m-5 p-5">
        <div className="relative mb-32">
          <Image
            className="rounded-lg w-full h-[400px] object-cover"
            src={resData?.img[0] ? resData?.img[0] : ""}
            onClick={() => {
              setMulti(true);
              setModal(!modal);
            }}
            alt="food"
            width={700}
            height={700}
            priority={true}
          />
          <Image
            onClick={() => {
              setMulti(false);
              setModal(!modal);
            }}
            className="rounded-full absolute -bottom-20 left-20 border w-[200px] h-[200px] object-cover"
            src={resData?.logoImg ? resData?.logoImg : logo}
            alt="food"
            width={200}
            height={200}
            priority={true}
          />
        </div>

        <div className="flex flex-col flex-wrap gap-5 m-5 m-0 md:mx-20 h-[600px] overflow-scroll">
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
              {" "}
              {resData?.cuisineType}
            </h3>
          </div>
          <div className="flex flex-row ">
            <label className="font-bold w-2/6">Phone:</label>
            <h3 className="border-b w-4/6 focus:outline-none focus:border-purple-600 focus:border-b-2 transition-colors peer">
              {" "}
              {resData?.contact?.phone}
            </h3>
          </div>
          <div className="flex flex-row ">
            <label className="font-bold w-2/6">Facebook:</label>
            <h3 className="border-b w-4/6 focus:outline-none focus:border-purple-600 focus:border-b-2 transition-colors peer">
              {" "}
              {resData?.contact?.facebook}
            </h3>
          </div>
          <div className="flex flex-row ">
            <label className="font-bold w-2/6">Instagram:</label>
            <h3 className="border-b focus:outline-none focus:border-purple-600 focus:border-b-2 transition-colors peer">
              {" "}
              {resData?.contact?.Instagram}
            </h3>
          </div>
          <div className="flex flex-row ">
            <label className="font-bold w-2/6">Page link:</label>
            <h3 className="border-b focus:outline-none focus:border-purple-600 focus:border-b-2 transition-colors peer">
              {" "}
              {resData?.contact?.link}
            </h3>
          </div>
          <div className="flex flex-row ">
            <MapComponent resData={resData} setResData={setResData} />
          </div>
          <div className="flex gap-5 w-full">
            <h3 className="font-bold w-2/6">Schedule:</h3>
            <div className="flex w-4/6 gap-20">
              <div className="flex flex-col">
                <label className="font-bold">Mon-Fri:</label>
                <h3 className="border-b focus:outline-none focus:border-purple-600 focus:border-b-2 transition-colors peer">
                  {" "}
                  {resData?.schedule?.weekday?.open}~{" "}
                  {resData?.schedule?.weekday?.close}
                </h3>
              </div>
              <div className="flex flex-col">
                <label className="font-bold">Weekend:</label>
                <h3 className="border-b focus:outline-none focus:border-purple-600 focus:border-b-2 transition-colors peer">
                  {" "}
                  {resData?.schedule?.weekend?.open}~{" "}
                  {resData?.schedule?.weekend?.close}
                </h3>
              </div>
            </div>
          </div>
          <div className="flex flex-row">
            <label className="font-bold w-2/6">Last Update: </label>
            <h3 className="border-b w-4/6 focus:outline-none focus:border-purple-600 focus:border-b-2 transition-colors peer">
              {" "}
              {resData?.updatedAt}
            </h3>
          </div>
        </div>

        <button
          className="rounded-full bg-yellow-500 text-white p-2 m-5"
          onClick={() => setModalShow(!modalShow)}>
          Edit profile
        </button>
        <ProfileResEdit
          modalShow={modalShow}
          setModalShow={setModalShow}
          resData={resData}
          setResData={setResData}
        />
        <UploadModal
          modal={modal}
          setModal={setModal}
          multi={multi}
          resData={resData}
          setResData={setResData}
          loading={loading}
          setLoading={setLoading}
        />

        {/* <ProfileEdit /> */}
      </div>
    </div>
  );
}
