import React from 'react';
import { FaCreditCard, FaHotel, FaSearch, FaSuitcaseRolling } from 'react-icons/fa';

const HowItWorks = () => {
    const steps = [
        {
            icon: <FaSearch />,
            title: 'Search & Discover',
            description: 'Effortlessly find your ideal stay by searching thousands of properties in your desired destination with smart filters.',
        },
        {
            icon: <FaHotel />,
            title: 'Select Your Room',
            description: 'Browse through detailed descriptions, high-quality photos, and genuine reviews to pick the perfect room for your needs.',
        },
        {
            icon: <FaCreditCard />,
            title: 'Secure Your Booking',
            description: 'Complete your reservation quickly and securely with our simple booking process and instant confirmation.',
        },
        {
            icon: <FaSuitcaseRolling />,
            title: 'Enjoy Your Stay',
            description: 'Receive all details, manage your booking, and relax knowing your comfortable and memorable experience awaits.',
        },
    ];

    return (
        <section className="relative w-11/12 mx-auto overflow-hidden py-16 md:py-24">
            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-12">
                    <h2 className="text-4xl lg:text-5xl font-extrabold text-primary-focus mb-4 relative inline-block">
                        Your Easy Booking Journey
                        <span className="block w-28 h-1 bg-amber-300 mx-auto mt-4 rounded-full"></span>
                    </h2>
                    <p className="text-lg text-base-content max-w-3xl mx-auto">
                        Booking your dream hotel has never been easier. Follow these simple steps to secure your perfect getaway with Hotella.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className="bg-opacity-80 backdrop-blur-sm p-8 md:p-10 rounded-xl shadow-lg
                                       flex flex-col items-center text-center transition-all duration-300
                                       hover:bg-opacity-90 hover:shadow-xl transform hover:-translate-y-1"
                        >
                            <div className="text-5xl mb-4 text-primary">
                                {step.icon} {/* Render the React Icon component directly */}
                            </div>
                            <h3 className="text-3xl font-bold text-neutral mb-2 relative pb-2">
                                {step.title}
                                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-amber-300 rounded-full"></span>
                            </h3>
                            <p className="text-lg text-base-content leading-relaxed">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;