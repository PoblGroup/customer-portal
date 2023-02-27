import { selectOccupancy } from '@/slices/occupancySlice'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

const Transactions = () => {
    const { occupancy } = useSelector(selectOccupancy)
    const [transactions, setTransactions] = useState([])

    useEffect(() => {
        const fetchTransactions = async () => {
            var requestOptions = {
                method: 'GET',
                redirect: 'follow'
              };
              
              const response = await fetch(`http://localhost:5000/api/occupancies/e13a7d07-9d23-ed11-9db2-0022481b8794/transactions`, requestOptions)
              const result = await response.json()
              return result
        }
        fetchTransactions().then(transactions => {
            setTransactions(transactions)
        })
    }, [])

    const outerArray = [
        { id: '1st', innerArray: [ 'this', 'that' ]},
        { id: '2nd', innerArray: [ 'some', 'what' ]},
      ]
    

    return (
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
                        {
                            (() => {
                                let container = [];
                                transactions.forEach((val, index) => {
                                    container.push(
                                        <tr key={index} className='bg-slate-100 border-b'>
                                            <td colSpan="5" className="px-6 py-4 text-slate-900 font-semibold">{val.period}</td>
                                        </tr>
                                    )
                                    if(val.transactions.length > 0) {
                                        val.transactions.map((t) => {
                                            container.push(
                                                <tr key={t.transactionId} className="bg-white border-b">
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
                                            )
                                        })
                                    }
                                });
                                return container;
                            })()
                        }
                        {/* <tr className='bg-slate-100 border-b'>
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
                        </tr> */}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Transactions
