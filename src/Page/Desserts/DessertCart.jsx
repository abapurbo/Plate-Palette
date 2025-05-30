import React from 'react';
import { MdAddShoppingCart } from 'react-icons/md';

const DessertCart = ({item}) => {
    console.log("item",item.image.desktop)
    return (
        <div className="card bg-base-100  shadow-sm">
            <figure>
                <img src={item.image.desktop} />
            </figure>
            <div className="card-body relative">
                 <div className="card-actions absolute left-[50%] right-[50%] bottom-15 justify-center">
                    <button className="text-[16px] font-bold px-4 py-2 btn rounded-4xl outline-2 outline-red-500"><MdAddShoppingCart className='text-xl'></MdAddShoppingCart> Add to Cart</button>
                </div>
                <h2 className="card-title">{item.category}</h2>
               
               
            </div>
        </div>
    );
};

export default DessertCart;