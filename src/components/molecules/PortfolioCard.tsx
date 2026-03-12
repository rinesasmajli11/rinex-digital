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
        <div className="group relative rounded-3xl overflow-hidden glass border border-white/5 hover:border-white/20 transition-all duration-700 hover:translate-y-[-8px]">
            {/* Project Image Container */}
            <div className="relative aspect-[4/3] w-full overflow-hidden">
                {image ? (
                    <Image
                        src={image}
                        alt={title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                        <span className="text-white/20 text-xs uppercase tracking-widest">Project Visual</span>
                    </div>
                )}

                {/* Overlay with luxury gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#05070a] via-[#05070a]/40 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-700"></div>

                {/* Floating Category Tag */}
                <div className="absolute top-6 left-6">
                    <span className="px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-[10px] font-bold uppercase tracking-widest text-primary backdrop-blur-md">
                        {category}
                    </span>
                </div>

                {/* View Project Indicator (Top Right) */}
                <div className="absolute top-6 right-6 w-10 h-10 rounded-full glass border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                        <line x1="7" y1="17" x2="17" y2="7"></line>
                        <polyline points="7 7 17 7 17 17"></polyline>
                    </svg>
                </div>
            </div>

            {/* Content Section */}
            <div className="p-8 relative">
                <h3 className="text-xl font-bold text-white mb-2 font-plus-jakarta group-hover:text-primary transition-colors duration-300">
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
