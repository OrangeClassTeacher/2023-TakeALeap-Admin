import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { IFood, IBeverage } from './Interface'

export default function MenuModal({
    modal,
    setModal,
    setGetFood,
    isEdited,
    setIsEdited,
    getFoodId,
    getBeverageId,
    isFood,
    setIsFood
}: {
    modal: any
    setModal: any,
    setGetFood: any,
    isEdited: any,
    setIsEdited: any,
    getFoodId: any,
    getBeverageId: any,
    isFood: any,
    setIsFood: any

}) {

    const initFood: IFood = {
        foodName: "",
        restaurantId: '',
        price: 0,
        foodType: "",
        img: [],
        ingredients: [],
        _id: ''
    }

    const initBeverage: IBeverage = {
        _id: '',
        beverageName: '',
        restaurantId: '',
        price: 0,
        beverageType: '',
        img: []
    }


    const [foods, setFoods] = useState<[string]>()
    const [beverages, setBeverages] = useState<[string]>()


    function getFoods() {
        axios
            .get('http://localhost:8080/api/foods')
            .then((res) => {
                setFoods(res.data.result)
                console.log(res.data.result)

            })
            .catch((err) => {
                console.log(err)
            })
    }

    function getBeverages() {
        axios
            .get('http://localhost:8080/api/beverages')
            .then((res) => {
                setBeverages(res.data.result)
                console.log(res.data.result);
            })
            .catch((err) => {
                console.log(err)
            })
    }

    function getIdOfFood() {
        axios
            .get(`http://localhost:8080/api/food?id=${getFoodId}`)
            .then((res) => {
                setFoods(res.data.result[0])
            })
            .catch((err) => {
                console.log(err)
            })
    }
    function getIdOfBeverage() {
        axios
            .get(`http://localhost:8080/api/beverage?id=${getBeverageId}`)
            .then((res) => {
                setFoods(res.data.result[0])
            })
            .catch((err) => {
                console.log(err)
            })
    }

    useEffect(() => {
        if (isEdited === true) {
            getIdOfFood()
            getIdOfBeverage()
        } else {
            setFoods(initFood)
            setBeverages(initBeverage)
        }
    }, [isEdited])

    const addFood = () => {
        isEdited ?
            axios
                .put(`http://localhost:8080/api/food?id=${getFoodId}`, {
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(foods)
                })
                .then((res) => {
                    setFoods(initFood)
                    getFoods()
                })
                .catch((err) => {
                    console.log(err)
                })
            :
            axios
                .post(`http://localhost:8080/api/foods`, {
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(foods)
                })
                .then((res) => {
                    setFoods(initFood)
                    getFoods()
                })
                .catch((err) => {
                    console.log(err)

                })
    }
    const addBeverage = () => {
        isEdited ?
            axios
                .put(`http://localhost:8080/api/beverage?id=${getBeverageId}`, {
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(beverages)
                })
                .then((res) => {
                    setBeverages(initBeverage)
                    getBeverages()
                })
                .catch((err) => {
                    console.log(err)
                })
            :
            axios
                .post(`http://localhost:8080/api/beverages`, {
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(beverages)
                })
                .then((res) => {
                    setBeverages(initBeverage)
                    getBeverages()
                })
                .catch((err) => {
                    console.log(err)

                })
    }


    return (
        <div>
            <div className="block space-y-4 md:flex md:space-y-0 md:space-x-4">
                <button onClick={() => {
                    setModal(!modal)
                    setIsEdited(false)
                }} data-modal-target="medium-modal" data-modal-toggle="medium-modal" className="block w-full md:w-auto text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button" >
                    Add
                </button>
            </div>
            <div style={{ display: modal ? "block" : "none" }} id="medium-modal" tabindex="-1" className="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
                <div className="relative w-full max-w-lg max-h-full">
                    {/* <!-- Modal content --> */}
                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                        {/* <!-- Modal header --> */}
                        <div className="flex items-center justify-between p-5 border-b rounded-t dark:border-gray-600">
                            <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                                {isEdited ? "Edit menu" : "Add menu"}
                                {/* Default modal */}
                            </h3>
                            <button
                                onClick={() => {
                                    setModal(!modal)
                                    setIsEdited(false)
                                }}
                                type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="medium-modal">
                                <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                <span className="sr-only">Close modal</span>
                            </button>
                        </div>
                        {/* <!-- Modal body --> */}
                        <div className="p-6 space-y-6" >
                            <select style={{ display: isEdited ? "none" : "block" }} onChange={(e) => e.target.value === '1' ? setIsFood(true) : setIsFood(false)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" name='' id=''>
                                <option value="0">Select</option>
                                <option value="1">Food</option>
                                <option value="2">Beverage</option>
                            </select>
                            <div className='flex flex-col'>
                                <label htmlFor="" className='text-gray-900 text-sm text-white'>{isFood ? 'Food name' : 'Beverage name'}: </label>
                                <input type="text" className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' />
                            </div>
                            <div className='flex flex-col'>
                                <label htmlFor="" className='text-gray-900 text-sm text-white'>Price:</label>
                                <input type="text" className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' />
                            </div>
                            <div className='flex flex-col'>
                                <label htmlFor="" className='text-gray-900 text-sm text-white'>{isFood ? 'Food type' : 'Beverage type'}:</label>
                                <input type="text" className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' />
                            </div>
                            <div className='flex flex-col'>
                                <label htmlFor="" className='text-gray-900 text-sm text-white'>Images:</label>
                                <input multiple type="file" className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' />
                            </div>
                            <div className='flex flex-col' style={{ display: isFood ? "block" : "none" }}>
                                <label htmlFor="" className='text-gray-900 text-sm text-white'>{isFood ? 'Ingredients' : ''}</label>
                                <input type="text" className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' />
                            </div>
                            <div className='flex flex-col'>
                                <label htmlFor="" className='text-gray-900 text-sm text-white'>Description:</label>
                                <input type="text" className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' />
                            </div>
                        </div>
                        {/* <!-- Modal footer --> */}
                        <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                            <button onClick={() => {
                                isFood ? addFood() : addBeverage()
                            }} data-modal-hide="medium-modal" type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">{isEdited ? "Save" : "Add"}</button>
                            <button data-modal-hide="medium-modal" type="button" className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
