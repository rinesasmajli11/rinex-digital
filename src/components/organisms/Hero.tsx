"use client";

import React, { useEffect, useState, useRef } from 'react';
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
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        setMounted(true);

        const video = videoRef.current;
        if (!video) return;

        video.muted = true;
        video.defaultMuted = true;
        video.setAttribute('playsinline', 'true');

        const playVideo = async () => {
            try {
                await video.play();
            } catch {
                // Mobile browsers may still block autoplay in some cases.
            }
        };

        playVideo();
    }, []);

    const title = "Building Modern Websites & Digital Experiences";
    const words = title.split(" ");

    return (
        <section className="relative min-h-[90vh] lg:min-h-screen pt-32 pb-16 flex flex-col items-center justify-center overflow-hidden bg-black">

            {/* --- BACKGROUND VIDEO --- */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                <video
                    ref={videoRef}
                    className="h-full w-full object-cover opacity-36"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                    poster="/hero.png"
                >
                    <source src="/herovideo.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.82),rgba(0,0,0,0.46),rgba(0,0,0,0.9))]"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(222,201,132,0.36),transparent_44%)]"></div>
                <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(222,201,132,0.18),transparent_36%,rgba(222,201,132,0.1)_100%)]"></div>
                <div className="absolute inset-0 bg-grid-dots opacity-[0.02]"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/15 blur-[120px] rounded-full opacity-35"></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col items-center text-center">

                {/* --- MAIN TYPOGRAPHY --- */}
                <h1 className="text-[30px] md:text-[42px] lg:text-[58px] font-semibold leading-[1.02] tracking-tight text-white mb-4 md:mt-12 font-inter max-w-3xl">
                    {mounted && words.map((word, i) => (
                        <span key={i} className="inline-block overflow-hidden mr-[0.2em] last:mr-0">
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

                <p className="max-w-[320px] md:max-w-md text-[14px] md:text-[20px] text-white/72 leading-[1.7] tracking-[0.01em] mb-8 animate-text-reveal font-outfit" style={{ animationDelay: '0.8s' }}>
                    We build modern websites and digital solutions that help your business grow.
                </p>

                {/* --- CTAs (Single Button with Gold Gradient) --- */}
                <div className="flex flex-col items-center gap-6 animate-text-reveal" style={{ animationDelay: '1s' }}>
                    <Button
                        variant="primary"
                        className="px-10 py-4 rounded-2xl text-[11px] font-black uppercase tracking-[0.24em] shadow-[0_20px_40px_rgba(222,201,132,0.15)] hover:bg-primary-hover transition-all hover:scale-105 active:scale-95 shimmer-effect !border-[#DEC984] !text-[#DEC984]"
                    >
                        Book a Consultation
                    </Button>
                </div>

                {/* --- STATS BAR (Syne + Outfit Mix) --- */}
                <div className="grid grid-cols-3 md:grid-cols-3 gap-2 md:gap-6 mt-16 md:mt-24 w-full max-w-3xl animate-text-reveal" style={{ animationDelay: '1.2s' }}>
                    {[
                        { label: 'Success Rate', value: 99, suffix: '%' },
                        { label: 'Happy Clients', value: 20, suffix: '+' },
                        { label: 'Years Experience', value: 5, suffix: '+ ' }
                    ].map((stat, i) => (
                        <div key={i} className="glass p-3 md:p-6 rounded-[1.2rem] md:rounded-[1.5rem] border border-white/5 text-center group hover:border-[#DEC984]/30 transition-all duration-500">
                            <p className="text-[7px] md:text-[9px] font-bold text-[#DEC984] uppercase tracking-[0.3em] mb-2 md:mb-1.5">
                                {stat.label === 'Success Rate' ? (
                                    <>
                                        <span className="md:hidden">
                                            Success
                                            <br />
                                            Rate
                                        </span>
                                        <span className="hidden md:inline">{stat.label}</span>
                                    </>
                                ) : (
                                    stat.label
                                )}
                            </p>
                            <h4 className="text-[15px] md:text-[22px] font-bold text-white group-hover:text-[#DEC984] transition-colors leading-none font-outfit">
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
