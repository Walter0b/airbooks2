
// /**
//  * used for object and array value types
//  * this is an alternative of react useState, this return a writable variable
//  * @param value default value
//  */
'user client'
import { useState } from 'react';


function usePeroxideState(initialValue:any, customSetterFn?:any) {
    const [state, setState] = useState(initialValue);

    const proxiedState = new Proxy(state, {
        get(target, prop) {
            return target[prop];
        },
        set(target, prop, value) {
            if (customSetterFn) {
                const updatedValue = customSetterFn({...target}, prop, value);
                setState(updatedValue);
            } else {
                const updatedValue = { ...target, [prop]: value };
                setState(updatedValue);
            }
            return true;
        },
    });

    return proxiedState;
}

export default usePeroxideState;








// export default function (value) {
//     const [_value,_setValue] =useState();
    
//     return new Proxy(value, {
//         get(target, prop: any) {
//             return target[prop];
//         },
//         set(target, prop: any, newValue) {
           
//             target[prop] = newValue;
//             _setValue (buildValues(value));
//             setErrors(objErrors);
//             return true;
//         },
//     });


// }


// function buildValues(value: FormTabType[]): FormTabType[] {

//     return new Proxy(value, {
//         get(target, prop: any) {
//             return target[prop];
//         },
//         set(target, prop: any, newValue) {
//             if (prop === 'Email') {
//                 if (/@/.test(newValue)) {
//                     delete objErrors[prop];
//                 } else {
//                     objErrors[prop] = { value: newValue, error: 'invalid email' };
//                 }
//             }
//             target[prop] = newValue;
//             setValues(buildValues(value));
//             setErrors(objErrors);
//             return true;
//         },
//     });
// }
