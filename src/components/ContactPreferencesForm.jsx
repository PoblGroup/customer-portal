import { selectUser } from '@/slices/userSice'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import NewContactPreference from './ContactPreferences/NewContactPreference'
import PreferredContact from './ContactPreferences/PreferredContact'

const ContactDetailsForm = () => {
    const user = useSelector(selectUser)
    const [contactPreferences, setContactPreferences] = useState(null)
    const [preferenceLookups, setPreferenceLookups] = useState(null)

    useEffect(() => {
        const fetchContactPreferences = async () => {
            var requestOptions = {
                method: 'GET',
                redirect: 'follow'
              };
              
              const response = await fetch(`http://localhost:5000/api/contacts/preferences/${user.contactid}`, requestOptions)
              const result = await response.json()
              return result
        }
        fetchContactPreferences().then(cp => {
            if(cp) {
                setContactPreferences(cp)
            }
        })
        const fetchPreferenceLookups = async () => {
            var requestOptions = {
                method: 'GET',
                redirect: 'follow'
              };
              
              const response = await fetch(`http://localhost:5000/api/contacts/preferences/lookups`, requestOptions)
              const result = await response.json()
              return result
        }
        fetchPreferenceLookups().then(lookups => {
            setPreferenceLookups(lookups)
        })
    }, [])
    
    return (
        <>
            {contactPreferences && (
                <>
                <PreferredContact prefs={contactPreferences} options={preferenceLookups} />
                <div className="hidden sm:block" aria-hidden="true">
                    <div className="py-5">
                    <div className="border-t border-gray-200" />
                    </div>
                </div>
                <NewContactPreference options={preferenceLookups} />
                </>
            )}
        </>
      )
}

export default ContactDetailsForm

