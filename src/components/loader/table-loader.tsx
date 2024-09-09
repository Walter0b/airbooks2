const TableLoader = () => {
    // console.log('Loading')
    return (
        <div className=" w-full cursor-wait rounded-lg border border-gray-200 shadow-sm">
            <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                    <tr>
                        <th
                            scope="col"
                            className="py-3 px-6 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
                        ></th>
                        <th
                            scope="col"
                            className="py-3 px-6 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
                        ></th>
                        <th
                            scope="col"
                            className="py-3 px-6 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
                        ></th>
                        <th
                            scope="col"
                            className="py-3 px-6 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
                        ></th>
                        <th
                            scope="col"
                            className="py-3 px-6 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
                        ></th>
                        <th
                            scope="col"
                            className="py-3 px-6 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
                        ></th>
                        <th
                            scope="col"
                            className="py-3 px-6 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
                        ></th>
                    </tr>
                </thead>
                <TableBodyLoader />
            </table>
        </div>
    )
}
export const TableBodyLoader = () => {
    return (<tbody className="divide-y divide-gray-200 bg-white even:bg-slate-50">
        {[...Array(10)].map((_, index) => (
            <tr key={index}>
                <td className="whitespace-nowrap py-4 px-4">
                    <div className="h-4 w-4 animate-pulse rounded bg-gray-300"></div>
                </td>
                <td className="whitespace-nowrap py-4 px-6">
                    <div className="h-4 w-32 animate-pulse rounded bg-gray-300"></div>
                </td>
                <td className="whitespace-nowrap py-4 px-6">
                    <div className="h-4 w-24 animate-pulse rounded bg-gray-300"></div>
                </td>
                <td className="whitespace-nowrap py-4 px-6">
                    <div className="h-4 w-24 animate-pulse rounded bg-gray-300"></div>
                </td>
                <td className="whitespace-nowrap py-4 px-6">
                    <div className="h-4 w-24 animate-pulse rounded bg-gray-300"></div>
                </td>
                <td className="whitespace-nowrap py-4 px-6">
                    <div className="h-4 w-24 animate-pulse rounded bg-gray-300"></div>
                </td>
            </tr>
        ))}
    </tbody>)

}

export default TableLoader
