import React from "react";
import Image from "next/image";
import logo from "../assets/dream_TradingCard_1.jpg";
import Link from "next/link";
import { MdLeaderboard } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { FiMenu } from "react-icons/fi";
import { useRouter } from "next/router";
import { BiLogOut } from "react-icons/bi";

export const Aside = () => {
  const route = useRouter();

  return (
    <div className="bg-white border fixed w-[15%] h-[95%] rounded-lg p-10 flex flex-col gap-5 m-5">
      <div className="border-b-2 pb-4">
        <Image src={logo} alt="logo" width={300} className="rounded-full object-contain h-[150px] w-[150px]" />
      </div>
      <div className="flex flex-col justify-between h-full">
        <div className=" flex flex-col gap-5">
          <Link
            href="/dashboard"
            className={
              route.pathname == "/dashboard"
                ? "text-white bg-[#091225] rounded-full p-2"
                : "text-gray-600 p-2 hover:text-black"
            }>
            <h3 className="flex items-center gap-2">
              <MdLeaderboard /> Dashboard
            </h3>
          </Link>
          <Link
            href="/profile"
            className={
              route.pathname == "/profile"
                ? "text-white bg-[#091225] rounded-full p-2"
                : "text-gray-600 p-2  hover:text-black"
            }>
            <h3 className="flex items-center gap-2">
              <CgProfile />
              Profile
            </h3>
          </Link>
          <Link
            href="/menu"
            className={
              route.pathname == "/menu"
                ? "text-white bg-[#091225] rounded-full p-2"
                : "text-gray-600 p-2  hover:text-black"
            }>
            <h3 className="flex items-center gap-2">
              <FiMenu />
              Menu
            </h3>
          </Link>
        </div>
        <div>
          <Link onClick={() => localStorage.removeItem("token")} href="/">
            <h3 className="flex items-center gap-2 text-gray-600 p-2  hover:text-black">
              <BiLogOut />
              Logout
            </h3>
          </Link>
        </div>
      </div>
    </div>
  );
};
