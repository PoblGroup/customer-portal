import React, { useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { UpdateContact } from '../../helpers/functions'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const ContactsSection = ({ contactDetails, options }) => {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const { emailaddress1, emailaddress2, address1_telephone1, address1_telephone2, pobl_email1type, pobl_email2type, pobl_telephone1type, pobl_telephone2type } = contactDetails

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
            emailAddress1: (emailaddress1 != null) ? emailaddress1 : "",
            emailAddress2: (emailaddress2 != null) ? emailaddress2 : "",
            emailType1: (pobl_email1type != null) ? pobl_email1type.toString() : "",
            emailType2: (pobl_email2type != null) ? pobl_email2type.toString() : "",
            telephone1: (address1_telephone1 != null) ? address1_telephone1 : "",
            telephone2: (address1_telephone2 != null) ? address1_telephone2 : "",
            telType1: (pobl_telephone1type != null) ? pobl_telephone1type.toString() : "",
            telType2: (pobl_telephone2type != null) ? pobl_telephone2type.toString() : ""
        },
        validationSchema: Yup.object({
            emailAddress1: Yup.string().required('Please provide an email address'),
            emailAddress2: Yup.string(),
            emailType1: Yup.string().required('Please provide an email type'),
            emailType2: Yup.string(),
            telephone1: Yup.string().required('Please provide a telehone number'),
            telephone2: Yup.string(),
            telType1: Yup.string().required('Please provide a telephone type'),
            telType2: Yup.string()
        }),
        onSubmit: async (values) => {
            setIsSubmitting(true)
            const { emailAddress1, emailAddress2, emailType1, emailType2, telephone1, telephone2, telType1, telType2 } = values

            const { updated, message, error } = await UpdateContact(contactDetails.contactid, { 
                emailAddress1, 
                emailAddress2, 
                emailType1, 
                emailType2, 
                telephone1, 
                telephone2, 
                telType1, 
                telType2 
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
                <h3 className="text-lg font-medium leading-6 text-gray-900">Contact Details</h3>
                <p className="mt-1 text-sm text-gray-600">These details help us to ensure that we can get in touch with you, should we need to.</p>
                </div>
            </div>
            <div className="mt-5 md:col-span-2 md:mt-0">
                <form onSubmit={formik.handleSubmit} autoComplete='off'>
                <div className="overflow-hidden shadow sm:rounded-md">
                    <div className="bg-white px-4 py-5 sm:p-6">
                    <div className="grid grid-cols-6 gap-6">
                        <div className="col-span-6 sm:col-span-3">
                            <label htmlFor="emailAddress1" className="block text-sm font-medium text-gray-700">
                                Email address 1
                            </label>
                            <input
                                value={formik.values.emailAddress1}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                type="email"
                                name="emailAddress1"
                                id="emailAddress1"
                                className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm  sm:text-sm ${formik.errors.emailAddress1 ? 'border-red-500 focus:border-red-500 focus:ring-red-500 border-2' : 'focus:border-indigo-500 focus:ring-indigo-500'}`}
                            />
                            {formik.errors.emailAddress1 ? <p className='text-red-600 my-1 text-sm font-semibold'>{formik.errors.emailAddress1}</p> : null}
                        </div>
                        <div className="col-span-6 sm:col-span-3">
                            <label htmlFor="emailType1" className="block text-sm font-medium text-gray-700">
                                Email Type 1
                            </label>
                            <select
                                value={formik.values.emailType1} 
                                onChange={formik.handleChange} 
                                onBlur={formik.handleBlur}
                                id="emailType1"
                                name="emailType1"
                                className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm  sm:text-sm ${formik.errors.emailType1 ? 'border-red-500 focus:border-red-500 focus:ring-red-500 border-2' : 'focus:border-indigo-500 focus:ring-indigo-500'}`}
                            >
                                {options && options.emailTypes.map(option => {
                                    return (
                                        <option key={option.value} value={option.value} label={option.label}></option>
                                    )
                                })}
                            </select>
                            {formik.errors.emailType1 ? <p className='text-red-600 my-1 text-sm font-semibold'>{formik.errors.emailType1}</p> : null}
                        </div>
                        <div className="col-span-6 sm:col-span-3">
                            <label htmlFor="emailAddress2" className="block text-sm font-medium text-gray-700">
                                Email address 2
                            </label>
                            <input
                                value={formik.values.emailAddress2}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                type="email"
                                name="emailAddress2"
                                id="emailAddress2"
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            />
                            {formik.errors.emailAddress2 ? <p className='text-red-600 my-1 text-sm font-semibold'>{formik.errors.emailAddress2}</p> : null}
                        </div>
                        <div className="col-span-6 sm:col-span-3">
                            <label htmlFor="emailType2" className="block text-sm font-medium text-gray-700">
                                Email Type 2
                            </label>
                            <select
                                value={formik.values.emailType2} 
                                onChange={formik.handleChange} 
                                onBlur={formik.handleBlur}
                                id="emailType2"
                                name="emailType2"
                                className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                            >
                                {options && options.emailTypes.map(option => {
                                    return (
                                        <option key={option.value} value={option.value} label={option.label}></option>
                                    )
                                })}
                            </select>
                            {formik.errors.emailType2 ? <p className='text-red-600 my-1 text-sm font-semibold'>{formik.errors.emailType2}</p> : null}
                        </div>
                        <div className="col-span-6 sm:col-span-3">
                            <label htmlFor="telephone1" className="block text-sm font-medium text-gray-700">
                                Telephone 1
                            </label>
                            <input
                                value={(formik.values.telephone1 != null) ? formik.values.telephone1 : ""}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                type="text"
                                name="telephone1"
                                id="telephone1"
                                className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm  sm:text-sm ${formik.errors.telephone1 ? 'border-red-500 focus:border-red-500 focus:ring-red-500 border-2' : 'focus:border-indigo-500 focus:ring-indigo-500'}`}
                            />
                            {formik.errors.telephone1 ? <p className='text-red-600 my-1 text-sm font-semibold'>{formik.errors.telephone1}</p> : null}
                        </div>
                        <div className="col-span-6 sm:col-span-3">
                            <label htmlFor="telType1" className="block text-sm font-medium text-gray-700">
                                Telephone Type 1
                            </label>
                            <select
                                value={(formik.values.telType1 != null) ? formik.values.telType1 : ""}
                                onChange={formik.handleChange} 
                                onBlur={formik.handleBlur}
                                id="telType1"
                                name="telType1"
                                className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm  sm:text-sm ${formik.errors.telType1 ? 'border-red-500 focus:border-red-500 focus:ring-red-500 border-2' : 'focus:border-indigo-500 focus:ring-indigo-500'}`}
                            >
                                {options && options.telTypes.map(option => {
                                    return (
                                        <option key={option.value} value={option.value} label={option.label}></option>
                                    )
                                })}
                            </select>
                            {formik.errors.telType1 ? <p className='text-red-600 my-1 text-sm font-semibold'>{formik.errors.telType1}</p> : null}
                        </div>
                        <div className="col-span-6 sm:col-span-3">
                            <label htmlFor="telephone2" className="block text-sm font-medium text-gray-700">
                                Telephone 2
                            </label>
                            <input
                                value={(formik.values.telephone2 != null) ? formik.values.telephone2 : ""}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                type="text"
                                name="telephone2"
                                id="telephone2"
                                className="m-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            />
                            {formik.errors.telephone2 ? <p className='text-red-600 my-1 text-sm font-semibold'>{formik.errors.telephone2}</p> : null}
                        </div>
                        <div className="col-span-6 sm:col-span-3">
                            <label htmlFor="telType2" className="block text-sm font-medium text-gray-700">
                                Telephone Type 2
                            </label>
                            <select
                                value={(formik.values.telType2 != null) ? formik.values.telType2 : ""}
                                onChange={formik.handleChange} 
                                onBlur={formik.handleBlur}
                                id="telType2"
                                name="telType2"
                                className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                            >
                                {options && options.telTypes.map(option => {
                                    return (
                                        <option key={option.value} value={option.value} label={option.label}></option>
                                    )
                                })}
                            </select>
                            {formik.errors.telType2 ? <p className='text-red-600 my-1 text-sm font-semibold'>{formik.errors.telType2}</p> : null}
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

export default ContactsSection
