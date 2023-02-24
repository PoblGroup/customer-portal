import React from 'react'

const ContactDetailsForm = () => {
    return (
        <>
            {/* Contact Preferences - Preferred */}
            <div className="mt-10 sm:mt-0">
                <div className="md:grid md:grid-cols-3 md:gap-6">
                    <div className="md:col-span-1">
                        <div className="px-4 sm:px-0">
                        <h3 className="text-lg font-medium leading-6 text-gray-900">Contact Preferences</h3>
                        <p className="mt-1 text-sm text-gray-600">Here you will find your current chosen contact preferences.</p>
                        </div>
                    </div>
                    <div className="mt-5 md:col-span-2 md:mt-0">
                        <form action="#" method="POST">
                        <div className="overflow-hidden shadow sm:rounded-md">
                            <div className="bg-white px-4 py-5 sm:p-6">
                            <div className="grid grid-cols-6 gap-6">
                                <div className="col-span-6 sm:col-span-4">
                                    <label htmlFor="preferredMethod" className="block text-sm font-medium text-gray-700">
                                        Preferred Method of Contact
                                    </label>
                                    <select
                                        id="preferredMethod"
                                        name="preferredMethod"
                                        className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                    >
                                        <option>Phone</option>
                                        <option>SMS</option>
                                        <option>Digital</option>
                                        <option>Postal</option>
                                        <option>Survey</option>
                                    </select>
                                </div>
                                <div className="col-span-6 sm:col-span-3">
                                    <label htmlFor="email-address1" className="block text-sm font-medium text-gray-700">
                                        Contact Consent Phone
                                    </label>
                                    <p className="mt-1 block w-full py-1 sm:text-sm">
                                        Not Known
                                    </p>
                                </div>
                                <div className="col-span-6 sm:col-span-3">
                                    <label htmlFor="email-address1" className="block text-sm font-medium text-gray-700">
                                        Contact Consent SMS
                                    </label>
                                    <p className="mt-1 block w-full py-1 sm:text-sm">
                                        Opt Out
                                    </p>
                                </div>
                                <div className="col-span-6 sm:col-span-3">
                                    <label htmlFor="email-address1" className="block text-sm font-medium text-gray-700">
                                        Contact Consent Postal
                                    </label>
                                    <p className="mt-1 block w-full py-1 sm:text-sm">
                                        Opt In
                                    </p>
                                </div>
                                <div className="col-span-6 sm:col-span-3">
                                    <label htmlFor="email-address1" className="block text-sm font-medium text-gray-700">
                                        Contact Consent Survey
                                    </label>
                                    <p className="mt-1 block w-full py-1 sm:text-sm">
                                        Opt Known
                                    </p>
                                </div>
                                <div className="col-span-6 sm:col-span-3">
                                    <label htmlFor="email-address1" className="block text-sm font-medium text-gray-700">
                                        Contact Consent Digital
                                    </label>
                                    <p className="mt-1 block w-full py-1 sm:text-sm">
                                        Opt In
                                    </p>
                                </div>
                            </div>
                            </div>
                            <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                            <button
                                type="submit"
                                className="inline-flex justify-center rounded-md border border-transparent bg-pink-500 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                            >
                                Save
                            </button>
                            </div>
                        </div>
                        </form>
                    </div>
                </div>
            </div>
        
            <div className="hidden sm:block" aria-hidden="true">
                <div className="py-5">
                <div className="border-t border-gray-200" />
                </div>
            </div>

            {/* New Contact Preference */}
            <div className="mt-10 sm:mt-0">
                <div className="md:grid md:grid-cols-3 md:gap-6">
                    <div className="md:col-span-1">
                        <div className="px-4 sm:px-0">
                        <h3 className="text-lg font-medium leading-6 text-gray-900">New Contact Preferences</h3>
                        <p className="mt-1 text-sm text-gray-600">Create a new contact preferences to update your consent.</p>
                        </div>
                    </div>
                    <div className="mt-5 md:col-span-2 md:mt-0">
                        <form action="#" method="POST">
                        <div className="overflow-hidden shadow sm:rounded-md">
                            <div className="bg-white px-4 py-5 sm:p-6">
                            <div className="grid grid-cols-6 gap-6">
                                <div className="col-span-6 sm:col-span-4">
                                    <label htmlFor="channel" className="block text-sm font-medium text-gray-700">
                                        Channel
                                    </label>
                                    <select
                                        id="channel"
                                        name="channel"
                                        className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                    >
                                        <option>Select All</option>
                                        <option>Phone</option>
                                        <option>SMS</option>
                                        <option>Digital</option>
                                        <option>Survey</option>
                                    </select>
                                </div>
                                <div className="col-span-6 sm:col-span-4">
                                    <label htmlFor="preference" className="block text-sm font-medium text-gray-700">
                                        Preference
                                    </label>
                                    <select
                                        id="preference"
                                        name="preference"
                                        className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                    >
                                        <option>Not Known</option>
                                        <option>Opt In</option>
                                        <option>Opt Out</option>
                                    </select>
                                </div>
                                <div className="col-span-6 sm:col-span-3">
                                    <label htmlFor="effectiveDate" className="block text-sm font-medium text-gray-700">
                                        Effective Date
                                    </label>
                                    <input
                                        type="date"
                                        name="effectiveDate"
                                        id="effectiveDate"
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                    />
                                </div>
                            </div>
                            </div>
                            <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                            <button
                                type="submit"
                                className="inline-flex justify-center rounded-md border border-transparent bg-pink-500 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                            >
                                Save
                            </button>
                            </div>
                        </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
      )
}

export default ContactDetailsForm

