import React from 'react';
import Link from 'next/link';
import Logo from '../atoms/Logo';
import Button from '../atoms/Button';
import { useLanguage } from '../../contexts/LanguageContext';

const Footer: React.FC = () => {
    const { t } = useLanguage();
    const socialLinks = [
        {
            name: 'Facebook',
            href: '#',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
            )
        },
        {
            name: 'Instagram',
            href: '#',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
            )
        },
        {
            name: 'TikTok',
            href: '#',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 12a4 4 0 1 0 4 4V4c1.2 1.4 2.8 2.3 4.7 2.4" />
                </svg>
            )
        }
    ];

    const services = t.footer.services;

    return (
        <footer className="relative pt-16 pb-12 overflow-hidden border-t border-white/5 bg-[#050505]">
            {/* Background Decor - Hero Style */}
            <div className="absolute top-0 right-[-10%] w-[400px] h-[400px] bg-primary/10 blur-[120px] rounded-full pointer-events-none"></div>
            <div className="absolute bottom-0 left-[-10%] w-[400px] h-[400px] bg-secondary/10 blur-[120px] rounded-full pointer-events-none"></div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/5 blur-[100px] rounded-full pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16 mb-12">

                    {/* Brand Column (4/12) */}
                    <div className="lg:col-span-4 flex flex-col items-center lg:items-start text-center lg:text-left gap-8">
                        <Logo />
                        <p className="text-white/50 text-sm leading-relaxed max-w-sm">
                            {t.footer.description}
                        </p>

                        {/* Social Links */}
                        <div className="flex justify-center lg:justify-start gap-4">
                            {socialLinks.map((item) => (
                                <Link key={item.name} href={item.href} className="w-10 h-10 rounded-xl glass border border-white/10 flex items-center justify-center transition-all duration-300 hover:border-primary/40 hover:text-primary group" aria-label={item.name}>
                                    <span className="text-white group-hover:text-primary transition-colors">
                                        {item.icon}
                                    </span>
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Services Column (2/12) */}
                    <div className="lg:col-span-2 flex flex-col items-center lg:items-start text-center lg:text-left gap-6">
                        <h4 className="text-white font-bold text-base font-plus-jakarta">Services</h4>
                        <ul className="flex flex-col gap-4">
                            {services.map((item) => (
                                <li key={item}>
                                    <Link href="#" className="text-white/40 text-[13px] hover:text-primary transition-colors duration-300">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company Column (2/12) */}
                    <div className="lg:col-span-2 flex flex-col items-center lg:items-start text-center lg:text-left gap-6">
                        <h4 className="text-white font-bold text-base font-plus-jakarta">Company</h4>
                        <ul className="flex flex-col gap-4">
                            {t.footer.company.map((item) => (
                                <li key={item}>
                                    <Link href="#" className="text-white/40 text-[13px] hover:text-primary transition-colors duration-300">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Newsletter Column (4/12) */}
                    <div className="hidden lg:flex lg:col-span-4 flex-col items-center lg:items-start text-center lg:text-left gap-6">
                        <h4 className="text-white font-bold text-base font-plus-jakarta">{t.footer.stayUpdated.title}</h4>
                        <p className="text-white/40 text-[13px] leading-relaxed max-w-sm mx-auto lg:mx-0">
                            {t.footer.stayUpdated.description}
                        </p>

                        <div className="flex flex-col gap-3 w-full max-w-sm">
                            <input
                                type="email"
                                placeholder={t.footer.stayUpdated.placeholder}
                                className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white text-sm outline-none focus:border-primary/50 transition-colors placeholder:text-white/10"
                            />
                            <Button variant="primary" className="w-full py-4 rounded-xl text-xs uppercase tracking-widest">
                                {t.footer.stayUpdated.subscribe}
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/5 flex flex-col lg:flex-row justify-between items-center gap-6 text-center">
                    <p className="text-white/20 text-[12px]">
                        {t.footer.bottom.copyright}
                    </p>

                    <div className="flex flex-wrap justify-center gap-8">
                        {t.footer.bottom.links.map((item) => (
                            <Link key={item} href="#" className="text-white/20 text-[12px] hover:text-white transition-colors">
                                {item}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
