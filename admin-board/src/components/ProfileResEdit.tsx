import axios from "axios";
import React, { useState } from "react";
import { IRestaurant } from "./Interface/Interface";
import MapComponent from "./MapComponent";
import { cuisines, locations } from "./EnumValue/enumValues";
import Utils from "@/utils/helper";

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
  const resId = typeof window !== "undefined" ? localStorage.getItem("id") : "";
  const token =
    typeof window !== "undefined" ? localStorage.getItem("token") : "";
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
    cuisineType: [],
    contact: {
      phone: 1,
      facebook: "",
      instagram: "",
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
    token: token ? token : "",
  };
  const getData = () => {
    axios
      .get(`${Utils.API_URL}/restaurantadmin?id=${resId}`)
      .then((res) => setResData(res.data.result))
      .catch((err) => console.log(err));
  };

  const editProfile = () => {
    axios
      .put(`${Utils.API_URL}/updaterestaurant?id=${resId}`, resData)
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
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <div className="flex items-center justify-between p-5 border-b rounded-t dark:border-gray-600">
              <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                Edit profile
              </h3>
            </div>
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
                <select
                  value={resData?.address?.district}
                  onChange={(e) =>
                    setResData({
                      ...resData,
                      address: { ...resData.address, district: e.target.value },
                    })
                  }
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                  <option value={""}>Select</option>
                  {locations.map((item, ind) => {
                    return (
                      <option value={item} key={ind}>{item}</option>
                    )
                  })}
                </select>
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
                <MapComponent setResData={setResData} resData={resData} />
              </div>
              <h4 className="text-white mb-2">Cuisine Type:</h4>
              <div className="flex flex-row flex-wrap gap-3">
                {cuisines.map((cuisine, index) => (
                  <div key={index} className="flex items-center mr-4 mb-2">
                    <input
                      type="checkbox"
                      id={`cuisine-${index}`}
                      value={cuisine}
                      checked={resData.cuisineType.includes(cuisine)}
                      onChange={(e) => {
                        const isChecked = e.target.checked;
                        const cuisineType = e.target.value;
                        setResData((prevState: any) => {
                          if (isChecked) {
                            return {
                              ...prevState,
                              cuisineType: [...prevState.cuisineType, cuisineType],
                            };
                          } else {
                            return {
                              ...prevState,
                              cuisineType: prevState.cuisineType.filter(
                                (c: any) => c !== cuisineType
                              ),
                            };
                          }
                        });
                      }}
                      className="w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 rounded focus:ring-purple-500 dark:focus:ring-purple-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      htmlFor={`cuisine-${index}`}
                      className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      {cuisine}
                    </label>
                  </div>
                ))}

              </div>
              <div className="flex flex-col">
                <label htmlFor="" className="text-gray-900 text-sm text-white">
                  Phone:
                </label>
                <input
                  value={resData?.contact?.phone}
                  onChange={(e) => {
                    const inputVal = e.target.value
                    if (inputVal.length !== 9) {
                      setResData({
                        ...resData,
                        contact: { ...resData.contact, phone: e.target.value },
                      })
                    } else {
                      alert('Utasnii dugaaraa zuw oruulna uu')
                    }
                  }
                  }
                  minLength={8}
                  max={8}
                  type="number"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="" className="text-gray-900 text-sm text-white">
                  Facebook link:
                </label>
                <input
                  value={resData?.contact?.facebook}
                  onChange={(e) => {
                    const inputVal = e.target.value;
                    const regex = /^(www\.)?facebook\.com/ || /^facebook\.com/;
                    if (regex.test(inputVal)) {
                      setResData({
                        ...resData,
                        contact: {
                          ...resData.contact,
                          facebook: inputVal,
                        },
                      })
                    } else {
                      alert('The Facebook link is invalid. Please enter a link starting with "www.facebook.com".')
                    }
                  }
                  }
                  type="text"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="" className="text-gray-900 text-sm text-white">
                  Instagram link:
                </label>
                <input
                  value={resData?.contact?.instagram}
                  onChange={(e) => {
                    const inputVal = e.target.value;
                    const regex = /^(www\.)?instagram\.com/;
                    if (regex.test(inputVal)) {
                      setResData({
                        ...resData,
                        contact: {
                          ...resData.contact,
                          instagram: inputVal,
                        },
                      })
                    } else {
                      alert('The Instagram link is invalid. Please enter a link starting with "www.instagram.com".')
                    }
                  }
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
                  Weekday: OPEN hour ~~~ CLOSE hour
                </label>
                <div className="flex">
                  <input
                    type='number'
                    value={resData?.schedule?.weekday?.open}
                    max='24'
                    min="2"
                    onChange={(e) => {
                      const inputVal = Number(e.target.value)
                      if (inputVal > 0 && inputVal <= 24) {
                        setResData({
                          ...resData,
                          schedule: {
                            ...resData?.schedule,
                            weekday: {
                              ...resData?.schedule?.weekday,
                              open: inputVal,
                            },
                          },
                        })
                      } else {
                        alert('tsagaa zuw oruulna uu')
                      }
                    }
                    }
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                  <input
                    value={resData?.schedule?.weekday?.close}
                    onChange={(e) => {
                      const inputVal = Number(e.target.value)
                      if (inputVal > 0 && inputVal <= 24) {
                        setResData({
                          ...resData,
                          schedule: {
                            ...resData?.schedule,
                            weekday: {
                              ...resData?.schedule?.weekday,
                              close: inputVal,
                            },
                          },
                        })
                      } else {
                        alert('tsagaa zuw oruulna uu')
                      }
                    }}
                    type="number"
                    max='24'
                    min="1"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <label htmlFor="" className="text-gray-900 text-sm text-white">
                  Weekend: OPEN hour ~~~ CLOSE hour
                </label>
                <div className="flex">
                  <input
                    type="number"
                    max='24'
                    min="1"
                    value={resData?.schedule?.weekend?.open}
                    onChange={(e) => {
                      const inputVal = Number(e.target.value)
                      if (inputVal > 0 && inputVal <= 24) {
                        setResData({
                          ...resData,
                          schedule: {
                            ...resData?.schedule,
                            weekend: {
                              ...resData?.schedule?.weekend,
                              open: inputVal,
                            },
                          },
                        })
                      } else {
                        alert('tsagaa zuw oruulna uu')
                      }
                    }
                    }
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                  <input
                    value={resData?.schedule?.weekend?.close}
                    onChange={(e) => {
                      const inputVal = Number(e.target.value)
                      if (inputVal > 0 && inputVal <= 24) {
                        setResData({
                          ...resData,
                          schedule: {
                            ...resData?.schedule,
                            weekend: {
                              ...resData?.schedule?.weekend,
                              close: inputVal,
                            },
                          },
                        })
                      } else {
                        alert('tsagaa zuw oruulna uu')
                      }
                    }
                    }
                    type="number"
                    max='24'
                    min="1"
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
