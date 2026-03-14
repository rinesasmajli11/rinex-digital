import React from 'react';
import NavLink from '../atoms/NavLink';

const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Members', href: '#team' },
    { name: 'Contact', href: '#contact' },
];

const NavMenu: React.FC = () => {
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
