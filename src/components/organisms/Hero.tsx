import React from 'react';
import Image from 'next/image';
import Button from '../atoms/Button';
import StatItem from '../molecules/StatItem';

const Hero: React.FC = () => {
    return (
        <section className="relative min-h-screen pt-48 lg:pt-48 pb-20 flex items-center overflow-hidden">
            {/* Background Mesh/Glow */}
            <div className="absolute inset-0 bg-[#05070a]/50 pointer-events-none"></div>
            <div className="absolute top-0 left-0 w-full h-full bg-grid pointer-events-none opacity-10"></div>

            <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/20 blur-[180px] rounded-full pointer-events-none"></div>
            <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-secondary/15 blur-[180px] rounded-full pointer-events-none"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 blur-[150px] rounded-full pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center w-full">
                {/* 1. Header & Text Content */}
                <div className="relative z-10 flex flex-col gap-5 md:gap-8 items-center text-center lg:items-start lg:text-left order-1">
                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-[1.2] lg:leading-[1.1] tracking-tight text-white font-plus-jakarta">
                        Build Modern <br className="hidden md:block" />
                        <span className="text-gradient-primary">Websites & Digital Experiences</span> <br className="hidden md:block" />
                        That Elevate Your Brand
                    </h1>

                    <p className="text-base md:text-lg text-white/60 max-w-xl leading-relaxed">
                        Rinex Digital helps businesses grow through modern websites, intuitive user experiences, and strategic digital solutions.
                        We turn ideas into powerful digital products that help your brand stand out online.
                    </p>

                    {/* Desktop CTA Buttons (Hidden on Mobile) */}
                    <div className="hidden lg:flex flex-wrap gap-4 mt-4">
                        <Button variant="primary">
                            Start Your Project →
                        </Button>
                        <Button variant="outline">
                            Our Portfolio
                        </Button>
                    </div>
                </div>

                {/* 2. Visual / Image (Order 2 on Mobile) */}
                <div className="relative z-10 block order-2">
                    <div className="relative w-full aspect-square max-w-[450px] lg:max-w-[600px] mx-auto group">
                        {/* Floating Elements (Hidden on tiny screens) */}
                        <div className="absolute top-1/4 -right-4 w-10 h-10 md:w-12 md:h-12 glass rounded-2xl hidden sm:flex items-center justify-center animate-pulse">
                            <code className="text-primary font-bold text-xs md:text-sm">{`</>`}</code>
                        </div>
                        <div className="absolute bottom-1/4 -left-4 w-12 md:w-14 h-12 md:h-14 glass rounded-2xl hidden sm:flex items-center justify-center animate-bounce duration-[4000ms]">
                            <code className="text-primary font-bold text-xs md:text-sm">{`</>`}</code>
                        </div>

                        {/* Main Mockup */}
                        <div className="relative w-full h-full group-hover:scale-[1.02] transition-transform duration-500">
                            <Image
                                src="/herobanner4.png"
                                alt="Rinex Digital UI Mockup"
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>




                    </div>
                </div>

                {/* 3. Mobile CTA Button (Order 3, Hidden on Desktop) */}
                <div className="relative z-10 flex lg:hidden justify-center order-3 mb-8">
                    <Button variant="primary" className="w-full sm:w-auto px-12">
                        Start Your Project →
                    </Button>
                </div>
            </div>

        </section>
    );
};

export default Hero;
