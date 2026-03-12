import React from 'react';

interface SectionHeadingProps {
    subtitle: string;
    title: string;
    gradientTitle?: string;
    description?: string;
    centered?: boolean;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({
    subtitle,
    title,
    gradientTitle,
    description,
    centered = false,
}) => {
    return (
        <div className={`flex flex-col gap-4 ${centered ? 'items-center text-center' : 'items-start text-left'}`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/10 text-xs font-semibold uppercase tracking-widest text-primary">
                <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                {subtitle}
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight text-white font-plus-jakarta">
                {title} {gradientTitle && <span className="text-gradient-primary">{gradientTitle}</span>}
            </h2>

            {description && (
                <p className="text-lg text-white/60 max-w-2xl leading-relaxed">
                    {description}
                </p>
            )}
        </div>
    );
};

export default SectionHeading;
