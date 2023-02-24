import React from 'react'

const Compliance = () => {
  return (
    <div>
        <div className='flex flex-col justify-start items-start gap-4 w-full'>
            <div className="overflow-hidden bg-white shadow sm:rounded-md w-full">
                <div className="px-4 py-5 sm:px-6">
                    <h3 className="text-lg font-medium leading-6 text-gray-900">Compliance</h3>
                    <p className="mt-1 max-w-2xl text-sm text-gray-500">Compliance check information.</p>
                </div>
                <div className='flex flex-col justify-start items-start md:flex-row md:justify-evenly lg:flex-col lg:justify-start'>
                    <div className="flex justify-start items-center py-6 px-6 md:flex-col md:items-start md:gap-4 md:text-center lg:text-left lg:flex-row lg:items-center">
                        <img className='w-16 md:mx-auto lg:mx-0' src='https://www.poblconnect.co.uk/fire-icon.png' alt='' />
                        <div className='ml-4'>
                            <p className='text-sm font-medium text-gray-500'>Fire Safety Check</p>
                            <p className='text-sm text-gray-900 sm:col-span-2 mt-1'>Last Inspection:<span className='text-pink-500 ml-2'>01/01/2023</span></p>
                            <p className='text-sm text-gray-900 sm:col-span-2 mt-1'>Next Inspection:<span className='text-pink-500 ml-2'>01/01/2023</span> </p>
                        </div>
                    </div>
                    <div className="flex justify-start items-center py-6 px-6 md:flex-col md:items-start md:gap-4 md:text-center lg:text-left lg:flex-row lg:items-center">
                        <img className='w-16 md:mx-auto lg:mx-0' src='https://www.poblconnect.co.uk/electric-icon.png' alt='' />
                        <div className='ml-4'>
                        <p className='text-sm font-medium text-gray-500'>Electric Safety Check</p>
                        <p className='text-sm text-gray-900 sm:col-span-2 mt-1'>Last Test:<span className='text-pink-500 ml-2'>01/01/2023</span></p>
                        <p className='text-sm text-gray-900 sm:col-span-2 mt-1'>Next Test:<span className='text-pink-500 ml-2'>01/01/2023</span> </p>
                        </div>
                    </div>
                    <div className="flex justify-start items-center py-6 px-6 md:flex-col md:items-start md:gap-4 md:text-center lg:text-left lg:flex-row lg:items-center">
                        <img className='w-16 md:mx-auto lg:mx-0' src='https://www.poblconnect.co.uk/gas-icon.png' alt='' />
                        <div className='ml-4'>
                        <p className='text-sm font-medium text-gray-500'>Gas Safety Check</p>
                        <p className='text-sm text-gray-900 sm:col-span-2 mt-1'>Last Certificate:<span className='text-pink-500 ml-2'>01/01/2023</span></p>
                        <p className='text-sm text-gray-900 sm:col-span-2 mt-1'>Next Certificate:<span className='text-pink-500 ml-2'>01/01/2023</span> </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Compliance
