import { travelersData } from "@/utils/mock/data/travelers/table";
import { useParams } from "react-router-dom";

export default function Snapshot() {
    const currentID = parseInt(useParams().id as string, 10);
    const user = travelersData.data.find((user: { id: number; }) => user?.id === currentID);

    return (
        <div className="flex justify-center h-full w-full items-center  bg-gray-100">
            {user && (
                <div className="rounded-lg overflow-hidden shadow-md bg-white p-8">
                    <div className="text-center ">
                        <div className="font-bold text-xl mb-2 text-blue-800">{user.name}</div>
                        <p className="text-gray-600 text-sm mb-2">ID: {user.id}</p>
                        <p className="text-gray-600 text-sm mb-2">Mobile Phone: {user.mobilePhone}</p>
                        <p className="text-gray-600 text-sm mb-2">Nationality: {user.nationality}</p>
                        <p className="text-gray-600 text-sm mb-2">Travel Status: {user.travelStatus}</p>
                        <p className="text-gray-600 text-sm mb-2">Events: {user.events}</p>
                        <p className="text-gray-600 text-sm mb-2">Income: {user.income}</p>
                    </div>
                </div>
            )}
        </div>
    );
}
