import React, { useState } from 'react'
import { Field, FormikProvider, useFormik } from 'formik'
import * as Yup from 'yup'
import CustomSelect from './CustomSelect'
import DatePickerField from '../DatePickerField'
import { NewContactPreferenceRequest } from '../../helpers/functions'
import { useSelector } from 'react-redux'
import { selectUser } from '@/slices/userSice'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const NewContactPreference = ({ options }) => {
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
            channels: [],
            effectiveDate: new Date(),
            preference: ''
        },
        validationSchema: Yup.object({
            preference: Yup.string().required('Please provide a preference'),
            channels: Yup.array().min(1, 'You must select atleast one'),
            effectiveDate: Yup.date().required('Please provide a date')
        }),
        onSubmit: async (values) => {
            setIsSubmitting(true)
            const { channels, effectiveDate, preference } = values

            const { data, message, error } = await NewContactPreferenceRequest(user.contactid, { channels, effectiveDate, preference })

            if(data) {
                notify(message)
                setIsSubmitting(false)
                formik.values.channels = []
                formik.values.effectiveDate = new Date()
                formik.values.preference = ''
            }
        }
    })

    return (
        <div className="mt-10 sm:mt-0">
            <div className="md:grid md:grid-cols-3 md:gap-6">
                <div className="md:col-span-1">
                    <div className="px-4 sm:px-0">
                    <h3 className="text-lg font-medium leading-6 text-gray-900">New Contact Preferences</h3>
                    <p className="mt-1 text-sm text-gray-600">Create a new contact preferences to update your consent.</p>
                    <p className="mt-3 text-xs italic text-gray-400">Please note you will need to refresh the page after successfully adding a preference to see changes in the section above.</p>
                    </div>
                </div>
                <div className="mt-5 md:col-span-2 md:mt-0">
                    <form onSubmit={formik.handleSubmit} autoComplete='off'>
                    <div className="overflow-hidden shadow sm:rounded-md">
                        <div className="bg-white px-4 py-5 sm:p-6">
                        <div className="grid grid-cols-6 gap-6">
                            <div className="col-span-6 sm:col-span-4">
                                <FormikProvider value={formik}>
                                    <Field
                                        className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm  sm:text-sm ${formik.errors.channels && formik.touched.channels ? 'border-red-500 focus:border-red-500 focus:ring-red-500 border-2' : 'focus:border-indigo-500 focus:ring-indigo-500'}`}
                                        name="channels"
                                        options={options.channels}
                                        component={CustomSelect}
                                        placeholder="Select multi channels..."
                                        isMulti={true}
                                    />
                                </FormikProvider>
                                {formik.errors.channels && formik.touched.channels ? <p className='text-red-600 my-1 text-sm font-semibold'>{formik.errors.channels}</p> : null}
                            </div>
                            <div className="col-span-6 sm:col-span-4">
                                <label htmlFor="preference" className="block text-sm font-medium text-gray-700">
                                    Preference
                                </label>
                                <select
                                    value={formik.values.preference} 
                                    onChange={formik.handleChange} 
                                    onBlur={formik.handleBlur}
                                    id="preference"
                                    name="preference"
                                    className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm  sm:text-sm ${formik.touched.preference && formik.errors.preference ? 'border-red-500 focus:border-red-500 focus:ring-red-500 border-2' : 'focus:border-indigo-500 focus:ring-indigo-500'}`}
                                >
                                    <option value="" disabled hidden>Select a preference</option>
                                    {options && options.preferences.map(option => {
                                        return (
                                            <option key={option.value} value={option.value} label={option.label}></option>
                                        )
                                    })}
                                </select>
                                {formik.touched.preference && formik.errors.preference ? <p className='text-red-600 my-1 text-sm font-semibold'>{formik.errors.preference}</p> : null}
                            </div>
                            <div className="col-span-6 sm:col-span-3">
                                {/* <label htmlFor="effectiveDate" className="block text-sm font-medium text-gray-700">
                                    Effective Date
                                </label>
                                <input
                                    type="date"
                                    name="effectiveDate"
                                    id="effectiveDate"
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                /> */}
                                <DatePickerField
                                    label="Effective Date"
                                    name="effectiveDate"
                                    value={formik.values.effectiveDate}
                                    onChange={formik.setFieldValue}
                                    error={formik.errors.effectiveDate && formik.touched.effectiveDate}
                                />
                                {formik.errors.effectiveDate && formik.touched.effectiveDate ? <p className='text-red-600 my-1 text-sm font-semibold'>{formik.errors.effectiveDate}</p> : null}
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

export default NewContactPreference
