import React from 'react'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { IBeverage, IFood } from './Interface'
import { MdDeleteForever, MdEditDocument } from 'react-icons/md'
import axios from 'axios'
import MenuModal from './MenuModal'

export default function Menu() {

    const [getFood, setGetFood] = useState<[IFood]>()
    const [getBeverages, setGetBeverages] = useState<[IBeverage]>()
    const [modal, setModal] = useState<boolean>(false)
    const [isEdited, setIsEdited] = useState<boolean>(false)
    const [isFood, setIsFood] = useState<boolean>(false)
    const [getFoodId, setFoodGetId] = useState<string>("")
    const [getBeverageId, setBeverageGetId] = useState<string>("")


    useEffect(() => {
        axios
            .get("http://localhost:8080/api/foods")
            .then((res) => {
                setGetFood(res.data.result)
                console.log(res.data.result);
            })
            .catch((err) =>
                console.log(err)
            )
    }, [])

    useEffect(() => {
        axios.get("http://localhost:8080/api/beverages")
            .then((res) => {
                setGetBeverages(res.data.result)
                console.log(res.data.result);
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    const deleteFood = (id: any) => {
        axios.delete(`http://localhost:8080/api/food?id=${id}`)
            .then((res) => {
                setGetFood(res.data.result)
            })
            .catch((err) => {
                console.log(err)
            })
    }
    const deleteBeverage = (id: any) => {
        axios.delete(`http://localhost:8080/api/beverage?id=${id}`)
            .then((res) => {
                setGetBeverages(res.data.result)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const editFood = (id: React.SetStateAction<string | undefined>) => {
        setModal(!modal)
        setIsEdited(!isEdited)
        setIsFood(true)
        setFoodGetId(id)
    }

    const editBeverage = (id: React.SetStateAction<string | undefined>) => {
        setModal(!modal)
        setIsEdited(!isEdited)
        setIsFood(false)
        setBeverageGetId(id)
    }


    return (
        <div className='bg-white border rounded-lg w-6/6 h-full gap-5 m-5 flex flex-row justify-between gap-5'>

            <div className='rounded-lg w-3/6 flex flex-row flex-wrap h-[600px] overflow-scroll'>
                <h2>Foods</h2>
                {
                    getFood?.map((item, index) => {
                        return (
                            <div className='flex flex-row gap-5 border-2 rounded-lg p-2 m-2 w-full h-[250px]' key={index}>
                                <Image className='rounded-lg' src={item?.img[0] || ""} alt={item.foodName} width={200} height={200} />
                                <div className='p-1 flex flex-col justify-between'>
                                    <div>
                                        <h4>Хоолны нэр: {item.foodName}</h4>
                                        <p>Үнэ: {item.price}</p>
                                        <p>Төрөл: {item.foodType}</p>
                                        <p>Орц: {item.ingredients}</p>

                                    </div>
                                    <div className='flex flex-row gap-5'>
                                        <button className='bg-orange-300 p-1 rounded-lg' onClick={editFood}>Edit</button>
                                        <button className='bg-neutral-300 p-1 rounded-lg' onClick={deleteFood}>Delete</button>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
            </div>
            <div className='rounded-lg flex w-3/6 flex-row flex-wrap h-[600px] overflow-scroll'>
                <h2>Beverages</h2>
                {
                    getBeverages?.map((item, index) => {
                        return (
                            <div className='flex flex-row gap-5 border-2 rounded-lg p-2 m-2 w-full' key={index}>
                                {/* <Image className='rounded-lg' src={item.img[0]} alt={item.beverageName} width={200} height={300} /> */}
                                <div className='p-1 flex flex-col justify-between'>
                                    <div>
                                        <h4>{item.beverageName}</h4>
                                        <p>{item.price}</p>
                                        <p>{item.beverageType}</p>
                                    </div>
                                    <div className='flex flex-row gap-5'>
                                        <button className='bg-orange-300 p-1 rounded-lg' onClick={editBeverage} >Edit</button>
                                        <button className='bg-neutral-300 p-1 rounded-lg' onClick={() => deleteBeverage(id)}>Delete</button>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
            </div>
            <MenuModal
                modal={modal}
                setModal={setModal}
                setGetFood={setGetFood}
                isEdited={isEdited}
                setIsEdited={setIsEdited}
                getFoodId={getFoodId}
                getBeverageId={getBeverageId}
                isFood={isFood}
                setIsFood={setIsFood}
            />
        </div>
    )
}
