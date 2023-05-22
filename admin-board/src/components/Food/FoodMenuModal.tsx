import axios from "axios";
import React from "react";
import { IFood } from "../Interface/Interface";
import { useRouter } from "next/router";
import FoodImgUpload from "./FoodImgUpload";
import { IoMdClose } from "react-icons/io";
import Utils from "@/utils/helper";
import { meal } from "../EnumValue/enumValues";
import { toast } from "react-toastify";

export default function FoodMenuModal({
  modal,
  setModal,
  setGetFood,
  foods,
  setFood,
}: {
  modal: any;
  setModal: any;
  setGetFood: any;
  foods: IFood;
  setFood: any;
}) {
  const resId = typeof window !== "undefined" ? localStorage.getItem("id") : "";
  // const token =
  //   typeof window !== "undefined" ? localStorage.getItem("token") : "";
  const route = useRouter();
  const { id } = route.query;

  const getData = async () => {
    await axios
      .get(`${Utils.API_URL}/foodbyrestaurantid?id=${resId}`)
      .then((res) => {
        setGetFood(res.data.result);
      })
      .catch((err) => toast('Failed to get foods'));
  };

  const addFood = async () => {
    id
      ? await axios
        .put(`${Utils.API_URL}/updatefood?id=${id}`, foods)
        .then((res) => {
          res.data.status ? getData() : alert("hudarsaan");
          route.push("/menu");
        })
        .catch((err) => {
          toast('Failed to update food');
        })
      : await axios
        .post(`${Utils.API_URL}/createfood`, foods)
        .then((res) => {
          res.data.status ? getData() : alert(res.data.message);
        })
        .catch((err) => {
          toast('Failed to create food');
        });
    setFood({});
    setModal(false);
  };

  return (
    <div
      style={{ display: modal ? "block" : "none" }}
      id="medium-modal"
      className="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
      <div className="relative w-full max-w-lg max-h-full">
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <div className="flex items-center justify-between p-5 border-b rounded-t dark:border-gray-600">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">
              {id ? "Food Edit" : "food Add"}
            </h3>
            <div
              onClick={() => {
                setFood({});
                setModal(!modal);
                route.push("/menu");
              }}
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white">
              <IoMdClose />
            </div>
          </div>
          <div className="p-6 space-y-6">
            <div className="flex flex-col">
              <label htmlFor="" className="text-gray-900 text-sm text-white">
                Food name
              </label>
              <input
                type="text"
                value={foods?.foodName}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white  dark:focus:border-blue-500"
                onChange={(e) => {
                  setFood({ ...foods, foodName: e.target.value });
                }}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="" className="text-gray-900 text-sm text-white">
                Price:
              </label>
              <input
                value={foods?.price}
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:outline-none focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white  dark:focus:border-blue-500"
                onChange={(e) => {
                  setFood({ ...foods, price: Number(e.target.value) });
                }}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="" className="text-gray-900 text-sm text-white">
                Food type
              </label>

              <select
                value={foods?.foodType}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white  dark:focus:border-blue-500"
                onChange={(e) => {
                  setFood({ ...foods, foodType: e.target.value });
                }}>
                {meal.map((item, ind) => {
                  return (
                    <option value={item} key={ind}>{item}</option>
                  )
                })}
              </select>
            </div>
            <div className="flex flex-col">
              <label htmlFor="" className="text-gray-900 text-sm text-white">
                Ingredients
              </label>
              <input
                value={foods?.ingredients}
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
                onChange={(e) =>
                  setFood({
                    ...foods,
                    ingredients: e.target.value,
                  })
                }
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="" className="text-gray-900 text-sm text-white">
                Description:
              </label>
              <input
                type="text"
                value={foods?.description}
                onChange={(e) =>
                  setFood({
                    ...foods,
                    description: e.target.value,
                  })
                }
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
              />
            </div>
            <FoodImgUpload foods={foods} setFood={setFood} />
          </div>
          <div className="flex justify-end items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
            <button
              onClick={() => addFood()}
              data-modal-hide="medium-modal"
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              {id ? "Save" : "Add"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
