import React from 'react';

interface ServiceCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
    highlighted?: boolean;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, highlighted = false }) => {
    return (
        <div className={`group relative h-full p-6 md:p-10 rounded-3xl transition-all duration-500 hover:-translate-y-2 border ${highlighted
            ? 'bg-gradient-to-br from-primary to-primary/80 border-primary/20 shadow-[0_0_50px_rgba(var(--primary-rgb),0.3)]'
            : 'glass border-white/5 hover:border-white/10'
            }`}>
            {/* Background Glow for Non-Highlighted Cards */}
            {!highlighted && (
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
            )}

            <div className="relative z-10 flex flex-col h-full">
                {/* Header Row */}
                <div className="flex justify-between items-start mb-6 md:mb-10">
                    <div className={`w-12 h-12 md:w-16 md:h-16 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:scale-110 ${highlighted ? 'bg-white/20' : 'bg-white/5 border border-white/10'
                        }`}>
                        <div className={`${highlighted ? 'text-white' : 'text-primary'} text-2xl md:text-3xl`}>
                            {icon}
                        </div>
                    </div>

                    {/* Learn More Arrow */}
                    <div className={`w-8 h-8 md:w-10 md:h-10 rounded-full border flex items-center justify-center transition-all duration-500 group-hover:rotate-45 ${highlighted ? 'border-white/30 text-white' : 'border-white/10 text-white/40'
                        }`}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="7" y1="17" x2="17" y2="7"></line>
                            <polyline points="7 7 17 7 17 17"></polyline>
                        </svg>
                    </div>
                </div>

                {/* Content */}
                <h3 className={`text-xl md:text-2xl font-bold mb-3 md:mb-4 font-syne ${highlighted ? 'text-white' : 'text-primary'}`}>
                    {title}
                </h3>

                <p className={`text-sm md:text-base leading-relaxed ${highlighted ? 'text-white/80' : 'text-white/40'}`}>
                    {description}
                </p>

                {/* Bottom Accents */}
                <div className={`mt-auto pt-6 md:pt-8 flex items-center gap-2 text-[10px] md:text-xs font-bold uppercase tracking-widest transition-all duration-500 ${highlighted ? 'text-white opacity-100' : 'text-primary opacity-0 group-hover:opacity-100'
                    }`}>
                    Explore More
                    <span className="w-8 h-px bg-current"></span>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;
