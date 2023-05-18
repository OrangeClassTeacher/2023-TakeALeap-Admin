import modal from 'flowbite/lib/esm/components/modal';
import React, { useState } from 'react'
import { AiFillCamera } from 'react-icons/ai';
import { IoIosArrowBack } from 'react-icons/io';
import logo from "../../assets/defaultavatar.jpeg"
import Image from 'next/image';

export default function ImageProfile({ resData, setMulti, setModal }: { resData: any, setMulti: any, setModal: any }) {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);

  function handleNextItemBtn() {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setTimeout(() => {
        setActiveIndex((prev) => {
          setIsTransitioning(false);
          return prev + 1 < resData.img.length ? prev + 1 : prev;
        });
      }, 500); // change the value to adjust the duration of the transition
    }
  }

  function handlePrevItemBtn() {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setTimeout(() => {
        setActiveIndex((prev) => {
          setIsTransitioning(false);
          return prev - 1 >= 0 ? prev - 1 : prev;
        });
      }, 500); // change the value to adjust the duration of the transition
    }
  }
  return (
    <div className="relative mb-32">
      <div className="flex flex-col relative">
        {activeIndex > 0 && (
          <button
            className="bg-white z-10 left-0 absolute text-2xl rounded-full p-2 top-[40%]  m-5 "
            onClick={handlePrevItemBtn}>
            <IoIosArrowBack />
          </button>
        )}

        <Image
          className="rounded-lg w-full h-[400px] object-cover"
          src={resData?.img[activeIndex]}
          alt="food"
          width={700}
          height={700}
          priority={true}
        />

        {activeIndex < resData.img.length - 1 && (
          <button
            className="bg-white z-10 right-0 absolute text-2xl rounded-full p-2 top-[40%] m-5 "
            onClick={handleNextItemBtn}>
            <IoIosArrowBack
              style={{
                transform: "rotate(180deg)",
              }}
            />
          </button>
        )}
      </div>
      <div className="rounded-full border-1 bg-gray-200 hover:bg-gray-400 active:bg-gray-500 focus:outline-none focus:ring focus:ring-gray-300  p-2 absolute right-2 bottom-2  min-w-[2.8%]">
        <AiFillCamera onClick={() => {
          setMulti(true);
          setModal(!modal);
        }} />
      </div>
      <div className="flex flex-col absolute w-2/6 -bottom-16 left-10">
        <div className="relative w-3/5">
          <Image
            className="rounded-full  -bottom-20 left-20 border w-[200px] h-[200px] object-cover"
            src={resData?.logoImg ? resData?.logoImg : logo}
            alt="food"
            width={200}
            height={200}
            priority={true}
          />
          <div className="p-2 absolute right-0 bottom-10  min-w-[8%] rounded-full bg-gray-300 hover:bg-gray-400 active:bg-gray-500 focus:outline-none focus:ring focus:ring-gray-300">
            <AiFillCamera onClick={() => {
              setMulti(false);
              setModal(!modal);
            }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
