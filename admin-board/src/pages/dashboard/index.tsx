import axios from "axios";
import React, { useEffect, useState } from "react";
import { Header } from "@/components/Header";
import Image from "next/image";
import { Dna } from "react-loader-spinner";
import { BiTime, BiCommentDetail } from 'react-icons/bi'
import Utils from "@/utils/helper";
import { IDashboard } from "@/components/Interface";

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
          console.log(res.data.data);
        })
        .catch((err) => console.log(err))
        .finally(() => setLoading(false))
    }
  }, []);

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
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="bg-white rounded-lg p-10">
          <p className="text-black">
            {/* {resData?.resRate.avg_score.l ? "No Data here" : resData?.resRate.avg_score} */}
            No Data here
          </p>
        </div>
        <div className="bg-white rounded-lg p-10">
          <p className="text-black">
            No Data here
            {/* {resData?.foodRate?.avg_rate} */}
          </p>
        </div>
        <div className="bg-white rounded-lg p-10">Last week</div>
      </div>
      <div className="bg-white rounded-lg my-10 p-10 min-h-[400px] overflow-y-scroll">
        {
          resData?.latestComms.map((item: any, index: any) => {
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
                    src={item.userImg[0]}
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
      <div className="flex gap-2 bg-white border-2 rounded-lg my-10 p-10">
        {
          resData?.topFood.map((item: any, index: any) => {

            return (
              <div key={index}>
                <Image
                  src={item.food.img[0] || "null"}
                  alt={item.food.foodName}
                  width={200}
                  height={200}
                  className="rounded-lg w-3/6 h-3/6" />
                <h4>{item.food.foodName}</h4>
                <p>{item.food.price}</p>
                <p>{item.food.foodType}</p>
                <p>{item.food.ingredients}</p>
              </div>

            )
          }
          )
        }
      </div>
    </div>
  );
}
