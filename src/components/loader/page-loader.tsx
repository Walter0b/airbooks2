import TableLoader from './table-loader'

const PageLoader = () => {
    // console.log('Loading')
    return (
        <div className="cursor-wait">
            <div className="flex h-fit w-full justify-between">
                <div className="whitespace-nowrap py-4 px-6">
                    <div className="h-5 w-32 animate-pulse rounded bg-gray-300"></div>
                </div>
                <div className="mr-4 flex whitespace-nowrap py-3 px-6">
                    <div className="animate-pulse rounded bg-gray-300 px-4 "></div>
                    <div className="ml-4  flex h-full animate-pulse rounded-l bg-gray-300 px-3"></div>
                    <div className=" h-full  w-full animate-pulse gap-[1px] bg-gray-300  px-3 "></div>
                    <div className="h-full   w-full animate-pulse  items-center rounded-r bg-gray-100 bg-gray-300  px-3 "></div>
                </div>
            </div>
            <TableLoader />
        </div>
    )
}

export default PageLoader
