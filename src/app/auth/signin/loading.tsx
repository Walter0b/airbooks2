import GlobalLoader from '@/components/loader/global-loader'
import React from 'react'

function Loader() {
    return (
        <div className='size-screen bg-white absolute'><GlobalLoader /></div>
    )
}


export default Loader