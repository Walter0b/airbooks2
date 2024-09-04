import GlobalLoader from '@/components/loader/global-loader'
import React from 'react'

function Loader() {
    return (
        <div className='flex-grow h-full w-10/12 !bg-white'><GlobalLoader /></div>
    )
}

export default Loader