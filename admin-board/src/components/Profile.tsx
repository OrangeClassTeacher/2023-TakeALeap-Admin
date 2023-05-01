import React from 'react'
import Image from 'next/image'
import logo from '../assets/food.avif'
import Link from 'next/link'



export default function Profile() {
    return (
        <div className='bg-white border rounded-lg w-6/6 h-full gap-5 m-5 p-5'>
            <Link href='/profileEdit'>
                <button className='rounded-full bg-yellow-500 text-white p-2 m-5'>Edit profile</button>
            </Link>
            <div className='flex flex-row justify-between '>
                <div>
                    <Image className='rounded-lg' src={logo} alt='food' width={300} height={300} />
                </div>
                <div className='flex flex-col flex-wrap gap-5 m-5 m-0 md:mx-20 h-[600px] overflow-scroll'>
                    <div className='flex flex-row gap-20'>
                        <label>Restaurant name: </label>
                        <input type="text" disabled placeholder='restaurant name' />
                    </div>
                    <div className='flex flex-row gap-20'>
                        <label>District: </label>
                        <input type="text" disabled placeholder='district' />
                    </div>
                    <div className='flex flex-row gap-20'>
                        <label>Street: </label>
                        <input type="text" disabled placeholder='street' />
                    </div>
                    <div className='flex flex-row gap-20'>
                        <label>Address: </label>
                        <input type="text" disabled placeholder='address' />
                    </div>
                    <div className='flex flex-row gap-20'>
                        <label>Location: </label>
                        <input type="text" disabled placeholder='lat' />
                        <input type="text" disabled placeholder='long' />
                    </div>
                    <div className='flex flex-row gap-20'>
                        <label>Cuisine type: </label>
                        <input type="text" disabled placeholder='cuisine type' />
                    </div>
                    <div className='flex flex-row gap-20'>
                        <label>Phone: </label>
                        <input type="number" disabled placeholder='phone number' />
                    </div>
                    <div className='flex flex-row gap-20'>
                        <label>Facebook: </label>
                        <input type="text" disabled placeholder='facebook' />
                    </div>
                    <div className='flex flex-row gap-20'>
                        <label>Instagram: </label>
                        <input type="text" disabled placeholder='Instagram' />
                    </div>
                    <div className='flex flex-row gap-20'>
                        <label>Page link: </label>
                        <input type="text" disabled placeholder='page' />
                    </div>
                    <div className='flex flex-row gap-20'>
                        <label>Email: </label>
                        <input type="text" disabled placeholder='email' />
                    </div>

                </div>
            </div>
        </div>
    )
}
