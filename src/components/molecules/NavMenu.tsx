import React from 'react';
import NavLink from '../atoms/NavLink';

const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
];

const NavMenu: React.FC = () => {
    return (
        <nav className="hidden md:flex items-center gap-10 glass px-12 py-4 rounded-full text-lg">
            {navLinks.map((link) => (
                <NavLink key={link.name} href={link.href}>
                    {link.name}
                </NavLink>
            ))}
        </nav>
    );
};

export default NavMenu;
