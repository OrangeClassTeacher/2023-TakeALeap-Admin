import React, { useState} from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { BiArrowBack } from "react-icons/bi";
import Link from "next/link";
// import { IRestaurant } from "@/components/Interface";
import axios from "axios";

export default function register(): JSX.Element {
 

    const defRes = {
        restaurantName: "",
        address: {
            district: "",
            street: "",
            building: "",
            address: "",
            location: {
                type: "",
                coordinates: [0, 0],
            },
        },
        restaurantRate:
            [
                {
                    rateType: "",
                    userId: "",
                    score: 0,
                    comment: "",
                }
            ],
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
    }

    // const [restaurant, setRestaurant] = useState<string[]>()
    const [newUser, setNewUser] = useState(defRes)
    const [isSignedUp, setIsSignedUp] = useState<boolean>(false)
    const [failed, setFailed] = useState<boolean>(false)

    // const handler = (e) => {
    //     const { name, value } =
    // }

    const signUp = () => {
        if (newUser.email && newUser.password && newUser.restaurantName) {
            axios
                .post("http://localhost:8080/api/restaurant", newUser)
                .then(async (res) => {
                    console.log(newUser);
                    console.log(res.data);

                    if (res.data.status) {
                        setNewUser(defRes)
                        setIsSignedUp(true)
                        setFailed(false)
                        alert('successfully created an acount')
                        console.log("amjilttai burtgegdlee");

                    } else {
                        setFailed(true)
                        console.log("burtgel amjiltgu bolloo");

                    }
                })
                .catch((err) => {
                    console.log("Axios aldaa garlaa");

                })
        } else {
            console.log("Medeellee buren buglunu vv");
        }
    }



    return (
        <div className="text-center pt-20" >
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
                                className="w-full"
                                placeholder="Restaurant name"
                                value={newUser.restaurantName}
                                onChange={(e) => {
                                    setNewUser({ ...newUser, restaurantName: e.target.value })
                                }}
                            />
                        </div>
                    </div>
                    <div className="flex w-full justify-center">
                        <div className="border rounded w-full md:w-2/3 lg:w-1/2  p-2 text-start">
                            <input
                                className="w-full"
                                placeholder="Email"
                                value={newUser.email}
                                onChange={(e) => {
                                    setNewUser({ ...newUser, email: e.target.value })
                                }}
                            />
                        </div>
                    </div>
                    <div className="flex w-full justify-center">
                        <div className="border rounded w-full md:w-2/3 lg:w-1/2  p-2 text-start">
                            <input
                                className="w-full"
                                placeholder="Password"
                                value={newUser.password}
                                onChange={(e) => {
                                    setNewUser({ ...newUser, password: e.target.value })
                                }}
                            />
                        </div>
                    </div>
                    <div className="flex w-full justify-center">
                        <div className="border rounded w-full md:w-2/3 lg:w-1/2  p-2 text-start">
                            <input
                                className="w-full"
                                placeholder="Confirm password"
                                value={newUser.password}
                                onChange={(e) => {
                                    setNewUser({ ...newUser, password: e.target.value })
                                }}
                            />
                        </div>
                    </div>
                </div>

            </div>
            <div>
                <button
                    className="text-xs md:text-base lg:text-lg bg-black text-white font-thin p-3"
                    onClick={signUp}
                >
                    CREATE AN ACCOUNT
                </button>
            </div>
            <div className="flex justify-around my-5 lg:my-8">
                <div></div>
                <div className="text-xs md:text-sm lg:text-base font-thin text-slate-400">
                    OR SIGN UP WITH
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
        </div >
    );
}

