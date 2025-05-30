import React from 'react';
import { Outlet } from 'react-router';

const MainLayout = () => {
    return (
        <div className='bg-[#F5EDEB] p-0 px-15 py-10'>
            <div >
                <h1 className='text-4xl font-bold'>Desserts</h1>
            </div>
            <div >
                <Outlet></Outlet>
            </div>
        </div>

    );
};

export default MainLayout;