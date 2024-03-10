export default function Checkboxes({
    checkboxState,
    onChange,
}: Readonly<{
    checkboxState: boolean
    onChange: () => void
}>) {
    return (
        <th scope="col w-1/3" className="p-4">
            <div className="flex items-center !text-purple-300">
                <input
                    id="checkbox-all"
                    type="checkbox"
                    className="bg-white"
                    checked={!checkboxState ? false : checkboxState}
                    onChange={onChange}
                />
                <label className="sr-only">checkbox</label>
            </div>
        </th>
    )
}
