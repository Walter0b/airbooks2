import React from 'react'

function HeaderOptions() {
    return (
        <div className=" absolute border-t-gray-100 z-10 right-0  origin-top-right size-fit flex gap-4 rounded border bg-white p-4 shadow-lg">
            <div className="flex h-20 w-20 items-center justify-center bg-gray-300">Image</div>
            <div className="flex flex-col justify-between">
                <div>
                    <span className="block text-black text-base font-bold">Enda Uhambo [Owner]</span>
                    <span className="block text-gray-500">enda.uhambo@neema.co.za</span>
                </div>
                <div className="mt-2">
                    <span className="block cursor-pointer text-blue-500 hover:underline">Change picture</span>
                    <span className="cursor-pointer text-blue-500 hover:underline">Change Password</span>
                </div>
                <div className="mt-2 text-nowrap flex gap-4">

                    <span className="cursor-pointer text-blue-500 hover:underline">Log out from other devices</span>
                    <span className="cursor-pointer text-red-500 hover:underline">Sign Out</span>
                </div>
            </div>
        </div>
    )
}
HeaderOptions.displayName = 'HeaderOptions'
export default HeaderOptions