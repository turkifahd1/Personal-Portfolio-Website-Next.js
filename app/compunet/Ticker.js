// components/Ticker.js
'use client';

import { useEffect, useRef, useState } from 'react';

const Ticker = ({ textList }) => {
    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    const tickerRef = useRef(null);

    useEffect(() => {
        const ticker = tickerRef.current;
        const tickerWidth = ticker.scrollWidth;
        let currentScroll = 0;
        const speed = 1; // Adjust speed here
        const interval = 50; // Adjust interval time here

        function animateTicker() {
            currentScroll += speed;
            if (currentScroll >= tickerWidth) {
                currentScroll = 0;
            }
            ticker.scrollLeft = currentScroll;
        }

        const tickerInterval = setInterval(animateTicker, interval);

        return () => clearInterval(tickerInterval);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTextIndex((prevIndex) => (prevIndex + 1) % textList.length);
        }, 3000); // Change the text every 3 seconds

        return () => clearInterval(interval);
    }, [textList.length]);

    return (
        <div className="w-full text-black  overflow-hidden text-center ">
            <div ref={tickerRef} className="ticker-wrapper">
                <div className="ticker">
                    {textList.map((text, index) => (
                        <span
                            key={index}
                            className={`transition-opacity duration-500 ${index === currentTextIndex ? 'opacity-100' : 'opacity-0'}`}
                        >
                            {text}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Ticker;
