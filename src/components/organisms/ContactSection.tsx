"use client";

import React from 'react';
import SectionHeading from '../molecules/SectionHeading';
import Button from '../atoms/Button';

const ContactSection: React.FC = () => {
    const contactInfo = [
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l2.19-2.19a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
            ),
            title: "Call Us",
            label: "Phone Number",
            details: "+383 49 266 940 | +383 49 650 161"
        },
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
            ),
            title: "Email Us",
            label: "Email Address",
            details: "rinex.digital@gmail.com"
        }
    ];

    return (
        <section id="contact" className="relative py-16 md:py-24 overflow-hidden bg-[#050505]">
            <div className="absolute inset-0 z-0">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 blur-[150px] rounded-full opacity-40"></div>
                <div className="absolute inset-0 bg-grid-dots opacity-[0.03]"></div>
            </div>

            <div className="max-w-6xl mx-auto px-6 relative z-10 flex flex-col items-center">
                <div className="text-center mb-12 md:mb-16 reveal-on-scroll">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/10 text-[9px] font-black uppercase tracking-[0.2em] text-white/50 mb-4">
                        <span className="w-1 h-1 rounded-full bg-primary animate-pulse"></span>
                        Connect With Excellence
                    </div>
                    <SectionHeading
                        subtitle=""
                        title="Let's Work"
                        gradientTitle="Together"
                        description="Our team is ready to turn your vision into reality."
                        centered={true}
                    />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch w-full">
                    <div className="lg:col-span-7 flex flex-col reveal-on-scroll">
                        <div className="glass h-full max-w-[720px] p-5 md:p-6 rounded-[1.5rem] border border-white/5 relative group transition-all duration-700 hover:border-white/10 overflow-hidden flex flex-col">
                            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent pointer-events-none"></div>

                            <h3 className="text-lg font-bold text-white mb-5 font-syne flex items-center gap-4">
                                Send A Message
                                <span className="h-px flex-grow bg-gradient-to-r from-white/10 to-transparent"></span>
                            </h3>

                            <form className="flex flex-col gap-4 relative z-10 font-inter">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="flex flex-col gap-1.5">
                                        <label className="text-[9px] uppercase font-bold tracking-widest text-white/30 ml-1">Name</label>
                                        <input
                                            type="text"
                                            placeholder="Name"
                                            className="w-full bg-black/40 border border-white/10 rounded-xl p-3 text-white text-[13px] outline-none focus:border-primary/50 focus:bg-black/60 transition-all placeholder:text-white/20"
                                        />
                                    </div>
                                    <div className="flex flex-col gap-1.5">
                                        <label className="text-[9px] uppercase font-bold tracking-widest text-white/30 ml-1">Email</label>
                                        <input
                                            type="email"
                                            placeholder="Email"
                                            className="w-full bg-black/40 border border-white/10 rounded-xl p-3 text-white text-[13px] outline-none focus:border-primary/50 focus:bg-black/60 transition-all placeholder:text-white/20"
                                        />
                                    </div>
                                </div>

                                <div className="flex flex-col gap-1.5">
                                    <label className="text-[9px] uppercase font-bold tracking-widest text-white/30 ml-1">Subject</label>
                                    <input
                                        type="text"
                                        placeholder="Subject"
                                        className="w-full bg-black/40 border border-white/10 rounded-xl p-3 text-white text-[13px] outline-none focus:border-primary/50 focus:bg-black/60 transition-all placeholder:text-white/20"
                                    />
                                </div>

                                <div className="flex flex-col gap-1.5">
                                    <label className="text-[9px] uppercase font-bold tracking-widest text-white/30 ml-1">Message</label>
                                    <textarea
                                        placeholder="Message"
                                        rows={4}
                                        className="w-full bg-black/40 border border-white/10 rounded-xl p-3 text-white text-[13px] outline-none focus:border-primary/50 focus:bg-black/60 transition-all placeholder:text-white/20 resize-none"
                                    ></textarea>
                                </div>

                                <div className="mt-1">
                                    <Button variant="primary" className="w-full py-3.5 rounded-xl text-[12px] font-black uppercase tracking-[0.2em] shadow-[0_10px_30px_rgba(222,201,132,0.2)] hover:scale-[1.01] transition-transform">
                                        Send Message
                                    </Button>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div className="lg:col-span-5 flex flex-col gap-5 reveal-on-scroll delay-200">
                        {contactInfo.map((info, idx) => (
                            <div key={idx} className="glass p-6 rounded-[1.5rem] border border-white/5 flex flex-col gap-3 group hover:border-white/10 transition-all duration-500 hover:translate-x-1">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-lg glass border border-white/10 flex items-center justify-center transition-all duration-500 group-hover:border-primary/50 group-hover:bg-primary/5">
                                        {info.icon}
                                    </div>
                                    <span className="text-white/20 text-[9px] font-bold uppercase tracking-[0.2em]">{info.label}</span>
                                </div>
                                <div className="flex flex-col gap-0.5">
                                    <h4 className="text-white font-bold text-base font-syne group-hover:text-primary transition-colors">{info.title}</h4>
                                    <p className="text-white/30 text-[12px] leading-relaxed font-inter">
                                        {info.details}
                                    </p>
                                </div>
                            </div>
                        ))}

                        <div className="mt-2 p-6 rounded-[1.5rem] bg-gradient-to-br from-primary/5 to-transparent border border-white/5 flex flex-col gap-3">
                            <h4 className="text-white font-bold text-base font-syne">Ready to start?</h4>
                            <p className="text-white/40 text-[12px] leading-relaxed">
                                Join our network of successful partners today.
                            </p>
                            <div className="flex items-center gap-2 text-primary font-bold text-[10px] uppercase tracking-widest cursor-pointer hover:gap-3 transition-all">
                                View Our Process
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
        </section>
    );
};

export default ContactSection;
