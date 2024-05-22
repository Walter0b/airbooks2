import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { login } from '@/states/reducer/authSlice';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/states/store';
import logo from '@/assets/image/neema/logo/airbooks-logo.png';
import './style.css'

const LoginPage: React.FC = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const { isAuthenticated, error } = useSelector((state: RootState) => state.auth);
  
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
       // eslint-disable-next-line @typescript-eslint/no-explicit-any
        dispatch(login({ email, password }) as any);
        console.log("🚀 ~ error:", error)

        
    };

    if (isAuthenticated) {
        // Redirect to the desired page after successful login
        return <Navigate to="/core" replace />;
    }

    return (
        <div className="flex  background flex-col items-center justify-center w-screen h-screen bg-gray-900">
            <div className="flex flex-col lg:flex-row rounded-lg shadow-md">
                <div className="bg-slate-100 lg:w-72 py-7 px-10 border-b lg:border-r">
                    <img
                        src={logo}
                        alt="AirBooks"
                        className="lg:h-auto lg:w-72"
                    />
                    <p className="text-gray-600 text-sm text-center mt-4">
                        © 2016 <span className="font-bold text-black">neema</span>. All rights
                        reserved
                    </p>
                </div>
                <div className="bg-white lg:flex-1 py-7 px-10 border-l border-b">
                    <h2 className="text-base mb-6 text-black">
                        <span className="font-bold text-green-700 text-2xl">AirBooks</span>{" "}
                        sign in
                    </h2>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <input
                                type="email"
                                id="email"
                                className="w-full px-3 py-2 border text-black bg-white border-gray-300 rounded"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div>
                            <input
                                type="password"
                                id="password"
                                className="w-full px-3 py-2 border text-black bg-white border-gray-300 rounded"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <div className="flex items-center mb-6">
                            <input type="checkbox" id="remember" className="mr-2" />
                            <label htmlFor="remember" className="text-gray-700">
                                Remember my user ID
                            </label>
                        </div>
                        <div className="flex flex-col lg:gap-3 lg:flex-row justify-between items-center">
                            <button
                                type="submit"
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            >
                                Sign in
                            </button>
                            <a
                                href="#"
                                className="text-blue-500 hover:text-blue-800 font-medium lg:mt-0 mt-4"
                            >
                                Can't access your account?
                            </a>
                        </div>
                    </form>
                </div>
            </div>
            <div className="text-gray-300 text-xs mt-4">
                <a href="#" className="px-2 hover:text-gray-800 border-r">
                    Blog
                </a>
                <a href="#" className="px-2 hover:text-gray-800 border-r">
                    Support
                </a>
                <a href="#" className="px-2 hover:text-gray-800">
                    Signup
                </a>
            </div>
        </div>

    );
}

export default LoginPage;
