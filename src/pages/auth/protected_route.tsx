import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '@/states/store';



const ProtectedRoute: React.FC = () => {
    // const { isAuthenticated } = useSelector((state: RootState) => state.auth);
    // console.log(isAuthenticated)
    // if (!isAuthenticated) {
    //     return <Navigate to="/signin" replace />;
    // }

    return <Outlet />;
};

export default ProtectedRoute;