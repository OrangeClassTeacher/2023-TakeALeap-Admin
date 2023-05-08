import axios from "axios";
import React, { useEffect, useState } from "react";
import { IDashboard } from "../../components/Interface";
import { IRestaurant } from "../../components/Interface";
import { Header } from "@/components/Header";

export default function Index(): JSX.Element {
  const resId = typeof window !== "undefined" ? localStorage.getItem("id") : "";
  const [resData, setResData] = useState<IDashboard>();

  useEffect(() => {
    if (resId) {
      axios
        .get(`http://localhost:8080/api/dashboardgetdata?id=${resId}`)
        .then((res) => {
          setResData(res.data.data);
          console.log(res.data.data)
        })
        .catch((err) => console.log(err));
    }
  }, []);

  return (
    <div className="bg-[#b7c2c9] m-5">
      <div className="text-3xl font-medium mb-5">
        <Header board={"Dashboard"} />
        {/* {resData.restaurantName} Dashboard */}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="bg-white rounded-lg p-10">Restaurant rate</div>
        <div className="bg-white rounded-lg p-10">Food avg rate</div>
        <div className="bg-white rounded-lg p-10"> Last week</div>
      </div>
      <div className="bg-white rounded-lg my-10 p-10">last Comments</div>
      <div className="bg-white rounded-lg my-10 p-10">Most popu foods</div>
    </div>
  );
}
