"use client";

import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';

import SectionHeading from '../molecules/SectionHeading';
import PortfolioCard from '../molecules/PortfolioCard';

const PortfolioSection: React.FC = () => {
    const swiperRef = useRef<SwiperType | null>(null);

    const projects = [
        {
            title: "Fintech Dashboard",
            category: "Fintech",
            description: "Streamlined user analytics & real-time transactions for next-gen financial tools.",
        },
        {
            title: "E-commerce Platform",
            category: "E-Commerce",
            description: "300% increase in conversion through custom storefront & seamless UX.",
        },
        {
            title: "AI-Powered Tool",
            category: "AI",
            description: "Reduced support tickets by 40% using predictive models and intelligent automation.",
        },
        {
            title: "Crypto Wallet App",
            category: "Blockchain",
            description: "Secure, intuitive interface for managing digital assets with multi-chain support.",
        },
        {
            title: "Health & Fitness Tracker",
            category: "Mobile App",
            description: "Personalized workout routines and real-time health monitoring integrated with wearable tech.",
        },
        {
            title: "Real Estate Portal",
            category: "PropTech",
            description: "Immersive 3D virtual tours and advanced search functionality for modern property listings.",
        }
    ];

    return (
        <section id="portfolio" className="relative py-12 md:py-32 overflow-hidden bg-subtle-light">
            {/* Background Glows */}
            <div className="absolute inset-0 bg-grid pointer-events-none opacity-[0.05]"></div>
            <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/10 blur-[180px] rounded-full pointer-events-none"></div>
            <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-secondary/10 blur-[180px] rounded-full pointer-events-none"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 blur-[150px] rounded-full pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">

                {/* Header with Navigation */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
                    <div className="max-w-2xl text-center md:text-left">
                        <SectionHeading
                            subtitle="Portfolio"
                            title="Real Impact."
                            gradientTitle="Proven Results."
                            description="Explore how we've helped startups and enterprises alike scale and innovate through custom digital solutions."
                            centered={false}
                        />
                    </div>

                    {/* Navigation Arrows */}
                    <div className="flex justify-end gap-3">
                        <button
                            onClick={() => swiperRef.current?.slidePrev()}
                            className="w-12 h-12 flex items-center justify-center bg-white/5 border border-white/10 hover:border-primary/50 text-white transition-all duration-300 rounded-lg group"
                            aria-label="Previous Project"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:-translate-x-1 transition-transform">
                                <path d="m15 18-6-6 6-6" />
                            </svg>
                        </button>
                        <button
                            onClick={() => swiperRef.current?.slideNext()}
                            className="w-12 h-12 flex items-center justify-center bg-white/5 border border-white/10 hover:border-primary/50 text-white transition-all duration-300 rounded-lg group"
                            aria-label="Next Project"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform">
                                <path d="m9 18 6-6-6-6" />
                            </svg>
                        </button>
                    </div>
                </div>

                <div className="relative group">
                    <Swiper
                        onBeforeInit={(swiper) => {
                            swiperRef.current = swiper;
                        }}
                        modules={[Navigation]}
                        spaceBetween={24}
                        slidesPerView={1.2}
                        breakpoints={{
                            640: {
                                slidesPerView: 1.5,
                            },
                            1024: {
                                slidesPerView: 3,
                            }
                        }}
                        className="w-full"
                    >
                        {projects.map((project, index) => (
                            <SwiperSlide key={index}>
                                <div className="h-full">
                                    <PortfolioCard
                                        title={project.title}
                                        category={project.category}
                                        description={project.description}
                                    />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                {/* View More Button */}
                <div className="mt-16 md:mt-24 flex justify-center">
                    <button className="group relative px-8 py-4 bg-transparent text-white font-bold uppercase tracking-widest text-xs transition-all duration-300">
                        <span className="relative z-10">See All Projects</span>
                        <div className="absolute inset-0 border border-white/10 group-hover:border-primary/50 transition-colors duration-300"></div>
                        <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary group-hover:w-full transition-all duration-500"></div>
                    </button>
                </div>
            </div>

            {/* Section Divider */}
            <div className="absolute bottom-0 left-0 w-full section-divider"></div>
            {/* Section Divider */}
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
        </section>
    );
};

export default PortfolioSection;
