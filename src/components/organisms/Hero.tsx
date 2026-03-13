"use client";

import React, { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import Button from '../atoms/Button';

const Counter: React.FC<{ end: number; duration?: number; suffix?: string }> = ({ end, duration = 2000, suffix = "" }) => {
    const [count, setCount] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const containerRef = useRef<HTMLSpanElement>(null);
    const started = useRef(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !started.current) {
                    setIsVisible(true);
                    started.current = true;
                }
            },
            { threshold: 0.1 }
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!isVisible) return;

        let startTimestamp: number | null = null;
        const step = (timestamp: number) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            setCount(Math.floor(progress * end));
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
    }, [isVisible, end, duration]);

    return <span ref={containerRef}>{count}{suffix}</span>;
};

const Hero: React.FC = () => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const title = "Future of Digital Excellence";
    const words = title.split(" ");

    return (
        <section className="relative min-h-[90vh] lg:min-h-screen pt-32 pb-16 flex flex-col items-center justify-center overflow-hidden bg-black">

            {/* --- BACKGROUND PHOTO --- */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                <Image
                    src="/finalhero.png"
                    alt="Hero Background"
                    fill
                    priority
                    className="object-cover opacity-60"
                />
                {/* Shadow/Dark Overlay */}
                <div className="absolute inset-0 bg-black/30"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black"></div>

                {/* Subtle Overlays (Reduced) */}
                <div className="absolute inset-0 bg-grid-dots opacity-[0.02]"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/5 blur-[120px] rounded-full opacity-20"></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col items-center text-center">

                {/* --- TOP BADGE (Mobile Only) --- */}
                <div className="mb-6 animate-text-reveal md:hidden" style={{ animationDelay: '0.1s' }}>
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/10 text-[9px] font-black uppercase tracking-[0.3em] text-white/60">
                        <span className="flex h-1.5 w-1.5 relative">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-primary"></span>
                        </span>
                        Elevating Digital Frontiers
                    </div>
                </div>

                {/* --- MAIN TYPOGRAPHY (Reduced Size + Desktop Margin) --- */}
                <h1 className="text-4xl md:text-5xl lg:text-[4.5rem] font-black leading-[1.1] tracking-tight text-white mb-6 md:mt-12 font-plus-jakarta max-w-4xl">
                    {mounted && words.map((word, i) => (
                        <span key={i} className="inline-block overflow-hidden mr-[0.25em] last:mr-0">
                            <span
                                className="inline-block animate-text-reveal"
                                style={{
                                    animationDelay: `${0.3 + (i * 0.1)}s`,
                                    background: i >= 2 ? 'linear-gradient(to bottom, #FFF, #DEC984)' : 'none',
                                    WebkitBackgroundClip: i >= 2 ? 'text' : 'none',
                                    WebkitTextFillColor: i >= 2 ? 'transparent' : 'inherit'
                                }}
                            >
                                {word}
                            </span>
                        </span>
                    ))}
                </h1>

                <p className="max-w-xl text-base md:text-lg text-white leading-relaxed mb-10 animate-text-reveal" style={{ animationDelay: '0.8s' }}>
                    We weave artificial intelligence with premium design to create
                    digital landmarks that redefine your industry's standards.
                </p>

                {/* --- CTAs (Single Button with Gold Gradient) --- */}
                <div className="flex flex-col items-center gap-6 animate-text-reveal" style={{ animationDelay: '1s' }}>
                    <Button
                        variant="primary"
                        className="px-10 py-4.5 rounded-2xl text-[12px] font-black uppercase tracking-[0.2em] shadow-[0_15px_35px_rgba(222,201,132,0.2)] hover:bg-primary-hover transition-all hover:scale-105 active:scale-95 shimmer-effect !border-[#DEC984] !text-[#DEC984]"
                    >
                        Initialize Project
                    </Button>
                </div>

                {/* --- STATS BAR (More Compact + Multi-Column Mobile) --- */}
                <div className="grid grid-cols-3 md:grid-cols-3 gap-2 md:gap-6 mt-16 md:mt-24 w-full max-w-3xl animate-text-reveal" style={{ animationDelay: '1.2s' }}>
                    {[
                        { label: 'Success Rate', value: 99, suffix: '%' },
                        { label: 'Happy Clients', value: 150, suffix: '+' },
                        { label: 'Awards Won', value: 12, suffix: '' }
                    ].map((stat, i) => (
                        <div key={i} className="glass p-3 md:p-6 rounded-[1.2rem] md:rounded-[1.5rem] border border-white/5 text-center group hover:border-[#DEC984]/30 transition-all duration-500">
                            <p className="text-[7px] md:text-[9px] font-bold text-white/30 uppercase tracking-[0.2em] mb-1 md:mb-1.5">{stat.label}</p>
                            <h4 className="text-base md:text-2xl font-black text-white group-hover:text-[#DEC984] transition-colors leading-none">
                                {mounted ? <Counter end={stat.value} suffix={stat.suffix} /> : '0'}
                            </h4>
                        </div>
                    ))}
                </div>
            </div>

            {/* --- DECORATIVE ELEMENTS --- */}
            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
        </section>
    );
};

export default Hero;
