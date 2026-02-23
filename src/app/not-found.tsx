'use client';
import Link from 'next/link';
import Header from './components/common/Header';
import Footer from './components/common/Footer';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />
      <main className="flex flex-col items-center justify-center flex-grow px-4 text-center py-12">
        <div className="max-w-lg space-y-8">
          <div className="relative">
            <h1 className="text-8xl md:text-9xl font-bold text-[var(--primary-green)] z-10 relative">404</h1>
            <div className="absolute -top-4 -right-4 w-32 h-32 bg-[var(--primary-red)] rounded-full opacity-30 -z-10"></div>
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-[var(--primary-green)] rounded-full opacity-20 -z-10"></div>
          </div>
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-[var(--foreground)]">Oops! Page Not Found</h2>
            <p className="text-[var(--text-secondary)] text-lg">
              Sorry, we couldn't find the page you're looking for. It might have been removed, had its name changed, or is temporarily unavailable.
            </p>
          </div>
          <div className="pt-6 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center
              bg-[var(--primary-green)]
              hover:bg-[var(--accent-hover)]
              text-white font-semibold
              py-3 px-8
              rounded-lg
              transition-all duration-300
              hover:scale-105
              shadow-lg hover:shadow-xl"
            >
              Return Home
            </Link>
            <Link href="/menu">
              <button className="cursor-pointer bg-[var(--card-bg)] border border-[var(--primary-green)] text-[var(--primary-green)] font-bold py-3 px-8 rounded-lg transition duration-300 hover:bg-[var(--primary-green)] hover:text-[var(--white)]">
                View Our Menu
              </button>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}