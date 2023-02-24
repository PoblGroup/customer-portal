import Banner from '@/components/Banner'
import Compliance from '@/components/Compliance,'
import Layout from '@/components/Layout'
import TenancyInformation from '@/components/TenancyInformation'
import { ArrowLongRightIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'
import { useState } from 'react'

export default function MyHome() {
  const [selectedTab, setSelectedTab] = useState('transactions-tab')

  const handleTabSelection = (e) => {
    console.log(e.target.id)
    setSelectedTab(e.target.id)
  }

  return (
    <Layout nav={true}>
        <Banner 
          message="Don't have a direct set up? Create one today!" 
          subject='Direct Debits' 
          buttonText='Set up now' 
        />

        <section className='bg-gray-50'>
                <div className="w-full h-full mx-auto">

                    {/* Page Title and Tenancy Dropdown */}
                    <div className="">
                        <div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-6">
                          <div className='flex items-center justify-start'>
                            <Link href='/' className='mr-8 bg-slate-100 p-2 rounded-md hover:bg-slate-900 hover:text-white hover:cursor-pointer'>
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                              </svg>
                            </Link>
                            <h1 className="flex-1 text-xl font-semibold tracking-tight text-slate-800">
                              My Home
                            </h1>
                          </div>
                          <div className='flex justify-between items-center'>
                            <label htmlFor="tenancy" className="block text-sm font-medium text-gray-700 mr-4">
                                Tenancy:
                            </label>
                            <select
                                id="tenancy"
                                name="tenancy"
                                className="mt-1 block w-full rounded-md border pr-8 border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                            >
                                <option>69, Fford Maendy, Sarn, Bridgend</option>
                                <option>1, Santiago Court, Jamaica Circle, Newport</option>
                            </select>
                          </div>
                        </div>
                    </div>

                    {/* Overview */}
                    <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 py-6'>
                        <div className=''>
                          {/* <h3 className='text-lg font-semibold tracking-tight text-slate-800 mb-3'>Overview</h3> */}
                          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
                            <div className="overflow-hidden shadow rounded-md bg-white">
                              <div className="bg-white px-4 py-5 sm:p-6 flex justify-start items-start gap-6">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-slate-700">
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971z" />
                                </svg>
                                <div>
                                  <p className='text-slate-500 text-sm font-semibold'>Contract Balance</p>
                                  <p className='text-pink-500 text-xl font-semibold'>£-810.39</p>
                                  <div className='mt-3'>
                                    <a href='#transactions-tab' className='text-sm text-slate-400 hover:text-slate-500 flex justify-center items-center'><span className='mr-2'>View transactions</span><ArrowLongRightIcon className="mt-1 h-4 w-4" aria-hidden="true" /></a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="overflow-hidden shadow rounded-md bg-white">
                              <div className="bg-white px-4 py-5 sm:p-6 flex justify-start items-start gap-6">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-slate-700">
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                                </svg>
                                <div>
                                  <p className='text-slate-500 text-sm font-semibold'>Total Charges</p>
                                  <p className='text-pink-500 text-xl font-semibold'>£400.24</p>
                                  <div className='mt-3'>
                                    <a href='#charges-tab' className='text-sm text-slate-400 hover:text-slate-500 flex justify-center items-center'><span className='mr-2'>View charges</span><ArrowLongRightIcon className="mt-1 h-4 w-4" aria-hidden="true" /></a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="overflow-hidden shadow rounded-md bg-white">
                              <div className="bg-white px-4 py-5 sm:p-6 flex justify-start items-start gap-6">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-slate-700">
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
                                </svg>
                                <div>
                                  <p className='text-slate-500 text-sm font-semibold'>Next Billing Date</p>
                                  <p className='text-pink-500 text-xl font-semibold'>01/04/2023</p>
                                </div>
                              </div>
                            </div>
                            <Link href='/' className='sm:hover:scale-105 hover:cursor-pointer hover:shadow-xl transition-all'>
                              <div className="relative isolate overflow-hidden bg-slate-800 shadow-md rounded-md py-8">
                                <svg
                                  viewBox="0 0 1024 1024"
                                  className="absolute top-1/2 left-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 "
                                  aria-hidden="true"
                                >
                                  <circle cx={512} cy={512} r={512} fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7" />
                                  <defs>
                                    <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                                      <stop stopColor="#ec4899" />
                                      <stop offset={1} stopColor="#9333ea" />
                                    </radialGradient>
                                  </defs>
                                </svg>
                                <div className="mx-auto max-w-md text-center">
                                  <h2 className="text-2xl font-semibold tracking-tight text-white">
                                    Make a Payment
                                  </h2>
                                  <p className="mt-1 text-sm leading-8 text-gray-300">
                                    Select to make a payment today.
                                  </p>
                                  {/* <div className="mt-2 flex items-center justify-center">
                                  <a
                                    href="#"
                                    className="rounded-md bg-white px-3.5 py-1.5 text-base font-semibold leading-7 text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                                  >
                                    Get started
                                  </a>
                                  </div> */}
                                </div>
                              </div>
                            </Link>
                          </div>
                        </div>
                    </div>

                    {/* Tenancy Info & Compliance */}
                    <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 py-6 flex flex-col lg:flex-row justify-start items-start gap-8'>
                      <div className='w-full lg:w-2/3'>
                          <TenancyInformation />
                      </div>
                      <div className='w-full lg:w-1/3'>
                        <Compliance />
                      </div>
                    </div>

                    {/* Transactions & Charges */}
                    <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 py-6 flex justify-start items-start gap-8'>
                      <div className='w-full'>
                        <div className="overflow-hidden bg-white shadow sm:rounded-md py-3 px-3">
                          <div className="px-4 py-5 sm:px-6 flex flex-col sm:flex-row justify-start items-left sm:justify-between sm:items-center gap-4">
                              <div>
                                <h3 className="text-lg font-medium leading-6 text-gray-900">Transactions & Charges</h3>
                                <p className="mt-1 max-w-2xl text-sm text-gray-500">Details around your transactions and charges.</p>
                              </div>
                              <button type="button" className="text-white bg-pink-500 hover:bg-pink-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2">Make New Payment</button>
                          </div>
                          
                          {/* Tabs */}
                          <div className="mb-4 border-b border-gray-200 dark:border-gray-700">
                              <ul className="flex flex-wrap -mb-px text-sm font-medium text-center" id="myTab" data-tabs-toggle="#myTabContent" role="tablist">
                                  <li className="mr-2" role="presentation">
                                      <button onClick={(e) => handleTabSelection(e)} className={`inline-block p-4 border-b-2 ${(selectedTab == 'transactions-tab') ? 'border-b-pink-500 text-pink-500' : 'hover:text-gray-600 hover:border-gray-300'} rounded-t-lg`} id="transactions-tab" data-tabs-target="#transactions" type="button" role="tab" aria-controls="transactions" aria-selected="false">Transactions</button>
                                  </li>
                                  <li className="mr-2" role="presentation">
                                      <button onClick={(e) => handleTabSelection(e)} className={`inline-block p-4 border-b-2 ${(selectedTab == 'charges-tab') ? 'border-b-pink-500 text-pink-500' : 'hover:text-gray-600 hover:border-gray-300'} rounded-t-lg`} id="charges-tab" data-tabs-target="#charges" type="button" role="tab" aria-controls="charges" aria-selected="false">Charges</button>
                                  </li>
                              </ul>
                          </div>
                          <div id="myTabContent">
                              {selectedTab === 'transactions-tab' && (
                              <div className="p-4" id="transactions" role="tabpanel" aria-labelledby="transactions-tab">
                                <div className="relative overflow-x-auto">
                                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                        <thead className="text-xs text-gray-500 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                            <tr>
                                                <th scope="col" className="px-6 py-3">
                                                    Date
                                                </th>
                                                <th scope="col" className="px-6 py-3">
                                                    Narrative
                                                </th>
                                                <th scope="col" className="px-6 py-3">
                                                    Credit
                                                </th>
                                                <th scope="col" className="px-6 py-3">
                                                    Debit
                                                </th>
                                                <th scope="col" className="px-6 py-3">
                                                    Balance
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className='bg-slate-100 border-b'>
                                              <td colSpan="5" className="px-6 py-4 text-slate-900 font-semibold">Period 13/02/2023 - 19/02/2023</td>
                                            </tr>
                                            <tr className="bg-white border-b">
                                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                  13/02/2023
                                                </th>
                                                <td className="px-6 py-4">
                                                  Weekly Admin 15% 13/02/2023-19/02/2023
                                                </td>
                                                <td className="px-6 py-4">
                                                  £0.00
                                                </td>
                                                <td className="px-6 py-4">
                                                  £-0.09
                                                </td>
                                                <td className="px-6 py-4">
                                                  £-810.39
                                                </td>
                                            </tr>
                                            <tr className="bg-white border-b">
                                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                  13/02/2023
                                                </th>
                                                <td className="px-6 py-4">
                                                  Weekly Admin 15% 13/02/2023-19/02/2023
                                                </td>
                                                <td className="px-6 py-4">
                                                  £0.00
                                                </td>
                                                <td className="px-6 py-4">
                                                  £-0.09
                                                </td>
                                                <td className="px-6 py-4">
                                                  £-810.39
                                                </td>
                                            </tr>
                                            <tr className="bg-white border-b">
                                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                  13/02/2023
                                                </th>
                                                <td className="px-6 py-4">
                                                  Weekly Admin 15% 13/02/2023-19/02/2023
                                                </td>
                                                <td className="px-6 py-4">
                                                  £0.00
                                                </td>
                                                <td className="px-6 py-4">
                                                  £-0.09
                                                </td>
                                                <td className="px-6 py-4">
                                                  £-810.39
                                                </td>
                                            </tr>
                                            <tr className='bg-slate-100 border-b'>
                                              <td colSpan="5" className="px-6 py-4 text-slate-900 font-semibold">Period 13/02/2023 - 19/02/2023</td>
                                            </tr>
                                            <tr className="bg-white border-b">
                                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                  13/02/2023
                                                </th>
                                                <td className="px-6 py-4">
                                                  Weekly Admin 15% 13/02/2023-19/02/2023
                                                </td>
                                                <td className="px-6 py-4">
                                                  £0.00
                                                </td>
                                                <td className="px-6 py-4">
                                                  £-0.09
                                                </td>
                                                <td className="px-6 py-4">
                                                  £-810.39
                                                </td>
                                            </tr>
                                            <tr className="bg-white border-b">
                                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                  13/02/2023
                                                </th>
                                                <td className="px-6 py-4">
                                                  Weekly Admin 15% 13/02/2023-19/02/2023
                                                </td>
                                                <td className="px-6 py-4">
                                                  £0.00
                                                </td>
                                                <td className="px-6 py-4">
                                                  £-0.09
                                                </td>
                                                <td className="px-6 py-4">
                                                  £-810.39
                                                </td>
                                            </tr>
                                            <tr className="bg-white border-b">
                                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                  13/02/2023
                                                </th>
                                                <td className="px-6 py-4">
                                                  Weekly Admin 15% 13/02/2023-19/02/2023
                                                </td>
                                                <td className="px-6 py-4">
                                                  £0.00
                                                </td>
                                                <td className="px-6 py-4">
                                                  £-0.09
                                                </td>
                                                <td className="px-6 py-4">
                                                  £-810.39
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                              </div>
                              )}
                              {selectedTab === 'charges-tab' && (
                              <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="charges" role="tabpanel" aria-labelledby="charges-tab">
                                  <p className="text-sm text-gray-500 dark:text-gray-400">Section for listing charges</p>
                              </div>
                              )}
                          </div>
                      </div>
                      </div>
                    </div>

                </div>
            </section>
    </Layout>
  )
}
