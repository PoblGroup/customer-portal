import React, { useState } from 'react'
import { SyncLoader } from 'react-spinners'

const Loader = ({ isLoading }) => {
    const [color, setColor] = useState("#ec4899");
    return (
        <div className='h-screen flex justify-center items-start'>
            <div className='flex flex-col'>
                <SyncLoader
                    color={color}
                    loading={isLoading}
                    // cssOverride='text-red-500'
                    // size={50}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                />
            </div>
        </div>
    )
}

export default Loader
