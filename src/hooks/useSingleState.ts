'use client'
import { useState } from 'react'
   /* eslint-disable-next-line "@typescript-eslint/no-explicit-any" */
function useSingleState(initialValue: any) {
    const [value, setValue] = useState(initialValue)

    return {
        value,
        setValue,
    }
}

export default useSingleState
