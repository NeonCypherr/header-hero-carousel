// app/page.jsx
'use client';

import Header from '@/components/Header'; // adjust path if needed~
import HeroSection from '@/components/HeroSection'; // Update path if different

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#121212] text-white font-sans px-4 sm:px-6 lg:px-8">
      <Header />

      <HeroSection />
      {/* Add more sections here as you grow your site */}
    </main>
  );
}