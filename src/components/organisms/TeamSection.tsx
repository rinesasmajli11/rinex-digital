"use client";

import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';

import SectionHeading from '../molecules/SectionHeading';
import MemberCard from '../molecules/MemberCard';
import Button from '../atoms/Button';

const TeamSection: React.FC = () => {
    const swiperRef = useRef<SwiperType | null>(null);

    const members = [
        {
            name: "Rinesa Smajli",
            role: "Software Engineer",
            image: "/rinesa.jpeg"
        },
        {
            name: "Rina Hoti",
            role: "Software Engineer",
            // image: "/team2.jpg"
        },

    ];

    return (
        <section id="team" className="relative py-24 md:py-32 overflow-hidden bg-subtle-dark">
            {/* Background Decor */}
            <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[60%] bg-primary/10 blur-[180px] rounded-full pointer-events-none"></div>
            <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-secondary/10 blur-[180px] rounded-full pointer-events-none"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 blur-[150px] rounded-full pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-20 items-center">

                    {/* Left Column: Content */}
                    <div className="lg:col-span-4 flex flex-col gap-8 md:gap-10">
                        <div className="flex flex-col md:flex-row md:items-end justify-between items-start gap-6">
                            <div className="text-center md:text-left mx-auto md:mx-0">
                                <SectionHeading
                                    subtitle="Expert Team"
                                    title="Meet Our"
                                    gradientTitle="Creative Minds"
                                    description="Our team of dedicated experts combines decades of experience in digital innovation, design, and strategic growth."
                                    centered={false}
                                />
                            </div>

                            {/* Mobile Navigation Arrows */}
                            <div className="flex md:hidden justify-end w-full gap-3 mt-4">
                                <button
                                    onClick={() => swiperRef.current?.slidePrev()}
                                    className="w-10 h-10 flex items-center justify-center bg-white/5 border border-white/10 hover:border-primary/50 text-white transition-all duration-300 rounded-lg"
                                    aria-label="Previous Member"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="m15 18-6-6 6-6" />
                                    </svg>
                                </button>
                                <button
                                    onClick={() => swiperRef.current?.slideNext()}
                                    className="w-10 h-10 flex items-center justify-center bg-white/5 border border-white/10 hover:border-primary/50 text-white transition-all duration-300 rounded-lg"
                                    aria-label="Next Member"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="m9 18 6-6-6-6" />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        <div className="flex flex-col gap-6">
                            <div className="flex items-center gap-4 group cursor-default">
                                <div className="w-12 h-12 rounded-full glass border border-white/10 flex items-center justify-center group-hover:border-primary/50 transition-colors">
                                    <span className="text-primary font-bold">01</span>
                                </div>
                                <div>
                                    <h5 className="text-white font-bold text-sm">Strategic Excellence</h5>
                                    <p className="text-white/40 text-[11px]">Merging business goals with tech.</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 group cursor-default">
                                <div className="w-12 h-12 rounded-full glass border border-white/10 flex items-center justify-center group-hover:border-primary/50 transition-colors">
                                    <span className="text-primary font-bold">02</span>
                                </div>
                                <div>
                                    <h5 className="text-white font-bold text-sm">Agile Methodology</h5>
                                    <p className="text-white/40 text-[11px]">Rapid iteration and transparency.</p>
                                </div>
                            </div>
                        </div>

                        <div className="pt-4 flex justify-center md:justify-start">
                            <Button variant="outline">
                                See Full Team
                            </Button>
                        </div>
                    </div>

                    {/* Right Column: Members (Slider on Mobile, Grid on Desktop) */}
                    <div className="lg:col-span-8 w-full">
                        <div className="md:hidden">
                            <Swiper
                                onBeforeInit={(swiper) => {
                                    swiperRef.current = swiper;
                                }}
                                modules={[Navigation]}
                                spaceBetween={20}
                                slidesPerView={1.2}
                                className="w-full"
                            >
                                {members.map((member, index) => (
                                    <SwiperSlide key={index}>
                                        <MemberCard
                                            name={member.name}
                                            role={member.role}
                                        />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>

                        <div className="hidden md:grid grid-cols-2 gap-10">
                            {members.map((member, index) => (
                                <div key={index} className="reveal-on-scroll" style={{ transitionDelay: `${index * 200}ms` }}>
                                    <MemberCard
                                        name={member.name}
                                        role={member.role}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Section Divider */}
            <div className="absolute bottom-0 left-0 w-full section-divider"></div>
        </section>
    );
};

export default TeamSection;
