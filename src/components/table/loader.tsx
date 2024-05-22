
const TableLoader = () => {
    // console.log('Loading')
    return (
        <div className="border w-full border-gray-200 shadow-sm rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                    <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"></th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"></th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"></th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"></th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"></th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"></th>

                    </tr>
                </thead>
                <tbody className="bg-white divide-y even:bg-slate-50 divide-gray-200">

                    {[...Array(6)].map((_, index) => (
                        <tr key={index}>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <div className="w-8 h-4 bg-gray-300 rounded animate-pulse"></div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <div className="w-32 h-4 bg-gray-300 rounded animate-pulse"></div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <div className="w-24 h-4 bg-gray-300 rounded animate-pulse"></div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <div className="w-24 h-4 bg-gray-300 rounded animate-pulse"></div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <div className="w-24 h-4 bg-gray-300 rounded animate-pulse"></div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <div className="w-24 h-4 bg-gray-300 rounded animate-pulse"></div>
                            </td>
                
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TableLoader;
