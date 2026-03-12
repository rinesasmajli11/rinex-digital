"use client";

import React, { useRef } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';

import SectionHeading from '../molecules/SectionHeading';
import FeatureCard from '../molecules/FeatureCard';
import StatItem from '../molecules/StatItem';

const AboutSection: React.FC = () => {
    const swiperRef = useRef<SwiperType | null>(null);

    const features = [
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m18 16 4-4-4-4" /><path d="m6 8-4 4 4 4" /><path d="m14.5 4-5 16" />
                </svg>
            ),
            title: "Digital Innovation",
            description: "We leverage the latest technologies to build forward-thinking solutions that keep your business ahead of the curve."
        },
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
            ),
            title: "Creative Excellence",
            description: "Our designs are not just beautiful—they are crafted to drive engagement and deliver exceptional user experiences."
        },
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" /><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" /><path d="M2 12h20" />
                </svg>
            ),
            title: "Strategic Growth",
            description: "We focus on data-driven strategies that help scale your brand and maximize your digital presence."
        }
    ];

    return (
        <section id="about" className="relative py-24 md:py-32 overflow-hidden bg-subtle-light">
            {/* Background Decor */}
            <div className="absolute top-0 left-0 w-full h-full bg-grid pointer-events-none opacity-[0.03]"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-primary/5 blur-[180px] rounded-full pointer-events-none"></div>
            <div className="absolute -left-32 top-0 w-64 h-64 bg-secondary/10 blur-[100px] rounded-full pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col items-center gap-16 md:gap-20">

                {/* Header with Navigation */}
                <div className="w-full flex flex-col md:flex-row md:items-end justify-between gap-8 px-0">
                    <div className="max-w-2xl text-center md:text-left mx-auto md:mx-0">
                        <SectionHeading
                            subtitle="Who We Are"
                            title="Transforming Ideas into"
                            gradientTitle="Digital Reality"
                            description="Rinex Digital is a full-service digital agency dedicated to elevating brands through innovation and design. We combine creative passion with technical expertise to build solutions that matter."
                            centered={false}
                        />
                    </div>

                    {/* Navigation Arrows */}
                    <div className="flex justify-end gap-3">
                        <button
                            onClick={() => swiperRef.current?.slidePrev()}
                            className="w-12 h-12 flex items-center justify-center bg-white/5 border border-white/10 hover:border-primary/50 text-white transition-all duration-300 rounded-lg group"
                            aria-label="Previous Feature"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:-translate-x-1 transition-transform">
                                <path d="m15 18-6-6 6-6" />
                            </svg>
                        </button>
                        <button
                            onClick={() => swiperRef.current?.slideNext()}
                            className="w-12 h-12 flex items-center justify-center bg-white/5 border border-white/10 hover:border-primary/50 text-white transition-all duration-300 rounded-lg group"
                            aria-label="Next Feature"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform">
                                <path d="m9 18 6-6-6-6" />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Features Content */}
                <div className="w-full">
                    <div className="md:hidden">
                        <Swiper
                            onBeforeInit={(swiper) => {
                                swiperRef.current = swiper;
                            }}
                            modules={[Navigation]}
                            spaceBetween={24}
                            slidesPerView={1.2}
                            className="w-full"
                        >
                            {features.map((feature, index) => (
                                <SwiperSlide key={index}>
                                    <FeatureCard
                                        icon={feature.icon}
                                        title={feature.title}
                                        description={feature.description}
                                    />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>

                    <div className="hidden md:grid grid-cols-3 gap-8 w-full">
                        {features.map((feature, index) => (
                            <div key={index} className="reveal-on-scroll" style={{ transitionDelay: `${index * 100}ms` }}>
                                <FeatureCard
                                    icon={feature.icon}
                                    title={feature.title}
                                    description={feature.description}
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Step 3: Horizontal Stats Row */}
                <div className="flex flex-row justify-center items-center gap-8 md:gap-24 py-16 border-t border-b border-white/5 w-full overflow-hidden">
                    <div className="hover:scale-105 transition-transform duration-300 shrink-0">
                        <StatItem value="150+" label="Websites Built" />
                    </div>
                    <div className="hover:scale-105 transition-transform duration-300 shrink-0">
                        <StatItem value="120+" label="Happy Clients" />
                    </div>
                    <div className="hover:scale-105 transition-transform duration-300 shrink-0">
                        <StatItem value="99%" label="Success Rate" />
                    </div>
                </div>
            </div>

            {/* Section Divider */}
            <div className="absolute bottom-0 left-0 w-full section-divider"></div>
        </section>
    );
};

export default AboutSection;
