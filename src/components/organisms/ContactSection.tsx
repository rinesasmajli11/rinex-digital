import React from 'react';
import SectionHeading from '../molecules/SectionHeading';
import Button from '../atoms/Button';

const ContactSection: React.FC = () => {
    return (
        <section id="contact" className="relative py-32 overflow-hidden bg-subtle-light">
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

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mt-24 items-start">

                    {/* Left Side: Contact Form Card */}
                    <div className="glass p-10 rounded-[2.5rem] border border-white/5 relative group transition-all duration-500 hover:border-white/10">
                        <div className="absolute inset-0 bg-white/[0.01] rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition-opacity"></div>

                        <h3 className="text-2xl font-bold text-white mb-8 font-plus-jakarta">Send Us A Message</h3>

                        <form className="flex flex-col gap-6 relative z-10">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                                    rows={5}
                                    className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-white text-sm outline-none focus:border-primary/50 transition-colors placeholder:text-white/20 resize-none"
                                ></textarea>
                            </div>

                            <div className="mt-4">
                                <Button variant="primary" className="w-full py-5 rounded-2xl text-base">
                                    Send Message
                                </Button>
                            </div>
                        </form>
                    </div>

                    {/* Right Side: Contact Info */}
                    <div className="flex flex-col gap-12">

                        {/* Info Items */}
                        <div className="flex items-start gap-6 group">
                            <div className="w-14 h-14 rounded-full glass border border-white/10 flex items-center justify-center transition-all duration-500 group-hover:border-primary/50 group-hover:scale-110">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" />
                                </svg>
                            </div>
                            <div>
                                <h4 className="text-white font-bold text-lg font-plus-jakarta mb-2">Our Location</h4>
                                <p className="text-white/50 text-sm leading-relaxed max-w-[280px]">
                                    Pristina Tech Park, Industrial Zone, <br /> Pristina, Kosovo 10000
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-6 group">
                            <div className="w-14 h-14 rounded-full glass border border-white/10 flex items-center justify-center transition-all duration-500 group-hover:border-primary/50 group-hover:scale-110">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l2.19-2.19a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                                </svg>
                            </div>
                            <div>
                                <h4 className="text-white font-bold text-lg font-plus-jakarta mb-2">Give us a call</h4>
                                <p className="text-white/50 text-sm leading-relaxed">
                                    +383 49 123 456 <br />
                                    Mon — Fri, 9am to 6pm
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-6 group">
                            <div className="w-14 h-14 rounded-full glass border border-white/10 flex items-center justify-center transition-all duration-500 group-hover:border-primary/50 group-hover:scale-110">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                                    <rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                                </svg>
                            </div>
                            <div>
                                <h4 className="text-white font-bold text-lg font-plus-jakarta mb-2">Email Us</h4>
                                <p className="text-white/50 text-sm leading-relaxed">
                                    contact@rinexdigital.com <br />
                                    support@rinexdigital.com
                                </p>
                            </div>
                        </div>

                        {/* Social Links (Extra Luxury) */}
                        <div className="pt-8 flex gap-4">
                            {[1, 2, 3, 4].map((i) => (
                                <div key={i} className="w-12 h-12 rounded-xl glass border border-white/10 flex items-center justify-center transition-all duration-300 hover:border-primary/40 hover:text-primary cursor-pointer text-white/40">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                                    </svg>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ContactSection;
