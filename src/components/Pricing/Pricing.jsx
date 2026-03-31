import React from 'react';

const Pricing = () => {
    return (
        <div>
            <div>
                <div className='border border-[#f2f2f2] p-3'>
                    <div>
                        <h4>Starter</h4>
                        <p>Perfect for getting started</p>
                    </div>
                    <div>
                        <h2>$0</h2>
                        <span>/Month</span>
                    </div>
                    <div>
                        <ul>
                            <li>Access to 10 free tools</li>
                            <li>Basic templates</li>
                            <li>Community support</li>
                            <li>1 project per month</li>
                        </ul>
                    </div>
                    <div>
                        <button>Get Started Free</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pricing;