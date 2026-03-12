import React from 'react';
import Image from 'next/image';

interface MemberCardProps {
    name: string;
    role: string;
    image?: string;
    description?: string;
}

const MemberCard: React.FC<MemberCardProps> = ({ name, role, image, description }) => {
    return (
        <div className="group flex flex-col items-center text-center p-8 md:p-10 rounded-[3rem] glass border border-white/5 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10">
            {/* Member Image Container */}
            <div className="relative w-40 h-40 md:w-56 md:h-56 mb-8 p-1.5 rounded-full border border-white/10 group-hover:border-primary/50 transition-colors duration-500">
                <div className="relative w-full h-full rounded-full overflow-hidden">
                    {image ? (
                        <Image
                            src={image}
                            alt={name}
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                    ) : (
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                            <span className="text-white/30 text-xs uppercase tracking-widest font-bold">Photo</span>
                        </div>
                    )}
                    {/* Inner Shine */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                </div>
            </div>

            {/* Content */}
            <div className="flex flex-col gap-3">
                <p className="text-primary text-xs font-bold uppercase tracking-[0.25em]">{role}</p>
                <h4 className="text-white font-bold text-xl md:text-2xl font-plus-jakarta tracking-tight">{name}</h4>
                {description && (
                    <p className="text-white/40 text-xs leading-relaxed max-w-[240px] mt-1 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500 line-clamp-2">
                        {description}
                    </p>
                )}
            </div>

            {/* Hover Decor */}
            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-primary to-secondary rounded-full opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500"></div>
        </div>
    );
};

export default MemberCard;
