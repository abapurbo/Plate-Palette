import React from 'react';
import { useLoaderData } from 'react-router';
import DessertCart from './DessertCart';

const DessertCarts = () => {
    const items = useLoaderData()
    return (
        <div className='md:grid gap-10 md:grid-cols-10 space-y-7  mt-10'>
            <div className='col-span-7 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 '>
                {
                    items.map((item, index) => <DessertCart key={index} item={item}></DessertCart>)
                }
            </div>
            <div className='md:col-span-3  h-100 bg-[#FFFFFF] rounded-2xl py-4 px-6 '>
             <h1 className='text-2xl text-red-700 font-bold'>Your Cart ({0})</h1>
             
             <p className='text-[18px] text-stone-600 font-semibold'>Your add items will appear here</p>
            </div>

        </div>
    );
};

export default DessertCarts;