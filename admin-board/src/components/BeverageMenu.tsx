import React, { useState } from "react";
import { IBeverage } from "./Interface";
import Image from "next/image";
import notFound from "../assets/notfound.jpeg";
import axios from "axios";
import BevMenuModal from "./BevMenuModal";
import { useRouter } from "next/router";

export const BeverageMenu = ({
  getBeverages,
  setGetBeverages,
}: {
  getBeverages: IBeverage[];
  setGetBeverages: any;
}) => {
  const resId = typeof window !== "undefined" ? localStorage.getItem("id") : "";
  const token =
    typeof window !== "undefined" ? localStorage.getItem("token") : "";
  const route = useRouter();
  const { id } = route.query;

  const initBeverage: IBeverage = {
    _id: id ? id : "",
    beverageName: "",
    restaurantId: resId,
    price: 0,
    beverageType: "Other",
    img: [],
    ingredients: "",
    description: "",
    token: token,
  };
  const [modal, setModal] = useState<boolean>(false);
  const [beverages, setBeverage] = useState<IBeverage>(initBeverage);

  const getData = async () => {
    await axios
      .get(`http://localhost:8080/api/getrestaurantbeverages?id=${resId}`)
      .then((res) => {
        setGetBeverages({ ...res.data.result, token: token });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteBeverage = async (id: any) => {
    if (confirm("delete???")) {
      await axios
        .post(`http://localhost:8080/api/beverage?id=${id}`, { token: token })
        .then((res) => {
          res.data.status ? (alert("succes"), getData()) : alert("Try agian");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const fillData = async (id: any) => {
    await axios
      .get(`http://localhost:8080/api/beverage?id=${id}`)
      .then((res) => setBeverage({ ...res.data.result, token: token }))
      .catch((err) => console.log(err));

    route.push(`/menu?id=${id}`);
    setModal(true);
  };

  return (
    <div className="relative">
      <h2 className="uppercase text-2xl text-center p-3 font-mediums">
        Beverages
      </h2>
      <button
        className="absolute top-5 right-5 bg-gray-400 p-2 rounded hover:bg-gray-500"
        onClick={() => {
          setBeverage(initBeverage);
          setModal(true);
        }}>
        Add Beverage
      </button>
      <div>
        {getBeverages.length > 0 ? (
          getBeverages?.map((item, index) => {
            return (
              <div
                className="flex border rounded-lg p-2 m-2 mx-5 min-h-[200px]"
                key={index}>
                <Image
                  className="rounded-lg object-cover"
                  src={notFound}
                  alt={item.beverageName}
                  width={200}
                  height={300}
                  priority={false}
                />
                <div className="p-1 flex flex-col justify-between ms-2">
                  <div className="flex flex-col gap-1">
                    <h4> Name: {item?.beverageName}</h4>
                    <p>Price :{item?.price}</p>
                    <p>Type: {item?.beverageType}</p>
                    <p>Description: {item?.description}</p>
                  </div>
                  <div className="flex gap-5">
                    <button
                      className="bg-orange-300 p-2 rounded-lg hover:bg-orange-400"
                      onClick={() => fillData(item._id)}>
                      Edit
                    </button>
                    <button
                      className="bg-neutral-300 p-2 rounded-lg hover:bg-neutral-400"
                      onClick={() => deleteBeverage(item._id)}>
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div className="m-5 text-xl">No Beverage yet</div>
        )}
      </div>
      <BevMenuModal
        modal={modal}
        setModal={setModal}
        beverages={beverages}
        setBeverage={setBeverage}
        setGetBeverages={setGetBeverages}
      />
    </div>
  );
};
