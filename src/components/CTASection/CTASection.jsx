import React from 'react';

const CTASection = () => {
    return (
        <div className="bg-violet-600 py-20 px-6 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Ready To Transform Your Workflow?
            </h2>
            <p className="text-purple-200 mb-8">
                Join thousands of professionals who are already using Digitools to work smarter. Start your free trial today.
            </p>

            <div className="flex justify-center gap-2 sm:gap-4 mb-6">
                <button className="bg-white text-violet-600 font-semibold py-3 px-6 rounded-full cursor-pointer hover:bg-linear-to-l hover:from-[#4cc9f0] hover:to-[#2a9d8f] hover:text-white">
                    Explore Products
                </button>
                <button className="bg-transparent text-white font-semibold py-3 px-6 rounded-full border-2 border-white cursor-pointer hover:bg-linear-to-l hover:from-[#bbdfc5] hover:to-[#ff579f] hover:border-[#bbdfc5]">
                    View Pricing
                </button>
            </div>

            <p className="text-purple-200 text-sm">
                14-day free trial • No credit card required • Cancel anytime
            </p>
        </div>
    );
};

export default CTASection;