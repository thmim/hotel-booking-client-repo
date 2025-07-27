import React, { use } from 'react';
import { Navigate, useLocation } from 'react-router';
import { AuthContext } from './AuthContext/AuthContext';

const PrivateRoute = ({children}) => {
    const {user,loading} = use(AuthContext);
    const location = useLocation();
    if(loading){
        return <div className='text-center my-8'><span className="loading loading-spinner loading-xl  text-blue-500"></span></div>
    }

    if(!user || !user?.email){
        return <Navigate state={location.pathname} to="/login"></Navigate>
    }
    return (
        <div>
            {children}
        </div>
    );
};

export default PrivateRoute;