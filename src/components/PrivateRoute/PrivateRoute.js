import React from 'react'
import { Navigate , useLocation } from 'react-router'
import CheckJwtToken from '../lib/CheckJwtToken';

function PrivateRoute({children}) {
    const {CheckToken} = CheckJwtToken()
    const location = useLocation();

    if(CheckToken()){
        return children;
    }else{
        return <Navigate to="/sign-in" state={{from: location}}/>
    }
}

export default PrivateRoute;