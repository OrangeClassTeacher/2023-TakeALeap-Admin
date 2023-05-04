import axios from "axios";
import React from "react";
import { IBeverage } from "./Interface";
import { useRouter } from "next/router";
import { IoMdClose } from "react-icons/io";
import BevImgUpload from "./BevImgUpload";

export default function BevMenuModal({
  modal,
  setModal,
  beverages,
  setBeverage,
  setGetBeverages,
}: {
  modal: any;
  setModal: any;
  beverages: IBeverage;
  setBeverage: any;
  setGetBeverages: any;
}) {
  const route = useRouter();
  const { id } = route.query;
  const resId = typeof window !== "undefined" ? localStorage.getItem("id") : "";

  const getData = async () => {
    await axios
      .get(`http://localhost:8080/api/getrestaurantbeverages?id=${resId}`)
      .then((res) => setGetBeverages(res.data.result))
      .catch((err) => console.log(err));
  };

  const addBeverage = async () => {
    id
      ? await axios
          .put(`http://localhost:8080/api/beverage?id=${id}`, beverages)
          .then((res) => {
            res.data.status ? getData() : alert("try again");
            route.push("/menu");
          })
          .catch((err) => {
            console.log(err);
          })
      : await axios
          .post(`http://localhost:8080/api/beverages`, beverages)
          .then((res) => {
            res.data.status ? getData() : alert("try again");
          })
          .catch((err) => {
            console.log(err);
          });
    setBeverage({});
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
              {id ? "Beverage edit" : "Beverage add"}
            </h3>
            <div
              onClick={() => {
                route.push("/menu");
                setModal(!modal);
              }}
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white">
              <IoMdClose />
            </div>
          </div>
          <div className="p-6 space-y-6">
            <div className="flex flex-col">
              <label htmlFor="" className="text-gray-900 text-sm text-white">
                Beverage name
              </label>
              <input
                type="text"
                value={beverages?.beverageName}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white  dark:focus:border-blue-500"
                onChange={(e) => {
                  setBeverage({
                    ...beverages,
                    beverageName: e.target.value,
                  });
                }}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="" className="text-gray-900 text-sm text-white">
                Price:
              </label>
              <input
                value={beverages?.price}
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:outline-none focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white  dark:focus:border-blue-500"
                onChange={(e) => {
                  setBeverage({
                    ...beverages,
                    price: Number(e.target.value),
                  });
                }}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="" className="text-gray-900 text-sm text-white">
                {"Beverage type"}:
              </label>
              <select
                value={beverages?.beverageType}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white  dark:focus:border-blue-500"
                onChange={(e) =>
                  setBeverage({
                    ...beverages,
                    beverageType: e.target.value,
                  })
                }>
                <option value={"Other"}>Other</option>
                <option value={"Alchohol"}>Alchohol</option>
                <option value={"Juice"}>Juice</option>
                <option value={"Tea"}>Tea</option>
                <option value={"Cocktail"}>Cocktail</option>
              </select>
            </div>
            <div className="flex flex-col">
              <label htmlFor="" className="text-gray-900 text-sm text-white">
                Description:
              </label>
              <input
                type="text"
                value={beverages?.description}
                onChange={(e) => {
                  setBeverage({
                    ...beverages,
                    description: e.target.value,
                  });
                }}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
              />
            </div>
            <BevImgUpload beverages={beverages} setBeverage={setBeverage} />
          </div>
          <div className="flex justify-end items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
            <button
              onClick={() => addBeverage()}
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
