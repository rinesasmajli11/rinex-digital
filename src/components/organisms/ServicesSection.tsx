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
            title: "Website Development",
            description: "We build modern, fast, and responsive websites tailored to your brand and business goals."
        },
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 3l7 4v10l-7 4-7-4V7l7-4z"></path>
                    <path d="M8 12h8"></path>
                    <path d="M12 8v8"></path>
                </svg>
            ),
            title: "UI / UX Design",
            description: "We design intuitive and visually engaging interfaces that improve usability and user experience."
        },
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="7" y="2" width="10" height="20" rx="2"></rect>
                    <path d="M11 18h2"></path>
                    <path d="M10 5h4"></path>
                </svg>
            ),
            title: "Mobile App Development",
            description: "We design and develop modern mobile applications that deliver smooth performance and a great user experience across devices."
        },
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 8a3 3 0 1 1 0 6"></path>
                    <path d="M6 8a3 3 0 1 0 0 6"></path>
                    <path d="M8 18a6 6 0 0 1 8 0"></path>
                    <path d="M12 9v3"></path>
                </svg>
            ),
            title: "Social Media Management",
            description: "We manage and grow your social media presence with strategic content and consistent branding."
        },
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                </svg>
            ),
            title: "Content Creation",
            description: "We create engaging digital content that strengthens your brand and connects with your audience."
        },
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="18" height="18" rx="2"/>
                    <path d="M8 8h8v8H8z"/>
                    <circle cx="8.5" cy="8.5" r=".5"/>
                </svg>
            ),
            title: "Graphic Design",
            description: "We create stunning visuals, branding, and graphics that make your business stand out."
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
                <div className="max-w-4xl mx-auto">
                    <SectionHeading
                        subtitle="Services"
                        title="Digital Solutions That"
                        gradientTitle="Elevate Your Brand"
                        description="We provide modern web development, design, and digital marketing services that help businesses build a strong and successful online presence."
                        centered={true}
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">
                    {services.map((service, index) => (
                        <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                            <ServiceCard
                                icon={service.icon}
                                title={service.title}
                                description={service.description}
                                highlighted={(service as { highlighted?: boolean }).highlighted || false}
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Section Divider */}
            <div className="absolute bottom-0 left-0 w-full section-divider"></div>
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
        </section>
    );
};

export default ServicesSection;
