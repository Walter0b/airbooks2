'use client'
import React from 'react';
import endaLog from '@/assets/image/neema/logo/enda-icon.png';
import Image from 'next/image';
import NavLink from 'next-navlink';

interface Agency {
    name: string;
    language: string;
    role: string;
    startDate: string;
    plan: string;
}

interface AgencyCardProps extends Agency { }

const AgencyCard: React.FC<AgencyCardProps> = ({ name, language, role, startDate, plan }) => (
    <div className="flex flex-col sm:flex-row items-center border py-4 w-full rounded-lg mb-4">
        <div className="sm:w-1/3 w-full h-full sm:mr-4 mb-4 sm:mb-0 border-dotted border-2 border-gray-100 flex justify-center">
            <Image src={endaLog} alt="Agency logo" className="w-24 p-3 rounded-full" />
        </div>
        <div className='sm:w-1/2 w-full text-center text-cyan-900 sm:text-left'>
            <h3 className="font-bold text-cyan-550">{name} - {language}</h3>
            <p className="text-sm font-medium">Your Role: {role}</p>
            <p className="text-xs text-gray-500">Agency Started On: {startDate}</p>
            <p className="text-xs text-green-600">Subscription Plan: {plan}</p>
        </div>
    </div>
);

const AgencySelection: React.FC = () => {
    const agencies: Agency[] = [
        { name: "ENDA TRAVEL", language: "English", role: "Owner", startDate: "21 Jul 2016", plan: "Yearly" },
        { name: "ENDA TRAVEL", language: "Français", role: "Owner", startDate: "12 Nov 2016", plan: "Yearly" },
        { name: "ENDA TRAVEL", language: "Português", role: "Owner", startDate: "12 Nov 2016", plan: "Yearly" },
    ];

    return (
        <div className='w-full min-h-screen flex items-center bg-gray-100'>

            <div className="max-w-3xl w-full mx-auto bg-white">
                <div className="bg-cyan-550 cursor-default text-white p-4">
                    <h1 className="text-lg font-bold">Hi Enda Uhamboi</h1>
                </div>
                <div className=' px-8 pb-9 ' >
                    <h2 className="text-base my-7  text-black">Please select an agency below</h2>
                    <hr className=" border-gray-100 p-2" />
                    <div className='cursor-pointer'>

                    </div>

                    <div>
                        {agencies.map((agency, index) => (
                            <div key={index}>
                                <NavLink to={'auth/signin?callbackUrl=%2Fcore%2Ftravelers'}>
                                    <AgencyCard  {...agency} />
                                </NavLink>
                                <hr className=" border-gray-100 p-2" />
                            </div>

                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AgencySelection;