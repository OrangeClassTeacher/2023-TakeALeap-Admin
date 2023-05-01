import { Aside } from '@/components/Aside'
import { Header } from '@/components/Header'
import ProfileEdit from '@/components/ProfileEdit'
import React from 'react'

export default function profileRes() {
    return (
        <div className='flex flex-row justify-between bg-slate-300 h-[800px]'>
            <Aside />
            <div className='flex flex-col w-[100%]'>
                <Header />
                <ProfileEdit />
            </div>

        </div>
    )
}
