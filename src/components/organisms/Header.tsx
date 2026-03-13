"use client";

import React, { useState, useEffect } from 'react';
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
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 px-4 py-1.5 md:px-6 md:py-3 ${isScrolled ? 'bg-[#050505]/96 backdrop-blur-md border-b border-white/5 shadow-lg shadow-black/25' : 'bg-black/30 backdrop-blur-sm border-b border-white/[0.03]'}`}>
            <div className="max-w-7xl mx-auto flex items-center justify-between relative z-10">
                <Logo />

                {/* Desktop Menu */}
                <NavMenu />

                <div className="flex items-center gap-3">
                    <Button variant="outline" className="hidden lg:flex !px-6 !py-2.5 !text-[12px] !border-[#DEC984] !text-[#DEC984]">
                        Book a Consultation
                    </Button>

                    {/* --- PREMIUM BURGER BUTTON --- */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className={`md:hidden relative w-10 h-10 flex flex-col items-center justify-center rounded-lg transition-all duration-500 z-50 ${isMenuOpen ? 'bg-white/10' : 'bg-white/[0.03] border border-white/5'}`}
                        aria-label="Toggle Menu"
                    >
                        <div className="flex flex-col gap-1.5 w-5">
                            <span className={`h-0.5 bg-[#DEC984] transition-all duration-500 rounded-full ${isMenuOpen ? 'rotate-45 translate-y-2 w-5' : 'w-5'}`}></span>
                            <span className={`h-0.5 bg-[#DEC984] transition-all duration-500 rounded-full ${isMenuOpen ? 'opacity-0' : 'w-3 ml-auto'}`}></span>
                            <span className={`h-0.5 bg-[#DEC984] transition-all duration-500 rounded-full ${isMenuOpen ? '-rotate-45 -translate-y-2 w-5' : 'w-5'}`}></span>
                        </div>
                    </button>
                </div>
            </div>

            {/* --- ULTIMATE MOBILE MENU OVERLAY --- */}
            <div className={`fixed inset-0 z-40 md:hidden transition-all duration-700 ease-[cubic-bezier(0.85,0,0.15,1)] ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                {/* Background Decor */}
                <div className="absolute inset-0 bg-[#050505]/98 backdrop-blur-2xl">
                    <div className="absolute top-1/4 -right-20 w-80 h-80 bg-[#DEC984]/5 blur-[100px] rounded-full"></div>
                    <div className="absolute bottom-1/4 -left-20 w-80 h-80 bg-[#DEC984]/5 blur-[100px] rounded-full"></div>
                    <div className="absolute inset-0 bg-grid-dots opacity-[0.03]"></div>
                </div>

                <div className="relative h-full flex flex-col justify-between px-8 pt-32 pb-16 overflow-y-auto">
                    {/* Navigation Items */}
                    <nav className="flex flex-col gap-1">
                        {navLinks.map((link, index) => (
                            <div
                                key={link.name}
                                className={`transition-all duration-700 delay-[${index * 70}ms] ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                <NavLink href={link.href}>
                                    <div className="group flex items-center justify-between py-5 border-b border-white/[0.03] cursor-pointer">
                                        <div className="flex flex-col">
                                            <span className="text-[10px] text-[#DEC984] font-black uppercase tracking-[0.3em] opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0">0{index + 1}</span>
                                            <span className={`text-2xl font-black font-plus-jakarta transition-all duration-500 ${isMenuOpen ? 'text-white translate-x-0' : 'text-white/20 -translate-x-4'}`}>
                                                {link.name}
                                            </span>
                                        </div>
                                        <div className="w-10 h-10 rounded-full border border-white/5 flex items-center justify-center group-hover:bg-[#DEC984] group-hover:border-[#DEC984] group-hover:text-black transition-all">
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </div>
                                    </div>
                                </NavLink>
                            </div>
                        ))}
                    </nav>

                    {/* Bottom CTA & Social Links */}
                    <div className={`flex flex-col gap-10 transition-all duration-1000 delay-500 ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                        <Button variant="primary" className="w-full py-5 rounded-2xl !text-[14px] !border-[#DEC984] shadow-[0_20px_40px_rgba(222,201,132,0.15)] group">
                            Start Your Project
                            <span className="group-hover:translate-x-2 transition-transform">→</span>
                        </Button>

                        <div className="flex flex-col gap-6">
                            <p className="text-[10px] text-white/20 uppercase tracking-[0.4em] font-black text-center">Social Innovation</p>
                            <div className="flex justify-center gap-8">
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
