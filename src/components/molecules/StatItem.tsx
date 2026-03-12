import React from 'react';

interface StatItemProps {
    value: string;
    label: string;
}

const StatItem: React.FC<StatItemProps> = ({ value, label }) => {
    return (
        <div className="flex flex-col gap-1">
            <span className="text-3xl font-bold text-white font-plus-jakarta tracking-tight">
                {value}
            </span>
            <span className="text-sm text-white/50 uppercase tracking-widest font-medium">
                {label}
            </span>
        </div>
    );
};

export default StatItem;
