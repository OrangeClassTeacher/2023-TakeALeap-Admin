import axios from "axios";
import React, { useEffect, useState } from "react";
import { IRestaurant } from "../../components/Interface";

export default function Index() {
  const resId = typeof window !== "undefined" ? localStorage.getItem("id") : "";
  const [resData, setResDate] = useState<IRestaurant>({});

  useEffect(() => {
    if (resId) {
      axios
        .get(`http://localhost:8080/api/restaurant?id=${resId}`)
        .then((res) => setResDate(res.data.result))
        .catch((err) => console.log(err));
    }
  }, []);

  return (
    <div className=" bg-slate-300 m-5">
      <div className="text-3xl font-medium mb-5">
        {resData.restaurantName} Dashboard
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
