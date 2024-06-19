"use client";
import React, { useState } from 'react'
import Image from 'next/image'
import logo from '@/assets/image/neema/logo/airbooks-logo.png'
import './style.css'
import { signIn } from 'next-auth/react'
import { useRouter,useSearchParams } from 'next/navigation'
import { DEFAULT_REDIRECT } from '@/lib/routes';

const LoginPage: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const router = useRouter(); // Use the useRouter hook
    const searchParams = useSearchParams()
    // console.log("🚀 ~ searchParams:", searchParams.get('callbackUrl'))
    // Retrieve callbackUrl from query params
    const callbackUrl =  searchParams.get('callbackUrl')

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(''); 
        const result = await signIn('credentials', {
            email,
            password,
            redirect: false,
        });

        if (result?.error) {
            setError('Invalid email or password');
        } else {
            callbackUrl? router.push(callbackUrl) :router.push(DEFAULT_REDIRECT)
        }
    };
    return (
        <div className="background  flex h-screen w-screen flex-col items-center justify-center bg-gray-900">
            <div className="flex flex-col rounded-lg shadow-md lg:flex-row">
                <div className="border-b bg-slate-100 py-7 px-10 lg:w-72 lg:border-r">
                    <Image
                        src={logo}
                        alt="AirBooks"
                        className="lg:h-auto lg:w-72"
                    />
                    <p className="mt-4 text-center text-sm text-gray-600">
                        © 2016{' '}
                        <span className="font-bold text-black">neema</span>. All
                        rights reserved
                    </p>
                </div>
                <div className="border-b border-l bg-white py-7 px-10 lg:flex-1">
                    <h2 className="mb-6 text-base text-black">
                        <span className="text-2xl font-bold text-green-700">
                            AirBooks
                        </span>{' '}
                        sign in
                    </h2>
                    <form onSubmit={handleSubmit} className="space-y-6">

                        <div className="bg-white">
                            <div className="relative bg-inherit">
                                <input
                                    type="text"
                                    id="username"
                                    name="username"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    className="peer  w-full  py-2 px-3 rounded border-gray-300 bg-transparent bg-white  text-black placeholder-transparent   "
                                    placeholder="Email"
                                />
                                <label
                                    id="username"
                                    className="pointer-events-none absolute -top-3 left-0 mx-1 cursor-text bg-inherit px-1 text-sm text-gray-500 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:-top-3 peer-focus:text-sm peer-focus:text-sky-600"
                                >
                                    Email
                                </label>
                            </div>
                        </div>
                        <div className="bg-white">
                            <div className="relative bg-inherit">
                                <input
                                    type="password"
                                    id="Password"
                                    name="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                    className="peer  w-full  py-2 px-3 rounded border-gray-300 bg-transparent bg-white  text-black placeholder-transparent   "
                                    placeholder="Email"
                                />
                                <label
                                    id="Password"
                                    className="pointer-events-none absolute -top-3 left-0 mx-1 cursor-text bg-inherit px-1 text-sm text-gray-500 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:-top-3 peer-focus:text-sm peer-focus:text-sky-600"
                                >
                                    Password
                                </label>
                            </div>
                        </div>

                        <div className="mb-6 flex items-center">
                            <input
                                type="checkbox"
                                id="remember"
                                className="mr-2"
                            />
                            <label htmlFor="remember" className="text-gray-700">
                                Remember my user ID
                            </label>
                        </div>
                        <div className="flex flex-col items-center justify-between lg:flex-row lg:gap-3">
                            <button
                                type="submit"
                                className="focus:shadow-outline rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700 focus:outline-none"
                            >
                                Sign in
                            </button>
                            <a
                                href="#"
                                className="mt-4 font-medium text-blue-500 hover:text-blue-800 lg:mt-0"
                            >
                                Can't access your account?
                            </a>
                        </div>
                    </form>
                </div>
            </div>
            <div className="mt-4 text-xs text-gray-300">
                <a href="#" className="border-r px-2 hover:text-gray-800">
                    Blog
                </a>
                <a href="#" className="border-r px-2 hover:text-gray-800">
                    Support
                </a>
                <a href="#" className="px-2 hover:text-gray-800">
                    Signup
                </a>
            </div>
        </div>
    )
}

export default LoginPage
