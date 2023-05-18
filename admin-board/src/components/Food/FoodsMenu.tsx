import React, { useEffect, useState } from "react";
import { IFood } from "../Interface/Interface";
import Image from "next/image";
import axios from "axios";
import FoodMenuModal from "./FoodMenuModal";
import { useRouter } from "next/router";
import Utils from "@/utils/helper";

export const FoodsMenu = ({
  getFood,
  setGetFood,
}: {
  getFood: IFood[];
  setGetFood: any;
}): JSX.Element => {
  const [modal, setModal] = useState<boolean>(false);
  const route = useRouter();
  const resId = typeof window !== "undefined" ? localStorage.getItem("id") : "";
  const token =
    typeof window !== "undefined" ? localStorage.getItem("token") : "";
  const { id } = route.query;

  const initFood: IFood = {
    _id: id ? id : "",
    foodName: "",
    restaurantId: resId,
    price: 0,
    foodType: "Other",
    img: [],
    ingredients: "",
    description: "",
    token: token,
  };
  const [foods, setFood] = useState<IFood>(initFood);

  const getData = async () => {
    await axios
      .get(`${Utils.API_URL}/foodbyrestaurantid?id=${resId}`)
      .then((res) => {
        setGetFood(res.data.result);
      })
      .catch((err) => console.log(err));
  };

  const deleteFood = (id: any) => {
    if (confirm("delete???")) {
      axios
        .post(`${Utils.API_URL}/deletefood?id=${id}`, { token: token })
        .then((res) => {
          res.data.status ? (alert("succes"), getData()) : alert("try again");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const fillData = async (id: any) => {
    await axios
      .get(`${Utils.API_URL}/food?id=${id}`)
      .then((res) => setFood({ ...res.data.result, token: token }))
      .catch((err) => console.log(err));
    setModal(!modal);
    route.push(`/menu?id=${id}`);
  };

  return (
    <div className="relative">
      <h2 className="uppercase text-2xl text-center p-3 font-mediums sticky top-0 bg-white">
        Foods
      </h2>
      <button
        className="absolute top-5 right-5 bg-gray-400 p-2 rounded hover:bg-gray-500"
        onClick={() => {
          setFood(initFood);
          setModal(!modal);
        }}>
        Add food
      </button>
      <div>
        {getFood.length > 0 ? (
          getFood?.map((item, index) => {
            return (
              <div
                className="flex border rounded-lg p-2 m-2 mx-5 min-h-[200px] w-full"
                key={index}>

                <Image
                  className="rounded-lg object-cover"
                  src={item?.img[0] || ""}
                  alt={item.foodName}
                  width={200}
                  height={200}
                  priority={false}
                />
                <div className="p-3 flex flex-col justify-between">
                  <div>
                    <h4>Name: {item?.foodName}</h4>
                    <p>Price: {item?.price}</p>
                    <p>Type: {item?.foodType}</p>
                    <p>Ingredient: {item?.ingredients}</p>
                    <p>Description: {item?.description}</p>
                  </div>
                  <div className="flex gap-5">
                    <button
                      className="bg-orange-300 p-2 rounded-lg hover:bg-orange-400"
                      onClick={() => {
                        fillData(item?._id);
                      }}>
                      Edit
                    </button>
                    <button
                      className="bg-neutral-300 p-2 rounded-lg hover:bg-neutral-400"
                      onClick={() => deleteFood(item._id)}>
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div className="m-5 text-xl">No food yet</div>
        )}
      </div>
      <FoodMenuModal
        modal={modal}
        setModal={setModal}
        setGetFood={setGetFood}
        foods={foods}
        setFood={setFood}
      />
    </div>
  );
};
