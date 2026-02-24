'use client';
import Link from "next/link";
import { useState, lazy, Suspense } from "react";
import { useTheme } from "@/app/contexts/ThemeContext";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from 'framer-motion';

// Lazy loaded icons
const FaBars = lazy(() => import('react-icons/fa').then(mod => ({ default: mod.FaBars })));
const FaTimes = lazy(() => import('react-icons/fa').then(mod => ({ default: mod.FaTimes })));
const FaSun = lazy(() => import('react-icons/fa').then(mod => ({ default: mod.FaSun })));
const FaMoon = lazy(() => import('react-icons/fa').then(mod => ({ default: mod.FaMoon })));

const IconFallback = () => <span className="w-6 h-6 inline-block" />;

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const pathname = usePathname();

  const isActive = (path: string) => {
    if (path === "/") return pathname === "/";
    return pathname.startsWith(path);
  };

  return (
    <motion.header
      className="sticky top-0 z-50 bg-[var(--card-bg)] border-b border-[var(--border)]"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
    >
      <nav className="w-full max-w-[1280px] mx-auto px-4 py-3">

        {/* ================= DESKTOP NAV ================= */}
        <div className="hidden md:flex items-center justify-center gap-8">

          <Link href="/" className={`font-medium ${isActive("/") ? "text-[var(--primary-green)]" : "text-[var(--foreground)]"}`}>Home</Link>
          <Link href="/menu" className={`font-medium ${isActive("/menu") ? "text-[var(--primary-green)]" : "text-[var(--foreground)]"}`}>Menu</Link>

          {/* CENTER LOGO */}
          <Link href="/" onClick={() => setIsMenuOpen(false)}>
            <Image
              src="/logo.png"
              alt="Flavors of India Logo"
              width={140}
              height={140}
              priority
            />
          </Link>

          <Link href="/about" className={`font-medium ${isActive("/about") ? "text-[var(--primary-green)]" : "text-[var(--foreground)]"}`}>About</Link>
          <Link href="/contact" className={`font-medium ${isActive("/contact") ? "text-[var(--primary-green)]" : "text-[var(--foreground)]"}`}>Contact</Link>

          <button onClick={toggleTheme} className="text-[var(--foreground)] hover:text-[var(--primary-red)] transition">
            <Suspense fallback={<IconFallback />}>
              {theme === "dark" ? <FaSun size={20} /> : <FaMoon size={20} />}
            </Suspense>
          </button>

        </div>

        {/* ================= MOBILE TOP BAR ================= */}
        <div className="md:hidden mx-auto flex items-center justify-between">

          {/* LOGO */}
          <Link href="/" className="ml-40">
            <Image
              src="/logo.png"
              alt="Flavors of India Logo"
              width={140}
              height={140}
              priority
            />
          </Link>

          {/* HAMBURGER */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 rounded-md hover:bg-[var(--border)] transition">
            <Suspense fallback={<IconFallback />}>
              {isMenuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
            </Suspense>
          </button>

        </div>

      </nav>

      {/* ================= MOBILE DROPDOWN ================= */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="md:hidden bg-[var(--card-bg)] border-t border-[var(--border)] shadow-lg"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col px-6 py-6 space-y-4">

              <Link href="/" onClick={() => setIsMenuOpen(false)} className={`text-lg font-medium ${isActive("/") ? "text-[var(--primary-green)]" : "text-[var(--foreground)] hover:text-[var(--primary-green)]"}`}>Home</Link>
              <Link href="/menu" onClick={() => setIsMenuOpen(false)} className={`text-lg font-medium ${isActive("/menu") ? "text-[var(--primary-green)]" : "text-[var(--foreground)] hover:text-[var(--primary-green)]"}`}>Menu</Link>
              <Link href="/about" onClick={() => setIsMenuOpen(false)} className={`text-lg font-medium ${isActive("/about") ? "text-[var(--primary-green)]" : "text-[var(--foreground)] hover:text-[var(--primary-green)]"}`}>About</Link>
              <Link href="/contact" onClick={() => setIsMenuOpen(false)} className={`text-lg font-medium ${isActive("/contact") ? "text-[var(--primary-green)]" : "text-[var(--foreground)] hover:text-[var(--primary-green)]"}`}>Contact</Link>

              {/* Divider */}
              <div className="border-t border-[var(--border)] pt-4" />

              {/* THEME BUTTON */}
              <button
                onClick={() => {
                  toggleTheme();
                  setIsMenuOpen(false);
                }}
                className="flex items-center gap-2 text-lg font-medium text-[var(--foreground)] hover:text-[var(--primary-red)] transition"
              >
                <Suspense fallback={<IconFallback />}>
                  {theme === "dark" ? (
                    <>
                      <FaSun size={18} />
                      Light Mode
                    </>
                  ) : (
                    <>
                      <FaMoon size={18} />
                      Dark Mode
                    </>
                  )}
                </Suspense>
              </button>

            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </motion.header>
  );
}