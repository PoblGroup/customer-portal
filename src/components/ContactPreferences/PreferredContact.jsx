import React, { useEffect, useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { UpdateContact } from '../../helpers/functions'
import { useSelector } from 'react-redux'
import { selectUser } from '@/slices/userSice'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const PreferredContact = ({ prefs, options }) => {
    const user = useSelector(selectUser)
    const [isSubmitting, setIsSubmitting] = useState(false)

    const notify = (message) => { toast.success(message, {
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }

    const formik = useFormik({
        initialValues: {
            preferredContact: (prefs.preferredcontactmethodcode != null) ? prefs.preferredcontactmethodcode : ''
        },
        validationSchema: Yup.object({
            preferredContact: Yup.string().required('Please select a preferred contact')
        }),
        onSubmit: async (values) => {
            setIsSubmitting(true)
            const { preferredContact} = values

            const { updated, message, error } = await UpdateContact(user.contactid, { preferredContact })

            if(updated) {
                notify(message)
                setIsSubmitting(false)
            }
        }
    })

    return (
        <>
            <div className="mt-10 sm:mt-0">
                <div className="md:grid md:grid-cols-3 md:gap-6">
                    <div className="md:col-span-1">
                        <div className="px-4 sm:px-0">
                        <h3 className="text-lg font-medium leading-6 text-gray-900">Contact Preferences</h3>
                        <p className="mt-1 text-sm text-gray-600">Here you will find your current chosen contact preferences.</p>
                        </div>
                    </div>
                    <div className="mt-5 md:col-span-2 md:mt-0">
                        <form onSubmit={formik.handleSubmit} autoComplete='off'>
                        <div className="overflow-hidden shadow sm:rounded-md">
                            <div className="bg-white px-4 py-5 sm:p-6">
                            <div className="grid grid-cols-6 gap-6">
                                <div className="col-span-6 sm:col-span-4">
                                    <label htmlFor="preferredContact" className="block text-sm font-medium text-gray-700">
                                        Preferred Method of Contact
                                    </label>
                                    <select
                                        value={formik.values.preferredContact} 
                                        onChange={formik.handleChange} 
                                        onBlur={formik.handleBlur}
                                        id="preferredContact"
                                        name="preferredContact"
                                        className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm  sm:text-sm ${formik.errors.preferredContact ? 'border-red-500 focus:border-red-500 focus:ring-red-500 border-2' : 'focus:border-indigo-500 focus:ring-indigo-500'}`}
                                    >
                                        <option value="" disabled hidden>Select a preferred method</option>
                                        {options && options.preferredMethods.map(option => {
                                            return (
                                                <option key={option.value} value={option.value} label={option.label}></option>
                                            )
                                        })}
                                    </select>
                                    {formik.errors.preferredContact ? <p className='text-red-600 my-1 text-sm font-semibold'>{formik.errors.preferredContact}</p> : null}
                                </div>
                                <div className="col-span-6 sm:col-span-3">
                                    <label htmlFor="email-address1" className="block text-sm font-medium text-gray-700">
                                        Contact Consent Phone
                                    </label>
                                    <p className="mt-1 block w-full py-1 sm:text-sm">
                                        {prefs.pobl_contactpreferencephone}
                                    </p>
                                </div>
                                <div className="col-span-6 sm:col-span-3">
                                    <label htmlFor="email-address1" className="block text-sm font-medium text-gray-700">
                                        Contact Consent SMS
                                    </label>
                                    <p className="mt-1 block w-full py-1 sm:text-sm">
                                    {prefs.pobl_contactpreferencesms}
                                    </p>
                                </div>
                                <div className="col-span-6 sm:col-span-3">
                                    <label htmlFor="email-address1" className="block text-sm font-medium text-gray-700">
                                        Contact Consent Postal
                                    </label>
                                    <p className="mt-1 block w-full py-1 sm:text-sm">
                                        {prefs.pobl_contactpreferencepostal}
                                    </p>
                                </div>
                                <div className="col-span-6 sm:col-span-3">
                                    <label htmlFor="email-address1" className="block text-sm font-medium text-gray-700">
                                        Contact Consent Survey
                                    </label>
                                    <p className="mt-1 block w-full py-1 sm:text-sm">
                                        {prefs.pobl_contactpreferencesurvey}
                                    </p>
                                </div>
                                <div className="col-span-6 sm:col-span-3">
                                    <label htmlFor="email-address1" className="block text-sm font-medium text-gray-700">
                                        Contact Consent Digital
                                    </label>
                                    <p className="mt-1 block w-full py-1 sm:text-sm">
                                        {prefs.pobl_contactpreferenceemail}
                                    </p>
                                </div>
                            </div>
                            </div>
                            <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className={`inline-flex justify-center rounded-md border border-transparent bg-pink-500 ${isSubmitting ? 'bg-slate-300 hover:bg-slate-400 cursor-not-allowed' : null} py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2`}
                            >
                                {isSubmitting ? 'Saving...' : 'Save' }
                            </button>
                            </div>
                        </div>
                        {/* React Toastify */}
                        <ToastContainer
                            position="bottom-center"
                            autoClose={5000}
                            hideProgressBar={false}
                            newestOnTop={true}
                            closeOnClick
                            rtl={false}
                            pauseOnFocusLoss
                            draggable
                            pauseOnHover
                            theme="colored"
                        />
                        </form>
                    </div>
                </div>
            </div>
        </>
        
    )
}

export default PreferredContact
