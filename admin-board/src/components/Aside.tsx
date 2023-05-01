import React, { useState, ReactNode } from 'react'
import Image from 'next/image'
import logo from '../assets/logo.png'
import Link from 'next/link'
import defaultavatar from '../assets/defaultavatar.jpeg'

export const Aside = () => {

    const handler = () => {
        localStorage.removeItem("token")
    }

    return (
        <div className='bg-white border rounded-lg w-1/6 p-10 h-full flex flex-col gap-5 m-5'>
            <div className='border-b-2 pb-4'>
                <Image src={logo} alt='logo' width={300} />
            </div>
            <div className='flex flex-col justify-between gap-[300px]'>
                <div className=' flex flex-col gap-5'>
                    <Link href='/profile'>
                        <h3 className='hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300'>Profile</h3>
                    </Link>
                    <Link href='/dashboard'>
                        <h3 className='hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300'>Dashboard</h3>
                    </Link>
                    <Link href='/menu'>
                        <h3 className='hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300'>Menu</h3>
                    </Link>
                </div>
                <div>
                    <Image src={defaultavatar} alt='avatar' />
                    <Link onClick={handler} href='/'>
                        <h3 className='hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 text-center'>Logout</h3>
                    </Link>
                </div>

            </div>
        </div>
    )
}
