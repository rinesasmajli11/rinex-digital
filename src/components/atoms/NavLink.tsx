import React from 'react';
import Link from 'next/link';

interface NavLinkProps {
    href: string;
    children: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children }) => {
    return (
        <Link
            href={href}
            className="text-sm font-[22px] text-white/70 hover:text-white transition-colors duration-200 relative group"
        >
            {children}
            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gradient-to-r from-primary to-secondary transition-all duration-300 group-hover:w-full"></span>
        </Link>
    );
};

export default NavLink;
