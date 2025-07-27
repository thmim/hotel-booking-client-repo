import React, { useState, useEffect } from 'react';
import { FaTimes } from 'react-icons/fa';
import promotionImage from '../assets/promotion.jpg'

const PromotionalModal = () => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsOpen(true);
        }, 2000);

        // Cleanup the timer if the component unmounts
        return () => clearTimeout(timer);
    }, []);

    const handleCloseModal = () => {
        setIsOpen(false);
    };

    // If the modal is not open, don't render anything
    if (!isOpen) {
        return null;
    }

    return (

        <div className={`modal ${isOpen ? 'modal-open' : ''}`}>
            <div className="modal-box p-0 relative overflow-hidden max-w-2xl w-11/12">
                {/* Close button */}
                <button
                    onClick={handleCloseModal}
                    className="btn btn-sm btn-circle absolute right-4 top-4 z-20 bg-white text-gray-800 hover:bg-gray-200 border-none"
                >
                    <FaTimes className="text-xl" />
                </button>

                {/* Promotional Content */}
                <div
                    className="relative bg-cover bg-center h-[350px] md:h-[450px] flex items-center justify-center"
                    style={{
                        backgroundImage: `url(${promotionImage})`,
                        backgroundColor: '#a78bfa', // Fallback color
                    }}
                    onError={(e) => { e.target.style.backgroundImage = 'none'; e.target.style.backgroundColor = '#a78bfa'; }}
                >

                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center p-4">
                        <div className="text-center text-white max-w-xl px-4">
                            <h2 className="text-3xl md:text-4xl font-bold mb-3">
                                Special Offers & Promotions!
                            </h2>
                            <p className="text-lg md:text-xl mb-6 leading-relaxed">
                                Unlock exclusive discounts on your next stay. Limited time offers – book now and save big!
                            </p>
                            {/* Call to action button */}

                            <button className="btn btn-warning text-black font-semibold py-3 px-8 rounded-full transition duration-300 hover:scale-105">
                                View All Offers
                            </button>

                        </div>
                    </div>
                </div>
            </div>

            <div className="modal-backdrop" onClick={handleCloseModal}></div>
        </div>
    );
};

export default PromotionalModal;