import React, { useContext } from 'react';
import { AuthContext } from '../contexts/AuthProvider';
import { useLocation, Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const{ user, loader } = useContext(AuthContext);
    const location = useLocation();
    console.log(loader);

    if(loader) {
        return <div className='text-center'>loading...</div>
    }
    if(user) {
        return children
    }
    return <Navigate to='/signin' state={{from: location}} replace></Navigate>
};

export default PrivateRoute;