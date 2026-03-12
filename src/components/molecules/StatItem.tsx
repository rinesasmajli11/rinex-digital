"use client";

import React, { useEffect, useState, useRef } from 'react';

interface StatItemProps {
    value: string;
    label: string;
}

const StatItem: React.FC<StatItemProps> = ({ value, label }) => {
    const [count, setCount] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const elementRef = useRef<HTMLDivElement>(null);

    // Parse the value string (e.g., "120+", "15K", "10M")
    const numericPart = parseInt(value.replace(/[^0-9]/g, '')) || 0;
    const suffix = value.replace(/[0-9]/g, '');

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.5 }
        );

        if (elementRef.current) {
            observer.observe(elementRef.current);
        }

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!isVisible) return;

        let startTimestamp: number | null = null;
        const duration = 2000; // 2 seconds

        const step = (timestamp: number) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);

            // Easing function (easeOutQuart)
            const easeProgress = 1 - Math.pow(1 - progress, 4);

            setCount(Math.floor(easeProgress * numericPart));

            if (progress < 1) {
                window.requestAnimationFrame(step);
            } else {
                setCount(numericPart);
            }
        };

        window.requestAnimationFrame(step);
    }, [isVisible, numericPart]);

    return (
        <div ref={elementRef} className="flex flex-col gap-0 md:gap-1 text-center">
            <span className="text-2xl sm:text-3xl md:text-5xl font-bold text-white font-plus-jakarta tracking-tight font-variant-numeric: tabular-nums">
                {count}{suffix}
            </span>
            <span className="text-[10px] sm:text-xs md:text-sm text-white/50 uppercase tracking-widest font-medium mt-1">
                {label}
            </span>
        </div>
    );
};

export default StatItem;
