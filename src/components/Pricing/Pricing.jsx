import React from 'react';
import { FaCheck } from 'react-icons/fa';

const plans = [
    {
        name: "Starter",
        tagline: "Perfect for getting started",
        price: 0,
        features: [
            "Access to 10 free tools",
            "Basic templates",
            "Community support",
            "1 project per month",
        ],
        cta: "Get Started Free",
        popular: false,
        highlight: false,
    },
    {
        name: "Pro",
        tagline: "Best for professionals",
        price: 29,
        features: [
            "Access to all premium tools",
            "Unlimited templates",
            "Priority support",
            "Unlimited projects",
            "Cloud sync",
            "Advanced analytics",
        ],
        cta: "Start Pro Trial",
        popular: true,
        highlight: true,
    },
    {
        name: "Enterprise",
        tagline: "For teams and businesses",
        price: 99,
        features: [
            "Everything in Pro",
            "Team collaboration",
            "Custom integrations",
            "Dedicated support",
            "SLA guarantee",
            "Custom branding",
        ],
        cta: "Contact Sales",
        popular: false,
        highlight: false,
    },
];

const Pricing = () => {
    return (
         <div className='w-11/12 sm:w-9/12 md:w-10/12 mx-auto my-20'>
            <div className='text-center mb-10'>
                <h2 className='text-3xl md:text-5xl text-[#101727] font-bold mb-3'>Simple, Transparent Pricing</h2>
                <p className='text-[#627382]'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
            </div>

            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {plans.map((plan) => (
                    <div className={plan.popular
                        ? "bg-linear-to-l from-[#9514FA] to-[#4F39F6] text-white rounded-xl p-6 transition-transform duration-300 hover:scale-102"
                        : "border border-[#f2f2f2] rounded-xl p-6 flex flex-col transition-transform duration-300 hover:scale-102"}>
                        {plan.popular &&
                            <div className='relative flex justify-center'>
                                <span className='bg-[#FEF3C6] px-3 py-2 rounded-full text-[#BB4D00] font-semibold absolute bottom-2 '>Most Popular</span>
                            </div>
                        }
                        <div>
                            <h2 className='text-2xl font-bold mb-2'>{plan.name}</h2>
                        </div>
                        <div>
                            <p className={plan.popular
                                ? "text-white mb-4"
                                : 'text-[#627382] font-medium mb-4'}
                            >{plan.tagline}</p>
                        </div>
                        <div className='flex gap-1 items-end mb-3'>
                            <h4 className='text-3xl font-semibold'>${plan.price}</h4>
                            <span className={plan.popular
                                ? "text-white" : 'text-[#627382]'}
                            >/Month</span>
                        </div>
                        <div className='mb-5'>
                            {plan.features.map((f) => (
                                <div className='flex items-center gap-2'>
                                    <span className='text-green-500'><FaCheck /></span>
                                    <li className={plan.popular
                                        ? "list-none text-white"
                                        : 'list-none font-medium text-[#627382]'}
                                    >{f}</li>
                                </div>
                            ))}
                        </div>
                        <div className='mt-auto'>
                            <button
                                className={plan.popular
                                    ? "bg-white hover:bg-linear-to-l hover:from-[#f07167] hover:to-[#e63946] hover:text-white text-[#4F39F6] w-full py-2 px-3 rounded-full font-semibold"
                                    : 'font-semibold bg-linear-to-l from-[#9514FA] to-[#4F39F6] py-2 px-3 rounded-full text-white cursor-pointer hover:bg-linear-to-l hover:from-[#ff0054] hover:to-[#ff5400] hover:text-gray-200 w-full '}>{plan.cta}
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Pricing;