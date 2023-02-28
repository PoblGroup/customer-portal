import React, { useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { UpdateContact } from '../../helpers/functions'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const PersonalSection = ({ contactDetails, options }) => {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const { pobl_nationalinsurance, gendercode, pobl_sexualorientation, familystatuscode, pobl_ethnicorigin, pobl_economicstatus, pobl_language } = contactDetails

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
            nationalInsurance: pobl_nationalinsurance,
            gender: gendercode,
            sexualOrientation: pobl_sexualorientation,
            maritalStatus: familystatuscode,
            ethnicOrigin: pobl_ethnicorigin,
            employment: pobl_economicstatus,
            language: pobl_language,
        },
        validationSchema: Yup.object({
            nationalInsurance: Yup.string().required('Please provide a national insurance number')
        }),
        onSubmit: async (values) => {
            setIsSubmitting(true)
            const { nationalInsurance, gender, sexualOrientation, maritalStatus, ethnicOrigin, employment, language } = values

            const { updated, message, error } = await UpdateContact(contactDetails.contactid, { 
                nationalInsurance,
                gender,
                sexualOrientation,
                maritalStatus,
                ethnicOrigin,
                employment,
                language
            })

            if(updated) {
                notify(message)
                setIsSubmitting(false)
            }
        }
    })

    return (
        <div className="mt-10 sm:mt-0">
            <div className="md:grid md:grid-cols-3 md:gap-6">
            <div className="md:col-span-1">
                <div className="px-4 sm:px-0">
                <h3 className="text-lg font-medium leading-6 text-gray-900">Personal Information</h3>
                <p className="mt-1 text-sm text-gray-600">Most of this information is optional, apart from the National Insurane number which we need for security checks.</p>
                </div>
            </div>
            <div className="mt-5 md:col-span-2 md:mt-0">
                <form onSubmit={formik.handleSubmit} autoComplete='off'>
                <div className="overflow-hidden shadow sm:rounded-md">
                    <div className="bg-white px-4 py-5 sm:p-6">
                    <div className="grid grid-cols-6 gap-6">
                        <div className="col-span-6 sm:col-span-4">
                            <label htmlFor="nationalInsurance" className="block text-sm font-medium text-gray-700">
                                National Insurance
                            </label>
                            <input
                                value={formik.values.nationalInsurance}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                type="text"
                                name="nationalInsurance"
                                id="nationalInsurance"
                                className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm  sm:text-sm ${formik.errors.nationalInsurance ? 'border-red-500 focus:border-red-500 focus:ring-red-500 border-2' : 'focus:border-indigo-500 focus:ring-indigo-500'}`}
                            />
                            {formik.errors.nationalInsurance ? <p className='text-red-600 my-1 text-sm font-semibold'>{formik.errors.nationalInsurance}</p> : null}
                        </div>
                        <div className="col-span-6 sm:col-span-3">
                            <label htmlFor="gender" className="block text-sm font-medium text-gray-700">
                                Gender
                            </label>
                            <select
                                value={formik.values.gender}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                id="gender"
                                name="gender"
                                className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                            >
                                {options && options.gender.map(option => {
                                    return (
                                        <option key={option.value} value={option.value} label={option.label}></option>
                                    )
                                })}
                            </select>
                        </div>
                        <div className="col-span-6 sm:col-span-3">
                            <label htmlFor="sexualOrientation" className="block text-sm font-medium text-gray-700">
                                Sexual Orientation
                            </label>
                            <select
                                value={formik.values.sexualOrientation}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                id="sexualOrientation"
                                name="sexualOrientation"
                                className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                            >
                                {options && options.sexualOrientation.map(option => {
                                    return (
                                        <option key={option.value} value={option.value} label={option.label}></option>
                                    )
                                })}
                            </select>
                        </div>
                        <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="maritalStatus" className="block text-sm font-medium text-gray-700">
                                Maritial Status
                            </label>
                            <select
                                value={formik.values.maritalStatus}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                id="maritalStatus"
                                name="maritalStatus"
                                className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                            >
                                {options && options.martialStatus.map(option => {
                                    return (
                                        <option key={option.value} value={option.value} label={option.label}></option>
                                    )
                                })}
                            </select>
                        </div>
                        <div className="col-span-6 sm:col-span-3">
                            <label htmlFor="ethnicOrigin" className="block text-sm font-medium text-gray-700">
                                Ethnic Origin
                            </label>
                            <select
                                value={formik.values.ethnicOrigin}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                id="ethnicOrigin"
                                name="ethnicOrigin"
                                className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                            >
                                {options && options.ethnicOrigin.map(option => {
                                    return (
                                        <option key={option.value} value={option.value} label={option.label}></option>
                                    )
                                })}
                            </select>
                        </div>
                        <div className="col-span-6 sm:col-span-3">
                            <label htmlFor="employment" className="block text-sm font-medium text-gray-700">
                                Employment
                            </label>
                            <select
                                value={formik.values.employment}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                id="employment"
                                name="employment"
                                className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                            >
                                {options && options.employement.map(option => {
                                    return (
                                        <option key={option.value} value={option.value} label={option.label}></option>
                                    )
                                })}
                            </select>
                        </div>
                        <div className="col-span-6 sm:col-span-3">
                            <label htmlFor="language" className="block text-sm font-medium text-gray-700">
                                Language
                            </label>
                            <select
                                value={formik.values.language}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                id="language"
                                name="language"
                                className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                            >
                                {options && options.language.map(option => {
                                    return (
                                        <option key={option.value} value={option.value} label={option.label}></option>
                                    )
                                })}
                            </select>
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
    )
}

export default PersonalSection
