import { useState } from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function useSingleState(initialValue: any) {
    const [value, setValue] = useState(initialValue);

    const setCustomValue = (newValue) => {
        setValue(newValue);
    };

    return {
        value,
        setValue: setCustomValue,
    };
}

export default useSingleState;
