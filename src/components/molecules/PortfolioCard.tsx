import React from 'react';
import Image from 'next/image';

interface PortfolioCardProps {
    title: string;
    category: string;
    description: string;
    image?: string;
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({ title, category, description, image }) => {
    return (
        <div className="group relative w-full max-w-[360px] mx-auto rounded-3xl overflow-hidden bg-[#0a0a0a] border border-white/5 hover:border-white/20 transition-all duration-500">
            {/* Project Image Container */}
            <div className="relative aspect-[1880/975] w-full overflow-hidden bg-[#0a0a0a]">
                {image ? (
                    <Image
                        src={image}
                        alt={title}
                        fill
                        className="object-cover object-top transition-transform duration-500"
                    />
                ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                        <span className="text-white/20 text-xs uppercase tracking-widest">Project Visual</span>
                    </div>
                )}

                {/* Overlay with luxury gradient */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#020202]/26 via-[#05070a]/12 to-[#020202]/84 opacity-82 transition-opacity duration-500"></div>

                {/* View Project Indicator (Top Right) */}
                <div className="absolute top-6 right-6 w-10 h-10 rounded-full glass border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                        <line x1="7" y1="17" x2="17" y2="7"></line>
                        <polyline points="7 7 17 7 17 17"></polyline>
                    </svg>
                </div>
            </div>

            {/* Content Section */}
            <div className="p-8 relative">
                <h3 className="text-xl font-bold text-primary mb-2 font-plus-jakarta transition-colors duration-300">
                    {title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed line-clamp-2">
                    {description}
                </p>

                {/* Subtle Decorative Line */}
                <div className="mt-6 w-0 group-hover:w-full h-px bg-gradient-to-r from-primary to-transparent transition-all duration-700"></div>
            </div>
        </div>
    );
};

export default PortfolioCard;
