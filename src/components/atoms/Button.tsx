import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline';
    fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({
    children,
    variant = 'primary',
    fullWidth = false,
    className = '',
    ...props
}) => {
    const baseStyles = 'px-8 py-4 rounded-full font-semibold transition-all duration-300 flex items-center justify-center gap-2 text-sm uppercase tracking-wider';

    const variants = {
        primary: 'bg-gradient-to-right from-[#4f46e5] to-[#7c3aed] text-white shadow-[0_0_20px_rgba(79,70,229,0.4)] hover:shadow-[0_0_30px_rgba(79,70,229,0.6)] hover:scale-105 active:scale-95',
        secondary: 'bg-white text-[#0b0f2a] hover:bg-opacity-90 active:scale-95',
        outline: 'bg-transparent border border-white/20 text-white hover:bg-white/10 active:scale-95'
    };

    const widthStyle = fullWidth ? 'w-full' : '';

    return (
        <button
            className={`${baseStyles} ${variants[variant]} ${widthStyle} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
