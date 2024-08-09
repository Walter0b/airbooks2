import GlobalLoader from '@/components/loader/global-loader'
import React from 'react'

function Loader() {
    return (
        <div className='h-screen w-screen !bg-white'><GlobalLoader /></div>
    )
}

export default Loader