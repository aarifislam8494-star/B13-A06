import React from 'react';

const StatBar = () => {
    return (
        <div className='bg-linear-to-l from-[#9514FA] to-[#4F39F6] py-5 my-20'>
            <div className='flex items-center max-w-[90%] sm:max-w-[70%] mx-auto text-white'>

                <div className='flex-1 text-center'>
                    <h2 className='text-2xl md:text-4xl font-bold'>50K+</h2>
                    <p className='opacity-70 font-medium text-sm sm:text-base'>Active Users</p>
                </div>
                <div className='w-px h-14 bg-white/30 flex-shrink-0'></div>

                <div className='flex-1 text-center'>
                    <h2 className='text-2xl md:text-4xl font-bold'>200+</h2>
                    <p className='opacity-70 font-medium text-sm sm:text-base'>Premium Tools</p>
                </div>
                <div className='w-px h-14 bg-white/30 flex-shrink-0'></div>

                <div className='flex-1 text-center'>
                    <h2 className='text-2xl md:text-4xl font-bold'>4.9</h2>
                    <p className='opacity-70 font-medium text-sm sm:text-base'>Rating</p>
                </div>

            </div>
        </div>
    );
};

export default StatBar;