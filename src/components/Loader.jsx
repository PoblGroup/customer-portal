import React, { useState } from 'react'
import { SyncLoader } from 'react-spinners'

const Loader = ({ isLoading, color = '#ec4899' }) => {
    // const [color, setColor] = useState("#ec4899");
    return (
        <div className='h-screen flex justify-center items-start py-6'>
            <div className='flex flex-col'>
                <SyncLoader
                    color={color}
                    loading={isLoading}
                    // cssOverride='text-red-500'
                    size={10}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                />
            </div>
        </div>
    )
}

export default Loader
