import React from 'react';
import { MdAddShoppingCart } from 'react-icons/md';

const DessertCart = ({ item }) => {
    const desktop = item.image.desktop;
    const tablet=item.image.tablet;
    const mobile=item.image.mobile;
    return (
        <div className="card bg-[##F5EDEB]  shadow-sm">
            <figure>
                <img src={item.image.desktop} />
            </figure>
            <div className="card-body space-y-3">
                <div className='relative'>
                    <div className="card-actions absolute left-[50%] right-[50%] bottom-2 justify-center">
                        <button className="text-[16px] font-bold px-4 py-2 btn rounded-4xl outline-2 outline-red-500"><MdAddShoppingCart className='text-xl'></MdAddShoppingCart> Add to Cart</button>
                    </div>
                </div>

                <div>
                    <h2 className="text-[16px] text-[#c2776a] font-semibold">{item.category}</h2>
                    <h1 className='text-[18px] text-black font-semibold'>{item.name}</h1>
                    <span className='text-[21px] text-[#e26049]'>${item.price}</span>
                </div>



            </div>
        </div>
    );
};

export default DessertCart;