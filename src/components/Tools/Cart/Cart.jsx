import React from 'react';
import { IoCartOutline } from 'react-icons/io5';
import { toast } from 'react-toastify';

const Cart = ({ carts, setCarts }) => {
    const checkout = () => {
        setCarts([]);
        if (carts.length > 0 && toast.success("Checkout Successful"));
    }

    const handleRemove = (cart) => {
        const filter = carts.filter((c) => c.id !== cart.id);
        setCarts(filter);
        toast.success("Item remove form the cart");
    }

    const totalPrice = carts.reduce((sum, item) => sum + item.price, 0);

    return (
        <div className='max-w-[1120px] mx-auto w-11/12 md:w-10/12 mb-10 border p-4 border-[#F2F2F2] rounded-2xl'>
            <h2 className='text-2xl font-bold mb-3'>Your Cart</h2>
            {carts.length === 0
                ? <div className='flex flex-col justify-center items-center gap-2 py-14'>
                    <span className='text-8xl opacity-50'><IoCartOutline /></span>
                    <p className='font-semibold text-2xl opacity-50'>Your cart is empty</p>
                </div>
                :
                <>
                    {carts.map((cart) =>
                        <div className='max-w-[1120px] mx-auto flex justify-between gap-3 border p-3 mb-5 items-center rounded-lg border-[#F2F2F2] transition-transform duration-300 hover:scale-102'>
                            <div className='flex items-center gap-3'>
                                <div>
                                    <img className='w-8 h-8 ring-2 ring-gray-300 ring-offset-7 rounded-full' src={cart.image} alt="" />
                                </div>
                                <div>
                                    <h4 className='text-lg sm:text-xl font-semibold'>{cart.name}</h4>
                                    <p className='text-[#627382]'>$ {cart.price}</p>
                                </div>
                            </div>

                            <div>
                                <a
                                    onClick={() => handleRemove(cart)}
                                    className='text-[#FF3980] font-bold cursor-pointer'>Remove</a>
                            </div>
                        </div>
                    )}

                    <div className='flex justify-between px-2 mb-4'>
                        <span className='text-[#627382]'>Total</span>
                        <span className='text-[#101727] text-2xl font-bold'>$ {totalPrice}</span>
                    </div>

                    <div className='bg-linear-to-l from-[#9514FA] to-[#4F39F6] py-2 rounded-full over:bg-linear-to-l hover:from-[#ff0054] hover:to-[#ff5400] hover:text-gray-200'>
                        <button
                            onClick={checkout}
                            className='w-full font-bold text-white cursor-pointer '>Proceed to Checkout</button>
                    </div>
                </>
            }
        </div>
    );
};

export default Cart;