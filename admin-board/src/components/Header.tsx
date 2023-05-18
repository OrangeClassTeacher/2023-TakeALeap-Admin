import React, { useEffect, useState } from "react";
import axios from "axios";
import { IRestaurant } from "./Interface/Interface";
import Image from "next/image";
import Utils from "@/utils/helper";

export const Header = ({ board }: { board: string }) => {
  const resId = typeof window !== "undefined" ? localStorage.getItem("id") : "";
  const [resData, setResDate] = useState<IRestaurant>();

  useEffect(() => {
    if (resId) {
      axios
        .get(`${Utils.API_URL}/restaurantadmin?id=${resId}`)
        .then((res) => setResDate(res.data.result))
        .catch((err) => console.log(err));
    }
  }, []);

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const date = new Date();
  const month: string = months[date.getMonth()];
  const dateday: number = date.getDate();
  const day: string = weekday[date.getDay()];

  return (
    <div className="bg-white flex rounded-lg p-5 items-center">
      <h1 className="basis-2/12">{board}</h1>
      <div className="text-xl font-light text-black/75 px-20 basis-5/12">
        {" "}
        {day}, {dateday}th {month}
      </div>
      <div className="flex items-center justify-end basis-5/12 gap-5">
        <p className="font-normal">{resData?.restaurantName}</p>
        <Image
          width={70}
          height={70}
          src={resData?.logoImg ? resData?.logoImg : ""}
          alt="profileimg"
          className="rounded-full w-[60px] h-[60px] object-cover"
        />
      </div>
    </div>
  );
};
