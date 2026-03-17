"use client";

import React from 'react';
import NavLink from '../atoms/NavLink';
import { useLanguage } from '../../contexts/LanguageContext';

const NavMenu: React.FC = () => {
    const { t } = useLanguage();

    const navLinks = [
        { name: t.nav.home, href: '/' },
        { name: t.nav.about, href: '#about' },
        { name: t.nav.services, href: '#services' },
        { name: t.nav.portfolio, href: '#portfolio' },
        { name: t.nav.team, href: '#team' },
        { name: t.nav.contact, href: '#contact' },
    ];

    return (
        <nav className="hidden md:flex items-center gap-10 px-12 py-4 rounded-full text-lg bg-black/35 backdrop-blur-md shadow-[0_10px_30px_rgba(0,0,0,0.18)]">
            {navLinks.map((link) => (
                <NavLink key={link.name} href={link.href}>
                    {link.name}
                </NavLink>
            ))}
        </nav>
    );
};

export default NavMenu;
