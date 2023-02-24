import React from 'react'
import { ArrowLongRightIcon } from '@heroicons/react/24/outline'
import { dashboardItems } from '../data'

import Banner from './Banner'
import { useSelector } from 'react-redux'
import { selectUser } from '@/slices/userSice'

const Dashboard = () => {
    const user = useSelector(selectUser)

    return (
        <>
            <Banner 
                subject='NEW! Chartist Development' 
                message='Join us in Blackwood for our new opening Fri 7pm.' 
                buttonText='Register now' 
            />

            <section className='bg-gray-50'>
                <div className="w-full h-full mx-auto">
                    <div className="">
                        <div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
                            <h1 className="text-2xl font-semibold tracking-tight text-slate-800">Welcome {user.fullname}!</h1>
                        </div>
                    </div>
                    <div className='flex justify-center items-center pt-4 mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
                        <ul className="flex flex-wrap list-none mb-16">
                            {dashboardItems.map((item, index) => (
                                <li key={index} id={item.title} className="flex p-2 w-full sm:w-1/2 lg:w-1/3">
                                    <div className="bg-white flex flex-col mb-2 py-4 px-4 sm:py-6 sm:px-8 rounded-md shadow-sm">
                                    <img 
                                        className='w-16 my-1 mx-2'
                                        src={item.iconUrl}
                                        alt={item.title} 
                                    />
                                    <div className="flex flex-col p-2">
                                        <div className="text-slate-800 text-lg mb-2 mt-4">{item.cardTitle}</div>
                                        <p className="text-gray-500 my-2">{item.cardDesc}</p>
                                        <span className='inline-flex mt-4'>
                                        <a href={item.buttonUrl} className='text-pink-500 hover:text-pink-600 py-2 inline-flex'>
                                            <span className='mr-2 hover:mr-4 transition-all'>{item.buttonText}</span> 
                                            <ArrowLongRightIcon className="relative h-6 w-6" aria-hidden="true" />
                                        </a>
                                        </span>
                                    </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Dashboard
