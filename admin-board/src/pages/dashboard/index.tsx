import axios from "axios";
import React, { useEffect, useState } from "react";
import { Header } from "@/components/Header";
import Image from "next/image";
import { Dna } from "react-loader-spinner";
import { BiTime, BiCommentDetail } from 'react-icons/bi'
import Utils from "@/utils/helper";
import { IDashboard } from "@/components/Interface/Interface";
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";
import LineChart from "@/components/LineChart";
import { toast } from "react-toastify";

export default function Index(): JSX.Element {

  const resId = typeof window !== "undefined" ? localStorage.getItem("id") : ""
  const [resData, setResData] = useState<IDashboard>();
  const [loading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    if (resId) {
      setLoading(true)
      axios
        .get(`${Utils.API_URL}/dashboardgetdata?id=${resId}`)
        .then((res) => {
          setResData(res.data.data);
        })
        .catch((err) => toast('Failed to get data'))
        .finally(() => setLoading(false))
    }
  }, [resId]);



  if (loading) return <div className="flex justify-center items-center h-screen w-full">
    <Dna
      visible={true}
      height="80"
      width="80"
      ariaLabel="dna-loading"
      wrapperStyle={{}}
      wrapperClass="dna-wrapper"
    />

  </div>
  return (
    <div className="bg-[#b7c2c9] m-5">
      <div className="text-3xl font-medium mb-5">
        <Header board={"Dashboard"} />
      </div>
      <div className="flex w-full justify-between gap-5">
        <div className="flex flex-col w-full gap-5">

          <div className="flex gap-5 justify-between w-full">
            <div className="bg-white rounded-lg p-5 w-3/6">
              <h1 className="text-lg">Restaurant Rate</h1>
              <div className="flex gap-3">
                <p className="text-black text-4xl">
                  {resData?.resRate?.currentAvgRateRes[0]?.avg_rate ? resData?.resRate?.currentAvgRateRes[0]?.avg_rate : "No Data"}
                </p>
                <span className="flex items-center gap-3 text-3xl">
                  {resData?.resRate?.currentAvgRateRes?.[0]?.avg_rate && resData?.resRate?.previousAvgRateRes?.[0]?.avg_rate &&
                    resData?.resRate?.currentAvgRateRes[0]?.avg_rate - resData?.resRate?.previousAvgRateRes[0]?.avg_rate > 0 ? <AiOutlineArrowUp style={{ color: "green" }} /> : <AiOutlineArrowDown style={{ color: "red" }} />}
                </span>
              </div>
            </div>
            <div className="bg-white rounded-lg p-5 w-3/6">
              <h1 className="text-lg">Food Rate of Restaurant</h1>
              <div className="flex gap-3">
                <p className="text-black text-4xl">
                  {resData?.foodRate?.currentAvgRateFood[0]?.avg_rate ? resData?.foodRate?.currentAvgRateFood[0]?.avg_rate : "No Data"}
                </p>
                <span className="flex items-center gap-3 text-3xl">
                  {resData?.foodRate?.currentAvgRateFood?.[0]?.avg_rate && resData?.foodRate?.previousAvgRateFood?.[0]?.avg_rate &&
                    resData?.foodRate?.currentAvgRateFood[0]?.avg_rate - resData?.foodRate?.previousAvgRateFood[0]?.avg_rate > 0 ? <AiOutlineArrowUp style={{ color: "green" }} /> : <AiOutlineArrowDown style={{ color: "red" }} />}
                </span>
              </div>
            </div>
          </div>
          <LineChart />
        </div>

        <div className="bg-white rounded-lg p-10 w-4/6 overflow-y-auto max-h-[600px]">
          <h1>Latest comments</h1>
          {
            resData?.latestComments?.map((item: any, index: any) => {
              const dateObj = new Date(item.createdAt);
              const formattedDate = `${dateObj.getFullYear()}-${dateObj.getMonth() + 1}-${dateObj.getDate()}`
              const hours = dateObj.getHours();
              const minutes = dateObj.getMinutes();
              const seconds = dateObj.getSeconds()
              const formattedTime = `${hours}:${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

              return (
                <div key={index} className="flex flex-col gap-2 border-4 rounded-lg p-2 m-2 mx-5 min-h-[100px] w-full">
                  <div className="flex gap-3">
                    <Image
                      src={item.userImg[0] || ""}
                      alt={item.userId}
                      width={20} height={20}
                      className='rounded-full border object-cover'
                    />
                    <h4 className="font-medium text-indigo-500">{item.userId}</h4>
                  </div>
                  <div className="flex gap-3">
                    <BiTime />
                    <h4>{formattedDate} {formattedTime}</h4>
                  </div>
                  <div className="flex gap-3">
                    <BiCommentDetail />
                    <p>{item.comment}</p>
                  </div>
                  <p className="text-indigo-400">{item.rate} out of 5</p>
                </div>
              )
            })
          }
        </div>
      </div>
      <div className="flex flex-col gap-2 bg-white border-2 rounded-lg my-5 p-10">
        <h2 className="text-2xl mb-5 font-semibold border-b-4 p-6">Popular foods</h2>
        <div className="flex w-full">

          {
            resData?.topFoods.map((item: any, index: any) => {

              return (
                <div className="flex flex-col w-2/6 border-2 rounded-lg p-3" key={index}>
                  <Image
                    src={item.food.img[0] || "null"}
                    alt={item.food.foodName}
                    width={200}
                    height={200}
                    className="item-center rounded-lg w-5/6 h-4/6" />
                  <div className="flex gap-5">
                    <h4 className="w-2/6 font-semibold">Foodname:</h4>
                    <h4 className="w-4/6">{item.food.foodName}</h4>
                  </div>
                  <div className="flex gap-5">
                    <h4 className="w-2/6 font-semibold">Price:</h4>
                    <p className="w-4/6">Price: {item.food.price}</p>
                  </div>
                  <div className="flex gap-5">
                    <h4 className="w-2/6 font-semibold">Food type:</h4>
                    <p className="w-4/6">{item.food.foodType}</p>
                  </div>
                  <div className="flex gap-5">
                    <h4 className="w-2/6 font-semibold">Ingredients:</h4>
                    <p className="w-4/6">{item.food.ingredients}</p>
                  </div>
                </div>

              )
            }
            )
          }
        </div>
      </div>
    </div>
  );
}
