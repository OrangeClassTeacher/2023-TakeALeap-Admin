import React, { useState } from "react";
import { BiArrowBack } from "react-icons/bi";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/router";
import Utils from "@/utils/helper";
import { toast } from "react-toastify";

export default function Register(): JSX.Element {
  const defRes = {
    restaurantName: "",
    address: {
      district: "",
      street: "",
      building: "",
      address: "",
      location: {
        lat: 0,
        long: 0,
      },
    },
    restaurantRate: [],
    cuisineType: "",
    contact: {
      phone: 0,
      facebook: "",
      Instagram: "",
      link: "",
    },
    email: "",
    password: "",
    img: "",
    logoImg: "",
    schedule: {
      weekday: { open: 0, close: 0 },
      weekend: { open: 0, close: 0 },
    },
    description: "",
  };

  const [newUser, setNewUser] = useState(defRes);
  const [confirm, setConfirm] = useState("");
  const route = useRouter();

  const signUp = () => {

    const emailRegex = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/
    if (newUser.email && newUser.password && newUser.restaurantName) {
      if (emailRegex.test(newUser.email)) {
        axios
          .post(`${Utils.API_URL}/createrestaurant`, newUser)
          .then(async (res) => {
            if (res.data.status) {
              setNewUser(defRes);
              toast('Successfully created an acount please sign in')
              route.push("/");
            } else {
              toast('Failed to create an account')
            }
          })
          .catch((err) => {
            toast("Axios error", err);
          });
      } else {
        toast("Please check email");
      }
    } else {
      toast("Please fill your information completely");
    }
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
        <h1 className="text-sm md:text-xl lg:text-2xl">
          CREATE YOUR ACCOUNT FOR FREE
        </h1>
      </div>
      <div>
        <div className="flex flex-row flex-wrap gap-5 md:gap-10 mx-10 md:mx-5 lg:mx-0 my-5 lg:my-8">
          <div className="flex w-full justify-center">
            <div className="border rounded w-full md:w-2/3 lg:w-1/2  p-2 text-start">
              <input
                className="w-full focus:outline-none"
                placeholder="Restaurant name"
                value={newUser.restaurantName}
                onChange={(e) => {
                  setNewUser({ ...newUser, restaurantName: e.target.value });
                }}
              />
            </div>
          </div>
          <div className="flex w-full justify-center">
            <div className="border rounded w-full md:w-2/3 lg:w-1/2  p-2 text-start">
              <input
                className="w-full focus:outline-none"
                placeholder="Email"
                value={newUser.email}
                onChange={(e) => {
                  setNewUser({ ...newUser, email: e.target.value });
                }}
              />
            </div>
          </div>
          <div className="flex w-full justify-center">
            <div className="border rounded w-full md:w-2/3 lg:w-1/2  p-2 text-start">
              <input
                type="password"
                className="w-full outline-0"
                placeholder="Password"
                value={newUser.password}
                onChange={(e) =>
                  setNewUser({ ...newUser, password: e.target.value })
                }
              />
            </div>
          </div>
          <div className="flex w-full justify-center">
            <div className="border rounded w-full md:w-2/3 lg:w-1/2  p-2 text-start">
              <input
                type="password"
                value={confirm}
                className="w-full outline-0"
                placeholder="Confirm Password"
                onChange={(e) => setConfirm(e.target.value)}
              />
            </div>
          </div>
          <div className="flex w-full justify-center mb-5 lg:mb-8 ">
            <div className="w-full md:w-1/2 text-start">
              <p
                style={{
                  color: newUser.password === confirm ? "green" : "red",
                }}>
                Confirm
              </p>
              <p
                style={{
                  color: newUser.password.length >= 8 ? "green" : "red",
                }}>
                Must be 8 or more characters
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <button
          className="text-xs md:text-base lg:text-lg bg-black text-white font-thin p-3"
          onClick={() => signUp()}>
          CREATE AN ACCOUNT
        </button>
      </div>
    </div>
  );
}
