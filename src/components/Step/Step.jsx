import React from 'react';
import StepCardImg from "../../assets/user.png";
import PackagePng from "../../assets/package.png"
import RocketPng from "../../assets/rocket.png"

const Step = () => {
    return (
        <div className='bg-[#F9FAFC]'>
            <div className='w-11/12 sm:w-9/12 md:w-10/12 mx-auto py-20'>
                <div className='text-center mb-5'>
                   <h2 className='text-3xl md:text-5xl text-[#101727] font-bold mb-3'>Get Started in 3 Steps</h2>
                    <p className='text-[#627382]'>Start using premium digital tools in minutes, not hours.</p>
                </div>

                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-10'>
                    <div className='border border-[#f2f2f2] p-5 rounded-lg bg-white transition-transform duration-300 hover:scale-102'>
                        <div className='flex justify-end mb-9'>
                            <span className='bg-linear-to-l from-[#9514FA] to-[#4F39F6] px-3 py-2 font-semibold rounded-full text-white text-[12px]'>01</span>
                        </div>
                        <div>
                            <img className='mx-auto mb-3' src={StepCardImg} alt="" />
                        </div>
                        <div>
                            <h4 className='text-center text-2xl font-semibold mb-3'>Create Account</h4>
                        </div>
                        <div>
                            <p className='text-center font-medium text-[#627382] xl:px-10'>Sign up for free in seconds. No credit card required to get started.</p>
                        </div>
                    </div>
                    <div className='border border-[#f2f2f2] p-5 rounded-lg bg-white transition-transform duration-300 hover:scale-102'>
                        <div className='flex justify-end mb-9'>
                            <span className='bg-linear-to-l from-[#9514FA] to-[#4F39F6] px-3 py-2 font-semibold rounded-full text-white text-[12px]'>02</span>
                        </div>
                        <div>
                            <img className='mx-auto mb-3' src={PackagePng} alt="" />
                        </div>
                        <div>
                            <h4 className='text-center text-2xl font-semibold mb-3'>Choose Products</h4>
                        </div>
                        <div>
                            <p className='text-center font-medium text-[#627382] xl:px-10'>Browse our catalog and select the tools that fit your needs.</p>
                        </div>
                    </div>
                    <div className='border border-[#f2f2f2] p-5 rounded-lg bg-white transition-transform duration-300 hover:scale-102'>
                        <div className='flex justify-end mb-9'>
                            <span className='bg-linear-to-l from-[#9514FA] to-[#4F39F6] px-3 py-2 font-semibold rounded-full text-white text-[12px]'>03</span>
                        </div>
                        <div>
                            <img className='mx-auto mb-3' src={RocketPng} alt="" />
                        </div>
                        <div>
                            <h4 className='text-center text-2xl font-semibold mb-3'>Start Creating</h4>
                        </div>
                        <div>
                            <p className='text-center font-medium text-[#627382] xl:px-10'>Download and start using your premium tools immediately.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Step;