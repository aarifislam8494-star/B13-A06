import React, { useState } from 'react';
import { FaCheck } from 'react-icons/fa';

const ProductCart = ({ product, carts, setCarts }) => {
    console.log(carts);


    const variants = {
        "Best Seller": "bg-[#FEF3C6] text-[#BB4D00] font-semibold",
        Popular: "bg-[#E1E7FF] text-[#4F39F6] font-semibold",
        New: "bg-[#E1E7FF] text-[#0A883E] font-semibold"
    }

    const [click, setClick] = useState(false);
    const handleButton = () => {
        setClick(true)
        setCarts([...carts, product]);
    }

    return (
        <div className='border border-[#F2F2F2] rounded-2xl p-5'>
            <div className='flex justify-end'>
                <span className={`px-2 py-1 rounded-full ${variants[product.badge] || ""}`}>{product.badge}</span>
            </div>
            <div>
                <img className='w-8 h-8 ring-2 ring-gray-300 ring-offset-7 rounded-full ml-1 mb-5' src={product.image} alt="" />
            </div>
            <div>
                <h2 className='text-2xl font-bold text-[#101727] mb-2'>{product.name}</h2>
            </div>
            <div>
                <p className='text-[#627382] text-base mb-2'>{product.description}</p>
            </div>
            <div className='flex items-end gap-1 mb-2'>
                <h2 className='text-2xl text-[#101727]'>${product.price}</h2>
                <p className='text-[#627382]'>/Mo</p>
            </div>
            <div>
                {product.features.map((feature) =>
                    <div key={feature.id} className='list-none flex items-center gap-2 mb-2'>
                        <span className='text-green-500'><FaCheck /></span>
                        <li className='text-[#627382]'>{feature}</li>
                    </div>
                )}
            </div>
            <div>
                <button
                    onClick={handleButton}
                    className='font-semibold bg-linear-to-l from-[#9514FA] to-[#4F39F6] py-2 px-3 rounded-full text-white cursor-pointer hover:bg-linear-to-l hover:from-[#ff0054] hover:to-[#ff5400] hover:text-gray-200 w-full'>{click ? "Subscribed" : "Buy Now"}</button>
            </div>
        </div>
    );
};

export default ProductCart;