import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Logo: React.FC = () => {
    return (
        <Link href="/" className="flex items-center gap-2 group">
            <div className="relative ">
                <div className="w-full h-full  flex items-center justify-center mt-[-20px]">
                    <Image
                        src="/logo.png" // Fallback name if copied, using placeholders for now
                        alt="Rinex Digital Logo"
                        width={135}
                        height={12}
                        className="w-[110px] md:w-[135px] h-auto"
                    />
                </div>
            </div>

        </Link>
    );
};

export default Logo;
