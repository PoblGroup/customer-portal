import React from 'react'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";

const DatePickerField = ({label, name, value, onChange, error}) => {
  return (
      <>
        <label>{label}</label>
        <DatePicker 
            className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm  sm:text-sm ${error ? 'border-red-500 focus:border-red-500 focus:ring-red-500 border-2' : 'focus:border-indigo-500 focus:ring-indigo-500'}`}
            dateFormat="dd/MM/yyyy"
            selected={( (value && new Date(value)) || null )}
            onChange={val => onChange(name, val)}
            // showTimeSelect
            // timeFormat="HH:mm"
            // timeIntervals={15}
        />
    </>
  )
}

export default DatePickerField