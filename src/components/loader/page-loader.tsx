import TableLoader from './table-loader'

const PageLoader = () => {
    // console.log('Loading')
    return (
        <div className='cursor-wait'>
            <div className="flex h-fit w-full justify-between">
                <div className="whitespace-nowrap py-4 px-6">
                    <div className="h-5 w-32 animate-pulse rounded bg-gray-300"></div>
                </div>
                <div className="mr-4 flex whitespace-nowrap py-3 px-6">
                    <div className="animate-pulse px-4 bg-gray-300 rounded ">

                    </div>
                    <div className="animate-pulse  px-3 bg-gray-300 ml-4 flex h-full rounded-l">

                    </div>
                    <div className=" px-3  animate-pulse h-full w-full gap-[1px]  bg-gray-300 ">

                    </div>
                    <div className="animate-pulse   px-3 bg-gray-300  h-full w-full items-center rounded-r  bg-gray-100 ">

                    </div>
                </div>
            </div>
            <TableLoader />
        </div>
    )
}

export default PageLoader
