'use client';
import Header from './components/common/Header';
import HeroSection from './components/sections/HeroSection';
import PopularItems from './components/sections/PopularItems';
import ChickenJholMomo from './components/sections/ChickenJholMomo';
import NepaliSpecialThali from './components/sections/NepaliSpecialThali';
import MurghHandi from './components/sections/MurghHandi';
import Footer from './components/common/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--background)]">
      <Header />
      <main id="main-content">
        <HeroSection />
        <PopularItems />
        <ChickenJholMomo />
        <NepaliSpecialThali />
        <MurghHandi />
      </main>
      <Footer />
    </div>
  );
}
