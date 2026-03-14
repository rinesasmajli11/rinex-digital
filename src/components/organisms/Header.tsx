"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Logo from '../atoms/Logo';
import NavMenu from '../molecules/NavMenu';
import Button from '../atoms/Button';
import NavLink from '../atoms/NavLink';

const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Members', href: '#team' },
    { name: 'Contact', href: '#contact' },
];

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 px-4 py-1.5 md:px-6 md:py-3 ${isScrolled ? 'bg-[#050505]/96 backdrop-blur-md border-b border-white/5 shadow-lg shadow-black/25' : 'bg-black/10 backdrop-blur-[2px] border-b border-transparent'}`}>
            <div className="max-w-7xl mx-auto flex items-center justify-between relative z-10">
                <Logo />

                <NavMenu />

                <div className="flex items-center gap-3">
                    <Button variant="outline" className="hidden lg:flex !px-6 !py-2.5 !text-[12px] !border-[#DEC984] !text-[#DEC984]">
                        Book a Consultation
                    </Button>

                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className={`md:hidden relative w-10 h-10 flex items-center justify-center rounded-lg transition-all duration-500 z-50 border ${isMenuOpen ? 'bg-black/55 border-[#DEC984]/30' : 'bg-white/[0.03] border-white/5'}`}
                        aria-label="Toggle Menu"
                    >
                        {isMenuOpen ? (
                            <span className="text-[#DEC984] text-lg leading-none font-semibold">X</span>
                        ) : (
                            <div className="flex flex-col gap-1.5 w-5">
                                <span className="h-0.5 bg-[#DEC984] rounded-full w-5"></span>
                                <span className="h-0.5 bg-[#DEC984] rounded-full w-3 ml-auto"></span>
                                <span className="h-0.5 bg-[#DEC984] rounded-full w-5"></span>
                            </div>
                        )}
                    </button>
                </div>
            </div>

            <div className={`fixed inset-0 h-screen w-screen z-40 md:hidden transition-all duration-700 ease-[cubic-bezier(0.85,0,0.15,1)] ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="absolute inset-0 min-h-screen bg-[#050505] backdrop-blur-2xl">
                    <div className="absolute top-1/4 -right-20 w-80 h-80 bg-[#DEC984]/5 blur-[100px] rounded-full"></div>
                    <div className="absolute bottom-1/4 -left-20 w-80 h-80 bg-[#DEC984]/5 blur-[100px] rounded-full"></div>
                    <div className="absolute inset-0 bg-grid-dots opacity-[0.03]"></div>
                </div>

                <div className="relative min-h-screen h-full flex flex-col px-5 pt-20 pb-8 overflow-y-auto">
                    <div className="flex flex-col gap-5">
                        <div className={`flex flex-col gap-1.5 transition-all duration-700 ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                            <span className="text-[10px] uppercase tracking-[0.35em] text-[#DEC984] font-black">Navigation</span>
                            <h3 className="text-[22px] font-bold text-white font-outfit">Explore Rinex Digital</h3>
                        </div>

                        <nav className="grid grid-cols-1 gap-2 w-full">
                            {navLinks.map((link, index) => (
                                <div
                                    key={link.name}
                                    className={`transition-all duration-700 delay-[${index * 70}ms] ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    <Link
                                        href={link.href}
                                        className="group block w-full min-h-[74px] rounded-[1.1rem] border border-white/8 bg-black/25 p-3 transition-all duration-500 hover:border-[#DEC984]/35 hover:bg-white/[0.05]"
                                    >
                                        <div className="flex h-full flex-col justify-between">
                                            <div className="flex items-center justify-between">
                                                <span className="text-[10px] text-[#DEC984] font-black uppercase tracking-[0.28em]">0{index + 1}</span>
                                                <div className="w-7 h-7 rounded-full border border-white/10 flex items-center justify-center text-white/40 group-hover:text-black group-hover:bg-[#DEC984] group-hover:border-[#DEC984] transition-all">
                                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                </div>
                                            </div>

                                            <div className="flex flex-col gap-0.5">
                                                <span className={`text-[16px] font-bold font-outfit transition-all duration-500 ${isMenuOpen ? 'text-white translate-x-0' : 'text-white/20 -translate-x-4'}`}>
                                                    {link.name}
                                                </span>
                                                <span className="text-[10px] text-white/30 uppercase tracking-[0.18em]">
                                                    Section
                                                </span>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            ))}
                        </nav>
                    </div>

                    <div className={`mt-6 flex flex-col gap-5 transition-all duration-1000 delay-500 ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                        <Button variant="primary" className="w-full py-3.5 rounded-2xl !text-[12px] !border-[#DEC984] shadow-[0_20px_40px_rgba(222,201,132,0.15)] group">
                            Start Your Project
                            <span className="group-hover:translate-x-2 transition-transform">&rarr;</span>
                        </Button>

                        <div className="flex flex-col gap-4">
                            <p className="text-[10px] text-white/20 uppercase tracking-[0.4em] font-black text-center">Social Innovation</p>
                            <div className="flex justify-center gap-6">
                                {['Instagram', 'Dribbble', 'LinkedIn'].map((social) => (
                                    <span key={social} className="text-[11px] text-white/40 hover:text-[#DEC984] transition-colors cursor-pointer uppercase tracking-widest">{social}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
