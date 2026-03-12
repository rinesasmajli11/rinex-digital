"use client";

import React, { useRef } from 'react';
import SectionHeading from '../molecules/SectionHeading';
import Button from '../atoms/Button';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';

const ContactSection: React.FC = () => {
    const swiperRef = useRef<SwiperType | null>(null);

    const contactInfo = [
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" />
                </svg>
            ),
            title: "Our Location",
            details: (
                <>
                    Pristina Tech Park, Industrial Zone, <br /> Pristina, Kosovo 10000
                </>
            )
        },
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l2.19-2.19a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
            ),
            title: "Give us a call",
            details: (
                <>
                    +383 49 123 456 <br />
                    Mon — Fri, 9am to 6pm
                </>
            )
        },
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
            ),
            title: "Email Us",
            details: (
                <>
                    contact@rinexdigital.com <br />
                    support@rinexdigital.com
                </>
            )
        }
    ];

    return (
        <section id="contact" className="relative py-16 md:py-32 overflow-hidden bg-subtle-light">
            {/* Background Glows */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/5 blur-[150px] rounded-full pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10 reveal-on-scroll">
                <SectionHeading
                    subtitle="Contact Us"
                    title="Get In Touch With"
                    gradientTitle="Rinex Digital"
                    description="Have a question or a project in mind? We're here to help you turn your digital dreams into reality."
                    centered={true}
                />

                <div className="flex flex-col items-center gap-16 lg:gap-20 mt-16 md:mt-24">

                    {/* Contact Form Card (Centered on all devices) */}
                    <div className="w-full max-w-xl glass p-8 md:p-10 rounded-[2.5rem] border border-white/5 relative group transition-all duration-500 hover:border-white/10 mx-auto overflow-hidden">
                        <div className="absolute inset-0 bg-white/[0.01] rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition-opacity"></div>

                        <h3 className="text-2xl font-bold text-white mb-8 font-plus-jakarta text-center">Send Us A Message</h3>

                        <form className="flex flex-col gap-5 relative z-10 w-full">
                            <div className="flex flex-col gap-2">
                                <input
                                    type="text"
                                    placeholder="Your full name"
                                    className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-white text-sm outline-none focus:border-primary/50 transition-colors placeholder:text-white/20"
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <input
                                    type="email"
                                    placeholder="Your email address"
                                    className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-white text-sm outline-none focus:border-primary/50 transition-colors placeholder:text-white/20"
                                />
                            </div>

                            <div className="flex flex-col gap-2">
                                <input
                                    type="text"
                                    placeholder="Subject"
                                    className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-white text-sm outline-none focus:border-primary/50 transition-colors placeholder:text-white/20"
                                />
                            </div>

                            <div className="flex flex-col gap-2">
                                <textarea
                                    placeholder="Write your message here..."
                                    rows={4}
                                    className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-white text-sm outline-none focus:border-primary/50 transition-colors placeholder:text-white/20 resize-none"
                                ></textarea>
                            </div>

                            <div className="mt-2">
                                <Button variant="primary" className="w-full py-4 rounded-2xl text-base">
                                    Send Message
                                </Button>
                            </div>
                        </form>
                    </div>

                    {/* Contact Info (Below Form) */}
                    <div className="w-full max-w-5xl overflow-hidden mx-auto">

                        {/* Mobile Swiper (hidden on desktop) */}
                        <div className="lg:hidden w-full -mx-4 px-4 overflow-visible">
                            <Swiper
                                onBeforeInit={(swiper) => {
                                    swiperRef.current = swiper;
                                }}
                                modules={[Navigation]}
                                spaceBetween={20}
                                slidesPerView={1.2}
                                className="w-full pb-8" // Padding needed for glass shadow
                            >
                                {contactInfo.map((info, idx) => (
                                    <SwiperSlide key={idx}>
                                        <div className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-4 md:gap-6 group glass p-6 md:p-8 rounded-2xl border border-white/5 h-full">
                                            <div className="w-14 h-14 rounded-full glass border border-white/10 flex items-center justify-center transition-all duration-500 group-hover:border-primary/50 group-hover:scale-110 shrink-0">
                                                {info.icon}
                                            </div>
                                            <div>
                                                <h4 className="text-white font-bold text-base md:text-lg font-plus-jakarta mb-1 md:mb-2">{info.title}</h4>
                                                <p className="text-white/50 text-[13px] md:text-sm leading-relaxed max-w-[280px]">
                                                    {info.details}
                                                </p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>

                        {/* Desktop List (horizontal row, centered, hidden on mobile) */}
                        <div className="hidden lg:flex flex-row flex-wrap justify-center items-start gap-12 lg:gap-16 w-full mt-4">
                            {contactInfo.map((info, idx) => (
                                <div key={idx} className="flex flex-col items-center text-center gap-4 group">
                                    <div className="w-14 h-14 rounded-full glass border border-white/10 flex items-center justify-center transition-all duration-500 group-hover:border-primary/50 group-hover:scale-110">
                                        {info.icon}
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold text-base font-plus-jakarta mb-2">{info.title}</h4>
                                        <p className="text-white/50 text-[13px] leading-relaxed">
                                            {info.details}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>

                </div>
            </div>
            {/* Section Divider */}
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
        </section>
    );
};

export default ContactSection;
