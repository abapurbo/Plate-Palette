import React, { useContext } from 'react';
import AuthContext, { Context } from '../AuthContext/AuthContext';

const useAuth = () => {
    const context=useContext(Context);
    return context;
};

export default useAuth;