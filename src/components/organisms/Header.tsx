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
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
];

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 w-full z-50 transition-all duration-300 px-6 py-4 bg-[#080b20]/90 backdrop-blur-md border-b border-white/5 shadow-lg shadow-black/20">
            <div className="max-w-7xl mx-auto flex items-center justify-between relative z-10">
                <Logo />

                {/* Desktop Menu */}
                <NavMenu />

                <div className="flex items-center gap-4">
                    <Button variant="outline" className="hidden lg:flex !px-6 !py-2.5 !text-[12px]">
                        Book a Consultation
                    </Button>

                    {/* Burger Menu Button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="flex md:hidden flex-col gap-1.5 z-50 p-2"
                        aria-label="Toggle Menu"
                    >
                        <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                        <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                        <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <div className={`fixed inset-0 bg-[#0b0f2a]/95 backdrop-blur-xl z-40 md:hidden transition-all duration-500 flex flex-col items-center justify-center gap-8 ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
                <nav className="flex flex-col items-center gap-6">
                    {navLinks.map((link, index) => (
                        <div
                            key={link.name}
                            className={`transition-all duration-700 ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                            style={{ transitionDelay: `${index * 100}ms` }}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            <NavLink href={link.href}>
                                <span className="text-3xl">{link.name}</span>
                            </NavLink>
                        </div>
                    ))}
                    <div
                        className={`mt-4 transition-all duration-700 ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                        style={{ transitionDelay: `${navLinks.length * 100}ms` }}
                    >
                        <Button variant="outline" className="text-lg py-4 px-10">
                            Book a Consultation
                        </Button>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;
