import React from "react";
import Image from "next/image";
import logo from "../assets/logo.png";
import Link from "next/link";
import { MdLeaderboard } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { FiMenu } from "react-icons/fi";
import { useRouter } from "next/router";
import { BiLogOut } from "react-icons/bi";

export const Aside = () => {
  const route = useRouter();

  return (
    <div className="bg-white border rounded-lg p-10 flex flex-col gap-5 m-5">
      <div className="border-b-2 pb-4">
        <Image src={logo} alt="logo" width={300} />
      </div>
      <div className="flex flex-col justify-between gap-[300px]">
        <div className=" flex flex-col gap-5">
          <Link
            href="/dashboard"
            style={{
              color: route.pathname == "/dashboard" ? "blue" : "black",
            }}>
            <h3 className="flex items-center gap-2 hover:text-blue-700">
              <MdLeaderboard /> Dashboard
            </h3>
          </Link>
          <Link
            href="/profile"
            style={{
              color: route.pathname == "/profile" ? "blue" : "black",
            }}>
            <h3 className="flex items-center gap-2 hover:text-blue-700">
              <CgProfile />
              Profile
            </h3>
          </Link>
          <Link
            href="/menu"
            style={{
              color: route.pathname == "/menu" ? "blue" : "black",
            }}>
            <h3 className="flex items-center gap-2 hover:text-blue-700">
              <FiMenu />
              Menu
            </h3>
          </Link>
        </div>
        <div>
          <Link onClick={() => localStorage.removeItem("token")} href="/">
            <h3 className="flex items-center gap-2 hover:text-blue-700">
              <BiLogOut />
              Logout
            </h3>
          </Link>
        </div>
      </div>
    </div>
  );
};
