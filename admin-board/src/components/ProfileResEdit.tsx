import axios from "axios";
import React, { useState } from "react";
import { IRestaurant } from "./Interface";

export const ProfileResEdit = ({
  modalShow,
  setModalShow,
  resData,
  setResData,
}: {
  modalShow: any;
  setModalShow: any;
  resData: any;
  setResData: any;
}) => {
  const init: IRestaurant = {
    restaurantName: "",
    address: {
      district: "",
      street: "",
      building: "",
      address: "",
      location: {
        type: "",
        coordinates: [],
      },
    },
    restaurantRate: [
      {
        rateType: "",
        userId: "",
        score: 0,
        comment: "",
      },
    ],
    cuisineType: [],
    contact: {
      phone: 0,
      facebook: "",
      Instagram: "",
      link: "",
    },
    email: "",
    img: [],
    logoImg: "",
    schedule: {
      weekday: { open: 0, close: 0 },
      weekend: { open: 0, close: 0 },
    },
    description: "",
    createdAt: "",
    updatedAt: "",
  };
  const resId = typeof window !== "undefined" ? localStorage.getItem("id") : "";

  const getData = () => {
    axios
      .get(`http://localhost:8080/api/restaurant?id=${resId}`)
      .then((res) => setResData(res.data.result))
      .catch((err) => console.log(err));
  };

  const editProfile = () => {
    axios
      .put(`http://localhost:8080/api/restaurant?id=${resId}`, resData)
      .then((res) => {
        console.log(res.data.result);
        setResData(init);
        getData();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <div
        style={{ display: modalShow ? "block" : "none" }}
        id="medium-modal"
        className="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
        <div className="relative w-full max-w-lg max-h-full">
          {/* <!-- Modal content --> */}
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            {/* <!-- Modal header --> */}
            <div className="flex items-center justify-between p-5 border-b rounded-t dark:border-gray-600">
              <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                Edit profile
                {/* Default modal */}
              </h3>
            </div>
            {/* <!-- Modal body --> */}
            <div className="p-6 space-y-6">
              <div className="flex flex-col">
                <label htmlFor="" className="text-gray-900 text-sm text-white">
                  Restaurant name:
                </label>
                <input
                  value={resData?.restaurantName}
                  onChange={(e) =>
                    setResData({ ...resData, restaurantName: e.target.value })
                  }
                  type="text"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="" className="text-gray-900 text-sm text-white">
                  Email:
                </label>
                <input
                  value={resData?.email}
                  onChange={(e) =>
                    setResData({ ...resData, email: e.target.value })
                  }
                  type="text"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="" className="text-gray-900 text-sm text-white">
                  Description:
                </label>
                <input
                  value={resData?.description}
                  onChange={(e) =>
                    setResData({ ...resData, description: e.target.value })
                  }
                  type="text"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="" className="text-gray-900 text-sm text-white">
                  District:
                </label>
                <input
                  value={resData?.address?.district}
                  onChange={(e) =>
                    setResData({
                      ...resData,
                      address: { ...resData.address, district: e.target.value },
                    })
                  }
                  type="text"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="" className="text-gray-900 text-sm text-white">
                  Street:
                </label>
                <input
                  value={resData?.address?.street}
                  onChange={(e) =>
                    setResData({
                      ...resData,
                      address: { ...resData.address, street: e.target.value },
                    })
                  }
                  type="text"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="" className="text-gray-900 text-sm text-white">
                  Address:
                </label>
                <input
                  value={resData?.address?.address}
                  onChange={(e) =>
                    setResData({
                      ...resData,
                      address: { ...resData.address, address: e.target.value },
                    })
                  }
                  type="text"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="" className="text-gray-900 text-sm text-white">
                  Cuisine type:
                </label>
                <input
                  value={resData?.cuisineType}
                  onChange={(e) =>
                    setResData({ ...resData, cuisineType: e.target.value })
                  }
                  type="text"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="" className="text-gray-900 text-sm text-white">
                  Phone:
                </label>
                <input
                  value={resData?.contact?.phone}
                  onChange={(e) =>
                    setResData({
                      ...resData,
                      contact: { ...resData.contact, phone: e.target.value },
                    })
                  }
                  type="text"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="" className="text-gray-900 text-sm text-white">
                  Facebook:
                </label>
                <input
                  value={resData?.contact?.facebook}
                  onChange={(e) =>
                    setResData({
                      ...resData,
                      contact: { ...resData.contact, facebook: e.target.value },
                    })
                  }
                  type="text"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="" className="text-gray-900 text-sm text-white">
                  Instagram:
                </label>
                <input
                  value={resData?.contact?.Instagram}
                  onChange={(e) =>
                    setResData({
                      ...resData,
                      contact: {
                        ...resData.contact,
                        Instagram: e.target.value,
                      },
                    })
                  }
                  type="text"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="" className="text-gray-900 text-sm text-white">
                  Page link:
                </label>
                <input
                  value={resData?.contact?.link}
                  onChange={(e) =>
                    setResData({
                      ...resData,
                      contact: { ...resData.contact, link: e.target.value },
                    })
                  }
                  type="text"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="" className="text-gray-900 text-sm text-white">
                  Weekday: OPEN~~~CLOSE
                </label>
                <div className="flex">
                  <input
                    value={resData?.schedule?.weekday?.open}
                    onChange={(e) =>
                      setResData({
                        ...resData,
                        schedule: {
                          ...resData.schedule,
                          weekday: {
                            ...resData.schedule.weekday,
                            open: e.target.value,
                          },
                        },
                      })
                    }
                    type="text"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                  <input
                    value={resData?.schedule?.weekday?.close}
                    onChange={(e) =>
                      setResData({
                        ...resData,
                        schedule: {
                          ...resData.schedule,
                          weekday: {
                            ...resData.schedule.weekday,
                            close: e.target.value,
                          },
                        },
                      })
                    }
                    type="text"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <label htmlFor="" className="text-gray-900 text-sm text-white">
                  Weekend:
                </label>
                <div className="flex">
                  <input
                    value={resData?.schedule?.weekend?.open}
                    onChange={(e) =>
                      setResData({
                        ...resData,
                        schedule: {
                          ...resData.schedule,
                          weekend: {
                            ...resData.schedule.weekend,
                            open: e.target.value,
                          },
                        },
                      })
                    }
                    type="text"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                  <input
                    value={resData?.schedule?.weekend?.close}
                    onChange={(e) =>
                      setResData({
                        ...resData,
                        schedule: {
                          ...resData.schedule,
                          weekend: {
                            ...resData.schedule.weekend,
                            close: e.target.value,
                          },
                        },
                      })
                    }
                    type="text"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>
              </div>
            </div>
            {/* <!-- Modal footer --> */}
            <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
              <button
                onClick={() => {
                  editProfile();
                  setModalShow(!modalShow);
                }}
                data-modal-hide="medium-modal"
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Save
              </button>
              <button
                onClick={() => {
                  setModalShow(!modalShow);
                }}
                data-modal-hide="medium-modal"
                type="button"
                className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
