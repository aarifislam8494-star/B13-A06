import React from 'react';
import { CiPlay1 } from 'react-icons/ci';
import { FiTarget } from 'react-icons/fi';
import BannerImg from "../../assets/banner.png";

const Banner = () => {
    return (
        <div className='w-10/12 mx-auto my-14'>
            <div className='grid lg:grid-cols-2 items-center gap-10'>
                
                <div className='flex-1'>
                    <div className='flex items-center gap-2 bg-[#E1E7FF] max-w-[280px] p-1 rounded-full mb-4'>
                        <FiTarget className='text-[#4F39F6] font-semibold' />
                        <p className='text-[#1d07c5] font-semibold'>New: AI-Powered Tools Available</p>
                    </div>
                    <h1 className='text-4xl md:text-6xl lg:text-7xl font-bold mb-2'>Supercharge Your Digital Workflow</h1>
                    <p className='opacity-70 font-medium text-lg mb-3'>Access premium AI tools, design assets, templates, and productivity software—all in one place. Start creating faster today. Explore Products.
                    </p>
                    <div className='flex gap-3'>
                        <button className='font-semibold bg-linear-to-l from-[#9514FA] to-[#4F39F6] py-2 px-3 rounded-full text-white cursor-pointer hover:bg-linear-to-l hover:from-[#ff0054] hover:to-[#ff5400] hover:text-gray-200 transition-transform duration-200 ease-in-out hover:scale-105 active:scale-95'>Explore Product</button>
                        <button className='flex items-center gap-1 border border-[#4F39F6] rounded-full px-3 hover:bg-linear-to-l hover:from-[#bbdfc5] hover:to-[#ff579f]  hover:text-white hover:border-none cursor-pointer font-semibold transition-transform duration-200 ease-in-out hover:scale-105 active:scale-95'><CiPlay1 /> Watch Demo</button>
                    </div>
                </div>

                <div className='flex-1 flex justify-center lg:justify-end'>
                    <img src={BannerImg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;