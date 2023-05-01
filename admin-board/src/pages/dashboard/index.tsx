import { Aside } from '@/components/Aside'
import Dashboard from '@/components/Dashboard'
import { Header } from '@/components/Header'
import React from 'react'

export default function dashboard() {
    return (
        <div className='flex bg-slate-300 h-[800px]'>
            <Aside />
            <div className='flex flex-col w-[100%]'>
                <Header />
                <Dashboard />
            </div>

        </div>
    )
}
