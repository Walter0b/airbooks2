/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';

function useSingleState(initialValue: any) {
    const [value, setValue] = useState(initialValue);

    const setCustomValue = (newValue: any) => {
        setValue(newValue);
    };

    return {
        value,
        setValue: setCustomValue,
    };
}

export default useSingleState;
