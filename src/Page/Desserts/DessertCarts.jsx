import React from 'react';
import { useLoaderData } from 'react-router';
import DessertCart from './DessertCart';

const DessertCarts = () => {
    const items = useLoaderData()
    console.log(items)
    return (
        <div className='md:grid gap-10 md:grid-cols-10  mt-10'>
            <div className='col-span-7 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 '>
                {
                    items.map((item, index) => <DessertCart key={index} item={item}></DessertCart>)
                }
            </div>
            <div className='md:col-span-3  h-100 bg-[#feeafa]'>

            </div>

        </div>
    );
};

export default DessertCarts;