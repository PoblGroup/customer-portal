import React, { useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import DatePickerField from '../DatePickerField'
import { UpdateContact } from '../../helpers/functions'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const GeneralSection = ({ contactDetails }) => {
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
            title: contactDetails.salutation,
            contactInitial: "R",
            firstname: contactDetails.firstname,
            lastname: contactDetails.lastname,
            dob: contactDetails.pobl_dob
        },
        validationSchema: Yup.object({
            title: Yup.string().required('Please provide a title'),
            contactInitial: Yup.string().required('Please provide a contact initial'),
            dob: Yup.string().required('Please provide your date of birth'),
            firstname: Yup.string().required(),
            lastname: Yup.string().required()
        }),
        onSubmit: async (values) => {
            setIsSubmitting(true)
            const { dob, title, contactInitial } = values
            const { updated, message, error } = await UpdateContact(contactDetails.contactid, { title, dob, contactInitial })

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
                <h3 className="text-lg font-medium leading-6 text-gray-900">General Information</h3>
                <p className="mt-1 text-sm text-gray-600">This information is used to keep our system up to date for our customer records.</p>
                </div>
            </div>
            <div className="mt-5 md:col-span-2 md:mt-0">
                <form onSubmit={formik.handleSubmit} autoComplete='off'>
                    <div className="overflow-hidden shadow sm:rounded-md">
                        <div className="bg-white px-4 py-5 sm:p-6">
                        <div className="grid grid-cols-6 gap-6">
                            <div className="col-span-6 sm:col-span-3">
                                <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                                    Title 
                                </label>
                                <input
                                    value={formik.values.title}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    type="text"
                                    name="title"
                                    id="title"
                                    className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm  sm:text-sm ${formik.errors.title ? 'border-red-500 focus:border-red-500 focus:ring-red-500 border-2' : 'focus:border-indigo-500 focus:ring-indigo-500'}`}
                                />
                                {formik.errors.title ? <p className='text-red-600 my-1 text-sm font-semibold'>{formik.errors.title}</p> : null}
                            </div>
                            <div className="col-span-6 sm:col-span-3">
                                <label htmlFor="contactInitial" className="block text-sm font-medium text-gray-700">
                                    Contact Initial 
                                </label>
                                <input
                                    value={formik.values.contactInitial}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    type="text"
                                    name="contactInitial"
                                    id="contactInitial"
                                    className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm  sm:text-sm ${formik.errors.contactInitial ? 'border-red-500 focus:border-red-500 focus:ring-red-500 border-2' : 'focus:border-indigo-500 focus:ring-indigo-500'}`}
                                />
                                {formik.errors.contactInitial ? <p className='text-red-600 my-1 text-sm font-semibold'>{formik.errors.contactInitial}</p> : null}
                            </div>
                            <div className="col-span-6 sm:col-span-3">
                                <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                                    First name
                                </label>
                                <p className="mt-1 block w-full py-1 sm:text-sm">
                                    {contactDetails.firstname}
                                </p>
                            </div>
                            <div className="col-span-6 sm:col-span-3">
                                <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                                    Last name
                                </label>
                                <p className="mt-1 block w-full py-1 sm:text-sm">
                                    {contactDetails.lastname}
                                </p>
                            </div>
                            <div className="col-span-6 sm:col-span-3">
                                <DatePickerField
                                    label="Date of Birth"
                                    name="dob"
                                    value={formik.values.dob}
                                    onChange={formik.setFieldValue}
                                    error={formik.errors.dob}
                                />
                                {formik.errors.dob ? <p className='text-red-600 my-1 text-sm font-semibold'>{formik.errors.dob}</p> : null}
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

export default GeneralSection
