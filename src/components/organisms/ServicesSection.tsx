import React from 'react';
import SectionHeading from '../molecules/SectionHeading';
import ServiceCard from '../molecules/ServiceCard';

const ServicesSection: React.FC = () => {
    const services = [
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="16 18 22 12 16 6"></polyline>
                    <polyline points="8 6 2 12 8 18"></polyline>
                </svg>
            ),
            title: "Custom Software Development",
            description: "Scalable, secure, and high-performance apps tailored to your unique business needs and growth goals."
        },
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                    <path d="M2 12h20"></path>
                </svg>
            ),
            title: "AI & Machine Learning",
            description: "Automate decisions, forecast trends, and power your product with data-driven intelligent solutions."
        },
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17.5 19l4.5-4-4.5-4"></path>
                    <path d="M3 12h18"></path>
                    <path d="M6.5 5L2 9l4.5 4"></path>
                </svg>
            ),
            title: "Cloud Solutions",
            description: "Future-proof your infrastructure with seamless AWS, Azure, or GCP deployments and management."
        },
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                    <path d="M2 17l10 5 10-5"></path>
                    <path d="M2 12l10 5 10-5"></path>
                </svg>
            ),
            title: "UI/UX Design",
            description: "Seamless, human-centered digital experiences that drive engagement and convert visitors into customers."
        },
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                    <line x1="8" y1="21" x2="16" y2="21"></line>
                    <line x1="12" y1="17" x2="12" y2="21"></line>
                </svg>
            ),
            title: "Web & Mobile App Development",
            description: "From MVPs to complex enterprise applications — we code what you imagine into reality."
        },
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
            ),
            title: "Cybersecurity",
            description: "Protect what matters most with advanced security frameworks, audits, and proactive monitoring."
        }
    ];

    return (
        <section id="services" className="relative py-16 md:py-32 overflow-hidden bg-subtle-dark">
            {/* Background Decor */}
            <div className="absolute inset-0 bg-grid pointer-events-none opacity-[0.03]"></div>
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/10 blur-[150px] rounded-full -mr-64 -mt-32 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-secondary/10 blur-[150px] rounded-full -ml-64 -mb-32 pointer-events-none"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10 reveal-on-scroll">
                <SectionHeading
                    subtitle="Services"
                    title="Innovating Tomorrow."
                    gradientTitle="Building Today."
                    description="Empowering businesses with next-gen technology solutions from custom software to AI-driven platforms, we engineer your digital success."
                    centered={true}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">
                    {services.map((service, index) => (
                        <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                            <ServiceCard
                                icon={service.icon}
                                title={service.title}
                                description={service.description}
                                highlighted={(service as any).highlighted || false}
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Section Divider */}
            <div className="absolute bottom-0 left-0 w-full section-divider"></div>
            {/* Section Divider */}
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
        </section>
    );
};

export default ServicesSection;
