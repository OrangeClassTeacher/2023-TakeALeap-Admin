import { Aside } from '@/components/Aside'
import { Header } from '@/components/Header'
import Menu from '@/components/Menu'
import React from 'react'

export default function menu() {
    return (
        <div className='flex bg-slate-300 h-[800px]'>
            <Aside />
            <div className='flex flex-col w-[100%]'>
                <Header />
                <Menu />
            </div>

        </div>
    )
}
