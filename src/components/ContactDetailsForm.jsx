import { selectUser } from '@/slices/userSice'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import SyncLoader from "react-spinners/SyncLoader";
import ContactsSection from './ContactDetails/Contacts'
import GeneralSection from './ContactDetails/General'
import PersonalSection from './ContactDetails/Personal'
import Loader from './Loader';

const ContactDetailsForm = () => {
    const user = useSelector(selectUser)
    const [contactDetails, setContactDetails] = useState(null)
    const [contactOptions, setContactOptions] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const fetchUserDetails = async () => {
            var requestOptions = {
                method: 'GET',
                redirect: 'follow'
              };
              
              const response = await fetch(`http://localhost:5000/api/contacts/${user.contactid}`, requestOptions)
              const result = await response.json()
              return result
        }

        const fetchContactLookups = async () => {
            var requestOptions = {
                method: 'GET',
                redirect: 'follow'
              };
              
              const response = await fetch(`http://localhost:5000/api/contacts/lookups`, requestOptions)
              const result = await response.json()
              return result
        }

        fetchUserDetails().then(d => {
            if(d) {
                setContactDetails(d)
                setIsLoading(false)
            }
        })

        fetchContactLookups().then(options => {
            if(options) {
                setContactOptions(options)
            }
        })
        
    }, [])

    return (
        <>
            {isLoading ? (
                <Loader isLoading={isLoading} />
            ) : (
                <>
                    {/* <div id="alert-3" class="flex p-4 mb-8 text-emerald-900 rounded-lg bg-emerald-300 dark:bg-gray-800 dark:text-green-400" role="alert">
                        <svg aria-hidden="true" class="flex-shrink-0 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
                        <span class="sr-only">Info</span>
                        <div class="ml-3 text-sm font-medium">
                            A simple info alert with an <a href="#" class="font-semibold underline hover:no-underline">example link</a>. Give it a click if you like.
                        </div>
                        <button type="button" class="ml-auto -mx-1.5 -my-1.5 bg-emerald-300 text-emerald-900 rounded-lg focus:ring-2 focus:ring-green-400 p-1.5 hover:bg-green-200 inline-flex h-8 w-8 dark:bg-gray-800 dark:text-green-400 dark:hover:bg-gray-700" data-dismiss-target="#alert-3" aria-label="Close">
                            <span class="sr-only">Close</span>
                            <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        </button>
                    </div> */}

                    {/* General */}
                    <GeneralSection contactDetails={contactDetails} />
                
                    <div className="hidden sm:block" aria-hidden="true">
                        <div className="py-5">
                        <div className="border-t border-gray-200" />
                        </div>
                    </div>

                    {/* Contact Details */}
                    <ContactsSection contactDetails={contactDetails} options={contactOptions} />

                    <div className="hidden sm:block" aria-hidden="true">
                        <div className="py-5">
                        <div className="border-t border-gray-200" />
                        </div>
                    </div>

                    {/* Personal Details */}
                    <PersonalSection contactDetails={contactDetails} options={contactOptions} /> 

                    <div className='flex justify-end items-center py-6 pr-4'>
                        <button type="submit" className="inline-flex justify-center rounded-md border border-transparent bg-slate-900 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                            Save all sections
                        </button>
                    </div>

                </>
            )}
        </>
      )
}

export default ContactDetailsForm

