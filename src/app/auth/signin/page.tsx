'use client'
import React, { useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import Image from 'next/image'
import logo from '@/assets/image/neema/logo/airbooks-logo.png'
import { signIn } from 'next-auth/react'
import { DEFAULT_REDIRECT } from '@/lib/routes'
import GlobalLoader from '@/components/loader/global-loader'
import { cn } from '@/utils/functions/classNames'
import { Spinner } from '@/assets/svg/spinner'
import { Alert, AlertDescription } from '@/components/ui/alert'

const Page: React.FC = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [forwarding, setForwarding] = useState(false)
    const router = useRouter()

    const searchParams = useSearchParams()
    const callbackUrl = searchParams ? searchParams.get('callbackUrl') : null

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setError('')
        setIsLoading(true)

        try {
            const result = await signIn('credentials', {
                email,
                password,
                redirect: false,
            })

            if (result?.error) {
                setError('Invalid email or password')
            } else {
                setForwarding(true)
                await router.push(callbackUrl || DEFAULT_REDIRECT)
            }
        } catch (err) {
            setError('An unexpected error occurred. Please try again.')
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div className="background flex h-screen w-screen flex-col items-center justify-center bg-gray-900">
            {forwarding && (
                <div className="h-screen w-screen absolute z-30">
                    <GlobalLoader />
                </div>
            )}
            <div className="flex flex-col rounded-lg shadow-md lg:flex-row">
                {/* Logo and copyright section */}
                <div className="border-b bg-slate-100 py-7 px-10 lg:w-72 lg:border-r">
                    <Image
                        src={logo}
                        priority={true}
                        alt="AirBooks"
                        className="lg:h-auto lg:w-72"
                    />
                    <p className="mt-4 text-center text-sm text-gray-600">
                        © 2016 <span className="font-bold text-black">neema</span>. All rights reserved
                    </p>
                </div>

                {/* Sign-in form section */}
                <div className="border-b border-l bg-white py-7 px-10 lg:flex-1">
                    <h2 className="mb-2 text-base text-black">
                        <span className="text-2xl font-bold text-green-700">AirBooks</span> sign in
                    </h2>

                    {error && (
                        <Alert variant="destructive" className="mb-4 cursor-not-allowed pointer-events-none">
                            <AlertDescription>{error}</AlertDescription>
                        </Alert>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Email input */}
                        <div className="bg-white">
                            <div className="relative bg-inherit">
                                <input
                                    type="text"
                                    id="email"
                                    name="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    className="peer w-full rounded border-gray-300 bg-transparent bg-white py-2 px-3 text-black placeholder-transparent"
                                    placeholder="Email"
                                    disabled={isLoading}
                                />
                                <label
                                    htmlFor="email"
                                    className="pointer-events-none absolute -top-3 left-0 mx-1 cursor-text bg-inherit px-1 text-sm text-gray-500 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:-top-3 peer-focus:text-sm peer-focus:text-sky-600"
                                >
                                    Email
                                </label>
                            </div>
                        </div>

                        {/* Password input */}
                        <div className="bg-white">
                            <div className="relative bg-inherit">
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                    className="peer w-full rounded border-gray-300 bg-transparent bg-white py-2 px-3 text-black placeholder-transparent"
                                    placeholder="Password"
                                    disabled={isLoading}
                                />
                                <label
                                    htmlFor="password"
                                    className="pointer-events-none absolute -top-3 left-0 mx-1 cursor-text bg-inherit px-1 text-sm text-gray-500 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:-top-3 peer-focus:text-sm peer-focus:text-sky-600"
                                >
                                    Password
                                </label>
                            </div>
                        </div>

                        {/* Remember me checkbox */}
                        <div className="mb-6 flex items-center">
                            <input
                                type="checkbox"
                                id="remember"
                                className="mr-2"
                                disabled={isLoading}
                            />
                            <label htmlFor="remember" className="text-gray-700">
                                Remember my user ID
                            </label>
                        </div>

                        {/* Sign in button and forgot password link */}
                        <div className="flex flex-col items-center justify-between lg:flex-row lg:gap-3">
                            <button
                                type="submit"
                                className={cn(isLoading ? 'cursor-pointer pointer-events-none' : 'hover:bg-blue-700 ', "focus:shadow-outline rounded bg-blue-500 py-2 px-4 font-bold text-white focus:outline-none disabled:bg-blue-300")}
                                disabled={isLoading}
                            >
                                {isLoading ? (
                                    <div role="status" className='flex items-center gap-2'>
                                        <Spinner className='size-2' />
                                        Signing in...
                                    </div>
                                ) : (
                                    'Sign in'
                                )}
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

            {/* Footer links */}
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

export default Page