import { PaperClipIcon } from '@heroicons/react/24/outline'
import React from 'react'
import Moment from 'react-moment'

const TenancyInformation = ({ occupancyDetails }) => {
    const { 
        pobl_occupancycontractreference, 
        pobl_occupantcontractstartdate, 
        pobl_occupantcontractenddate,
        responsible,
        additional,
        pobl_occupancycontracttype
    } = occupancyDetails

    return (
        <>
            {/* <h3 className='text-lg font-semibold tracking-tight text-slate-800 mb-3'></h3> */}
            <div className="overflow-hidden bg-white shadow sm:rounded-md">
                <div className="px-4 py-5 sm:px-6">
                    <h3 className="text-lg font-medium leading-6 text-gray-900">Occupancy Contract</h3>
                    <p className="mt-1 max-w-2xl text-sm text-gray-500">Detail around your contract with us.</p>
                </div>
                <div className="">
                    <dl>
                        <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">Reference</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{pobl_occupancycontractreference}</dd>
                        </div>
                        <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">Start Date</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                                <Moment format="DD/MM/YYYY">
                                    {pobl_occupantcontractstartdate}
                                </Moment>
                            </dd>
                        </div>
                        <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">End Date</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                            {pobl_occupantcontractenddate ? (
                                <Moment format="DD/MM/YYYY">
                                    {pobl_occupantcontractenddate}
                                </Moment>
                            ) : (
                                <span>-</span>
                            )}
                            </dd>
                        </div>
                        <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">Contract Type:</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                             {pobl_occupancycontracttype}
                            </dd>
                        </div>
                        <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">Responsible Occupants</dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                            <ul>
                                {responsible.length > 0 && responsible.map((occupant, index) => (
                                    <li key={index}>{occupant.fullname}</li>
                                ))}
                            </ul>
                        </dd>
                        </div>
                        <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">Additional Occupants</dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                            <ul>
                                {additional.length > 0 && additional.map((occupant, index) => (
                                    <li key={index}>{occupant.fullname}</li>
                                ))}
                            </ul>
                        </dd>
                        </div>
                        <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">Full Address</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{occupancyDetails['property.pobl_addressconcat']}</dd>
                        </div>
                        <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">Accomodation Type</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{occupancyDetails['property.pobl_accommodationtype']}</dd>
                        </div>
                        <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">Attachments</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                            <ul role="list" className="divide-y divide-gray-200 rounded-md border border-gray-200">
                                <li className="flex items-center justify-between py-3 pl-3 pr-4 text-sm">
                                    <div className="flex w-0 flex-1 items-center">
                                        <PaperClipIcon className="h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                                        <span className="ml-2 w-0 flex-1 truncate">occupancy_contract.pdf</span>
                                    </div>
                                    <div className="ml-4 flex-shrink-0">
                                        <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                                        Download
                                        </a>
                                    </div>
                                </li>
                            </ul>
                            </dd>
                        </div>
                    </dl>
                </div>
            </div>
        </>
    )
}

export default TenancyInformation
