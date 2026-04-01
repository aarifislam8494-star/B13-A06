import React from 'react';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
    return (
        <div className='bg-[#101727]'>
            <div className='w-10/12 mx-auto text-white grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 pt-10 md:pt-20 gap-5'>
                <div className='col-span-2 max-w-[400px]'>
                    <h2 className='text-3xl font-bold mb-2'>GigiTools</h2>
                    <p className='opacity-70 font-medium'>Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.</p>
                </div>
                <div className=''>
                    <h4 className='text-xl font-semibold mb-2'>Product</h4>
                    <ul className='space-y-1 font-medium'>
                        <li className='opacity-70 hover:opacity-100'><a href="">Features</a></li>
                        <li className='opacity-70 hover:opacity-100'><a href="">Pricing</a></li>
                        <li className='opacity-70 hover:opacity-100'><a href="">Templates</a></li>
                        <li className='opacity-70 hover:opacity-100'><a href="">Integations</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className='text-xl font-semibold mb-2'>Company</h4>
                    <ul className='space-y-1 font-medium'>
                        <li className='opacity-70 hover:opacity-100'><a href="">About</a></li>
                        <li className='opacity-70 hover:opacity-100'><a href="">Blog</a></li>
                        <li className='opacity-70 hover:opacity-100'><a href="">Careers</a></li>
                        <li className='opacity-70 hover:opacity-100'><a href="">Press</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className='text-xl font-semibold mb-2'>Resources</h4>
                    <ul className='space-y-1 font-medium'>
                        <li className='opacity-70 hover:opacity-100'><a href="">Documentation</a></li>
                        <li className='opacity-70 hover:opacity-100'><a href="">Help Center</a></li>
                        <li className='opacity-70 hover:opacity-100'><a href="">Community</a></li>
                        <li className='opacity-70 hover:opacity-100'><a href="">Contact</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className='text-xl font-semibold mb-2'>Social Links</h4>
                    <div className="flex items-center gap-5">
                        <ul className="flex items-center gap-5">
                            <li className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[#0f1117] text-xl cursor-pointer">
                                <FaInstagram />
                            </li>
                            <li className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[#0f1117] text-xl cursor-pointer">
                                <FaFacebookF />
                            </li>
                            <li className='w-12 h-12 rounded-full bg-white flex items-center justify-center text-[#0f1117] text-xl cursor-pointer'>
                                <FaXTwitter />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="w-10/12 mx-auto divider before:bg-white after:bg-white opacity-10 py-5 md:py-10"></div>

            <div className='w-10/12 mx-auto text-white flex justify-between flex-col md:flex-row text-center gap-2 pb-5 '>
                <p className='opacity-70'>© 2026 Digitools. All rights reserved.</p>
                <div>
                    <ul className='flex gap-5 cursor-pointer justify-center'>
                        <li className='opacity-70 hover:opacity-100'>Privacy Policy</li>
                        <li className='opacity-70 hover:opacity-100'>Terms of Service </li>
                        <li className='opacity-70 hover:opacity-100'>Cookies</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Footer;