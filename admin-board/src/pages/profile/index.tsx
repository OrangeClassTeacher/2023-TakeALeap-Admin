import { Aside } from '@/components/Aside'
import { Header } from '@/components/Header'
import Profile from '@/components/Profile'
import React from 'react'

export default function profile() {
    return (
        <div className='flex flex-row justify-between bg-slate-300 h-[800px]'>
            <Aside />
            <div className='flex flex-col w-[100%]'>
                <Header />
                <Profile />
            </div>

        </div>
    )
}
