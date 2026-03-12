import React from 'react';

interface FeatureCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
    return (
        <div className="group relative p-8 rounded-3xl glass border border-white/5 hover:border-white/10 transition-all duration-500 hover:translate-y-[-8px]">
            {/* Subtle Glow Effect */}
            <div className="absolute inset-0 bg-white/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>

            <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:bg-white/10 transition-all duration-500">
                    <div className="text-white/80 group-hover:text-white transition-colors">
                        {icon}
                    </div>
                </div>

                <h3 className="text-lg font-bold text-white mb-3 font-plus-jakarta tracking-tight">
                    {title}
                </h3>

                <p className="text-white/40 text-sm leading-relaxed">
                    {description}
                </p>
            </div>

            {/* Subtle bottom indicator */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-gradient-to-r from-primary to-secondary transition-all duration-500 group-hover:w-1/2"></div>
        </div>
    );
};

export default FeatureCard;
