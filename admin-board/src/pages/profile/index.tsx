import React, { useEffect, useState } from "react";
import { IRestaurant } from "@/components/Interface/Interface";
import axios from "axios";
import { ProfileResEdit } from "@/components/ProfileResEdit";
import { UploadModal } from "@/components/UploadModal";
import Utils from "@/utils/helper";
import ImageProfile from "@/components/Profile/ImageProfile";
import ProfileInfo from "@/components/Profile/ProfileInfo";


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
    cuisineType: [],
    contact: {
      phone: 0,
      facebook: "",
      instagram: "",
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
        .get(`${Utils.API_URL}/restaurantadmin?id=${resId}`)
        .then((res) => {
          setResData({ ...res.data.result, token: token ? token : "" });
          console.log(res.data.result);
        })
        .catch((err) => console.log(err));
    }
  }, [resId, token]);

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
        <ImageProfile
          modal={modal}
          resData={resData}
          setModal={setModal}
          setMulti={setMulti}
        />
        <ProfileInfo resData={resData} />

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

      </div>
    </div>
  );
}
