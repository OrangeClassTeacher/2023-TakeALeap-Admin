import React, { useEffect, useState } from "react";
import Link from "next/link";
import { BiArrowBack } from "react-icons/bi";
import { FaFacebookF } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import axios from "axios";
import { useRouter } from "next/router";

export default function Login(): JSX.Element {
  const defUser = {
    email: "",
    password: "",
  };

  const route = useRouter();
  const [restaurant, setRestaurant] = useState(defUser);
  const [failed, setFailed] = useState<boolean>(false);

  const SignIn = () => {
    axios
      .post("http://localhost:8080/api/restaurantlogin", restaurant)
      .then(async (res) => {
        if (res.data.status) {
          localStorage.setItem("token", await res.data.token);
          localStorage.setItem("id", await res.data.data._id);
          setFailed(false);
          route.push("/dashboard");
          console.log("amjilttai nevterlee");
        } else {
          console.log("loggin failed");
          setFailed(true);
        }
        // route.push('/profile')
      })
      .catch((err) => {
        setFailed(true);
        setRestaurant(defUser);
        console.log("login failed");
      });
  };

  return (
    <div className="text-center pt-20">
      <Link href={"/"}>
        <div className="flex items-center ml-10 hover:text-sky-500">
          {" "}
          <BiArrowBack /> back
        </div>
      </Link>

      <div className="my-10 text-2xl">
        <h1 className="text-sm md:text-xl lg:text-2xl">Sign In</h1>
      </div>
      <div>
        <div className="flex flex-col sm:grid-cols-2 gap-5 md:gap-10 mx-10 md:mx-5 lg:mx-0 my-5 lg:my-8">
          <div className="flex justify-center">
            <div className="border rounded w-full md:w-2/3 lg:w-1/2  p-2 text-start">
              <input
                className="w-full focus:outline-none"
                placeholder="Email"
                value={restaurant.email}
                onChange={(e) => {
                  setRestaurant({ ...restaurant, email: e.target.value });
                }}
              />
            </div>
          </div>
          <div className="flex justify-center">
            <div className="border rounded w-full md:w-2/3 lg:w-1/2  p-2 text-start">
              <input
                className={`${
                  failed
                    ? "border-red-300 focus:outline-none"
                    : "border-green-300 focus:outline-none"
                } w-full`}
                placeholder="Password"
                value={restaurant.password}
                onChange={(e) => {
                  setRestaurant({ ...restaurant, password: e.target.value });
                }}
              />
            </div>
          </div>
          <div className={`${failed ? "block" : "hidden"} w-full`}>
            <p className="text-red-500">User email or password wrong</p>
          </div>
        </div>
        <div>
          <button
            className="text-xs md:text-base lg:text-lg bg-black text-white font-thin p-3 hover:bg-black/75"
            onClick={SignIn}>
            LOGIN
          </button>
        </div>
      </div>

      <div className="flex justify-around my-5 lg:my-8">
        <div></div>
        <div className="text-xs md:text-sm lg:text-base font-thin text-slate-400">
          OR LOGIN WITH
        </div>
        <div></div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-10 mx-10 md:mx-5 lg:mx-0 my-5 lg:my-8">
        <div className="flex justify-around md:justify-end">
          <div className="border rounded-full w-[200px] md:w-[170px] lg:w-[170px] p-2 flex items-baseline justify-center">
            <FaFacebookF />
            <p className="pl-1">FACEBOOK</p>
          </div>
        </div>
        <div className="flex justify-around md:justify-start">
          <div className="border rounded-full w-[200px] md:w-[170px] lg:w-[170px] p-2 flex items-baseline justify-center">
            <FaGoogle />
            <p>GOOGLE</p>
          </div>
        </div>
      </div>
    </div>
  );
}
