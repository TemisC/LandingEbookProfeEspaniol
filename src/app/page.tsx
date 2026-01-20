import HeroSection from '@/components/landing/HeroSection';
import ProblemSection from '@/components/landing/ProblemSection';
import SolutionSection from '@/components/landing/SolutionSection';
import ProofSection from '@/components/landing/ProofSection';
import OfferSection from '@/components/landing/OfferSection';
import Footer from '@/components/landing/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <ProofSection />
      <OfferSection />
      <Footer />
    </main>
  );
}
