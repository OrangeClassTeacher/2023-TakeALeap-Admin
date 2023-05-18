import axios from 'axios'
import React, { useState } from 'react'
import { IRestaurant } from './Interface/Interface'
import { InfinitySpin } from 'react-loader-spinner'
import Utils from '@/utils/helper'


export const UploadModal = ({
    modal,
    setModal,
    multi,
    setResData,
    loading,
    setLoading }: {
        modal: any, setModal: any, multi: any, resData: IRestaurant | any, setResData: any, loading: boolean,
        setLoading: any
    }) => {

    const [imgSave, setImgSave] = useState<string[]>([])
    const [typeImg, setTypeImg] = useState("")

    const resId = typeof window !== "undefined" ? localStorage.getItem("id") : "";
    const token = typeof window !== "undefined" ? localStorage.getItem("token") : "";


    const getData = () => {
        setLoading(true)
        axios.get(`${Utils.API_URL}/restaurantadmin?id=${resId}`)
            .then((res) => {
                setResData(res.data.result)
            }
            )
            .catch((err) => console.log(err)
            )
        setLoading(false)
    }

    const editImg = () => {
        const fileSend = typeImg == "img" ? { img: imgSave, token: token } : { logoImg: imgSave[0], token: token }

        axios
            .put(`${Utils.API_URL}/updaterestaurant?id=${resId}`, fileSend)
            .then((res) => {
                console.log(res.data.status);
                res.data.status ? getData() : alert("failed")

            })
            .catch((err) => {
                console.log(err)
            })
        setImgSave([])
    }

    const sendFile = async (fieldName: string, files: any) => {
        setTypeImg(fieldName)
        setLoading(true)
        const url = `https://api.cloudinary.com/v1_1/dnpeugfk4/upload`
        const newArr: File[] = []
        for (let i = 0; i < files[0]?.length; i++) {
            newArr.push(files[0][i])
        }

        const promise = await Promise.all(
            newArr.map((file) => {
                const formData = new FormData();
                formData.append('file', file);
                formData.append('api_key', '433374323371145');
                formData.append('folder', 'restaurantImages');
                formData.append('upload_preset', 'trivymv8');

                return axios.post(url, formData);
            })
        );
        const arr: string[] = [];

        promise.map((res) => {
            arr.push(res.data.secure_url);
        });

        if (fieldName === 'img') {
            // setData({ ...data, img: arr });
            setImgSave(arr)
        } else {
            setImgSave(arr)
            // setData({ ...data, logoImg: arr[0] });
        }

        setLoading(false);
    }
    return (
        <div style={{ display: modal ? "block" : "none" }} id="defaultModal" aria-hidden="true" className="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
            <div className="relative w-full max-w-2xl max-h-full">
                <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                    <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                            {multi ? 'Upload background picture' : 'Upload profile picture'}
                        </h3>

                    </div>
                    <div className="p-6 space-y-6 flex">
                        {
                            multi
                                ?
                                <input type='file'
                                    multiple
                                    className='
                                        file:bg-gradient-to-b file:from-blue-500 file:to-blue-600 
                                        file:px-6 file:py-3 file:m-5 
                                        file:border-none
                                        file:rounded-full
                                        file:text-white
                                        file:cursor-pointer
                                        file:shadow-lg file:shadow-blue-600/50
                                        
                                        bg-gradient-to-br from-gray-600 to-gray-700
                                        text-white/80
                                        rounded-full
                                        cursor-pointer
                                        shadow-xl shadow-gray-700/60
                                        '
                                    onChange={(e) => {
                                        console.log(e.target.files)
                                        const arr = []
                                        arr.push(e.target.files)
                                        sendFile("img", arr)
                                    }}

                                />
                                :
                                <input
                                    type='file'
                                    className='
                                        file:bg-gradient-to-b file:from-blue-500 file:to-blue-600 
                                        file:px-6 file:py-3 file:m-5 
                                        file:border-none
                                        file:rounded-full
                                        file:text-white
                                        file:cursor-pointer
                                        file:shadow-lg file:shadow-blue-600/50

                                        bg-gradient-to-br from-gray-600 to-gray-700
                                        text-white/80
                                        rounded-full
                                        cursor-pointer
                                        shadow-xl shadow-gray-700/60
                                        '
                                    onChange={(e) => {
                                        console.log(e.target.files)
                                        const arr = []
                                        arr.push(e.target.files)
                                        sendFile("logoImg", arr)
                                    }}
                                />
                        }
                        {loading ? <InfinitySpin
                            width='200'
                            color="#4fa94d"
                        /> : ''}
                    </div>
                    <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                        <button
                            onClick={() => {
                                editImg()
                                setModal(!modal)
                            }}
                            data-modal-hide="defaultModal" type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">save</button>
                        <button onClick={() => {
                            setModal(!modal)
                        }} data-modal-hide="defaultModal" type="button" className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">close</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
