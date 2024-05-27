'user client'
import { useState } from 'react'

function useSingleState(initialValue: any) {
    const [value, setValue] = useState(initialValue)

    return {
        value,
        setValue,
    }
}

export default useSingleState
