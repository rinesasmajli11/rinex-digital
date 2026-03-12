import Header from '@/components/organisms/Header';
import Hero from '@/components/organisms/Hero';
import AboutSection from '@/components/organisms/AboutSection';
import ServicesSection from '@/components/organisms/ServicesSection';
import PortfolioSection from '@/components/organisms/PortfolioSection';
import TeamSection from '@/components/organisms/TeamSection';
import ContactSection from '@/components/organisms/ContactSection';
import Footer from '@/components/organisms/Footer';

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#0b0f2a]">
      <Header />
      <Hero />
      <AboutSection />
      <ServicesSection />
      <PortfolioSection />
      <TeamSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
