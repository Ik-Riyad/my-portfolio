import React, { useEffect, useState } from 'react';

const Footer = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Show button when scrolling down
    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };
        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    // Scroll to top smoothly
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <div className='h-30 bg-secondary mt-20 flex justify-around items-center'>
            <div className='space-y-2'>
                <h3 className=''>© 2025 Ibrahim Khan Riyadh. All rights reserved.</h3>
                <p className='text-xs '>Built with React, and Tailwind CSS</p>
            </div>
            {
                isVisible && <button onClick={scrollToTop} className='btn bg-primary'>Back to Top</button>
            }
        </div>
    );
};

export default Footer;