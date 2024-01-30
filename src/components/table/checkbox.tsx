

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function Checkboxes({ checkboxState, onChange }:{checkboxState : any, onChange : any}) {



    return (
        <th scope="col w-1/3" className="p-4">
            <div className="flex !text-purple-300 items-center">
                <input
                    id="checkbox-all"
                    type="checkbox"
                    className='bg-white'
                    checked={checkboxState}
                    onChange={onChange}
                />
                <label className="sr-only">checkbox</label>
            </div>
        </th>

    );
}



