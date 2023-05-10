import React, { useEffect, useState } from "react";
import { FoodsMenu } from "@/components/FoodsMenu";
import { BeverageMenu } from "@/components/BeverageMenu";
import axios from "axios";
import { IFood } from "@/components/Interface";
import { IBeverage } from "@/components/Interface";
import { Header } from "@/components/Header";

export default function Index() {
  const [getFood, setGetFood] = useState<IFood[]>([]);
  const [getBeverages, setGetBeverages] = useState<IBeverage[]>([]);

  useEffect(() => {
    const resId =
      typeof window !== "undefined" ? localStorage.getItem("id") : "";
    if (resId) {
      axios
        .get(`http://localhost:8080/api/restaurantfoods?id=${resId}`)
        .then((res) => {
          setGetFood(res.data.result);
        })
        .catch((err) => console.log(err));

      axios
        .get(`http://localhost:8080/api/getrestaurantbeverages?id=${resId}`)
        .then((res) => {
          setGetBeverages(res.data.result);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);

  return (
    <div className="">
      <div className="text-3xl font-medium my-5 mx-10">
        <Header board={"Menu"} />
      </div>
      <div
        className={
          getFood.length > 0
            ? "m-5 mx-10 bg-white rounded-lg max-h-[800px] overflow-scroll"
            : "m-5 mx-10 bg-white rounded-lg h-[200px]"
        }>
        {" "}
        <FoodsMenu getFood={getFood} setGetFood={setGetFood} />
      </div>
      <div
        className={
          getBeverages.length > 0
            ? "m-5 mx-10 bg-white rounded-lg max-h-[800px] overflow-scroll"
            : "m-5 mx-10 bg-white rounded-lg h-[200px]"
        }>
        {" "}
        <BeverageMenu
          getBeverages={getBeverages}
          setGetBeverages={setGetBeverages}
        />
      </div>
    </div>
  );
}
