import React from "react";
import { useState } from "react";
import axios from "axios";
import { IFood } from "../Interface/Interface";

export default function FoodImgUpload({
  foods,
  setFood,
}: {
  foods: IFood;
  setFood: any;
}) {
  const [imgUpload, setImgUpload] = useState<boolean>(false);

  const sendImg = async (files: any) => {
    const url = "https://api.cloudinary.com/v1_1/dnpeugfk4/upload";
    setImgUpload(true);

    const newArr: File[] = [];

    for (let i = 0; i < files[0]?.length; i++) {
      newArr.push(files[0][i]);
    }

    const promise = await Promise.all(
      newArr.map((file) => {
        const formData = new FormData();
        formData.append("file", file);
        formData.append("api_key", "433374323371145");
        formData.append("folder", "restaurantImages");
        formData.append("upload_preset", "trivymv8");
        return axios.post(url, formData);
      })
    );

    const arr: any = [];

    promise.map((res) => {
      arr.push(res?.data?.secure_url);
    });

    setFood({ ...foods, img: arr });
    setImgUpload(false);
  };
  return (
    <div className="flex flex-col">
      <div>
        <label htmlFor="" className="text-gray-900 text-sm text-white">
          Images :
        </label>
        <span className={imgUpload ? "text-green-500" : "text-white"}>
          {imgUpload ? " uploading" : " ready"}
        </span>
      </div>
      <input
        type="file"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
        onChange={(e) => {
          const file = e?.target?.files;
          sendImg([file]);
        }}
      />
    </div>
  );
}
