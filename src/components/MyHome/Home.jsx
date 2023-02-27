import { selectUser } from '@/slices/userSice'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Loader from '../Loader'
import OccupancyContract from './OccupancyContract'

const Home = () => {
    const user = useSelector(selectUser)
    const [isLoading, setIsLoading] = useState(false)
    const [tenancies, setTenancies] = useState(null)
    const [selectedOccupancy, setSelectedOccupancy] = useState(null)

    const handleOccupancyChange = (e) => {
        setSelectedOccupancy(e.target.value)
    }

    useEffect(() => {
        const fetchOccupancyContracts = async () => {
            var requestOptions = {
                method: 'GET',
                redirect: 'follow'
              };
              
              const response = await fetch(`http://localhost:5000/api/occupancies?id=${user.accountid}`, requestOptions)
              const result = await response.json()
              return result
        }
        fetchOccupancyContracts().then(tenancies => {
            setTenancies(tenancies)
            setSelectedOccupancy(tenancies[0].pobl_occupancycontractid)
        })
    }, [])

    return (
        <>
            {isLoading ? (
                <Loader isLoading={isLoading} />
            ) : (
                <>
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
                                onChange={(e) => handleOccupancyChange(e)}
                                id="tenancy"
                                name="tenancy"
                                className="mt-1 block w-full rounded-md border pr-8 border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                            >
                                {tenancies && tenancies.map(option => {
                                    return (
                                        <option key={option.pobl_occupancycontractid} value={option.pobl_occupancycontractid} label={option['prop.pobl_addressconcat']}></option>
                                    )
                                })}
                            </select>
                            </div>
                        </div>
                    </div>
                    {selectedOccupancy && <OccupancyContract occ={selectedOccupancy} />}
                </>
            )}

            
        </>
    )
}

export default Home
