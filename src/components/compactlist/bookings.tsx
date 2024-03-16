import { travelersData } from "@/utils/mock/data/travelers/table";
import { useParams } from "react-router-dom";

export default function Bookings() {
    const currentID = parseInt(useParams().id as string, 10);
    const user = travelersData.data.find((user: { id: number; }) => user?.id === currentID);
    return (
        <div className=" mt-12 grid grid-cols-1 md:grid-cols-3 gap-4">
            {user && (
                <>
                    <div className="max-w-sm rounded-lg overflow-hidden shadow-md bg-blue-100">
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2 text-blue-800">{user.name}</div>
                            <p className="text-gray-600 text-sm mb-2">ID: {user.id}</p>
                            <p className="text-gray-600 text-sm mb-2">Mobile Phone: {user.mobilePhone}</p>
                        </div>
                    </div>
                    <div className="max-w-sm rounded-lg overflow-hidden shadow-md bg-green-100">
                        <div className="px-6 py-4">
                            <p className="text-gray-600 text-sm mb-2">Nationality: {user.nationality}</p>
                            <p className="text-gray-600 text-sm mb-2">Travel Status: {user.travelStatus}</p>
                        </div>
                    </div>
                    <div className="max-w-sm rounded-lg overflow-hidden shadow-md bg-yellow-100">
                        <div className="px-6 py-4">
                            <p className="text-gray-600 text-sm mb-2">Events: {user.events}</p>
                            <p className="text-gray-600 text-sm mb-2">Income: {user.income}</p>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}
