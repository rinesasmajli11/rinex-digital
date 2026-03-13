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
        primary: 'bg-transparent border border-primary text-primary font-bold shadow-[0_0_15px_rgba(222,201,132,0.2)] hover:shadow-[0_0_25px_rgba(222,201,132,0.4)] hover:bg-primary/10 hover:scale-[1.02] active:scale-95',
        secondary: 'bg-white text-accent hover:bg-opacity-90 active:scale-95',
        outline: 'border border-white/20 text-white hover:bg-white/5 active:scale-95',
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
