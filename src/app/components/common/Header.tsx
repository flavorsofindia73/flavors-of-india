'use client';
import Link from "next/link";
import { useState, lazy, Suspense } from "react";
import { useTheme } from "@/app/contexts/ThemeContext";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from 'framer-motion';

// Lazy load icons to reduce initial bundle size
const FaBars = lazy(() => import('react-icons/fa').then(mod => ({ default: mod.FaBars })));
const FaTimes = lazy(() => import('react-icons/fa').then(mod => ({ default: mod.FaTimes })));
const FaSun = lazy(() => import('react-icons/fa').then(mod => ({ default: mod.FaSun })));
const FaMoon = lazy(() => import('react-icons/fa').then(mod => ({ default: mod.FaMoon })));

// Fallback icon component
const IconFallback = () => <span className="w-6 h-6 inline-block" />;

const navItemVariants = {
  initial: { opacity: 0, y: -10 },
  animate: { opacity: 1, y: 0 },
  hover: { scale: 1.05, color: 'var(--primary-green)' }
};

const mobileNavItemVariants = {
  initial: { opacity: 0, x: -20 },
  animate: { opacity: 1, x: 0 }
};

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

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
      <nav className="w-full max-w-[1280px] mx-auto flex items-center justify-between px-4">
        {/* Logo */}
        <div className="logo">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="/"
              className="text-[var(--primary-green)] font-bold text-xl md:text-2xl transition-transform duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              <Image
                src="/logo.png"
                alt="Flavors of India Logo"
                width={100}
                height={100}
                className="inline-block mr-2 transition-transform duration-300"
                priority
              />
            </Link>
          </motion.div>
        </div>
        {/* Desktop Navigation */}
        <motion.div 
          className="hidden md:flex items-center space-x-5"
          initial="initial"
          animate="animate"
          variants={{
            animate: {
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
        >
          {['/', '/menu', '/about', '/contact'].map((path, index) => (
            <motion.div
              key={path}
              variants={navItemVariants}
              whileHover="hover"
              transition={{ duration: 0.2 }}
            >
              <Link
                href={path}
                className={`font-medium transition-colors ${isActive(path)
                    ? "text-[var(--primary-green)]"
                    : "text-[var(--foreground)]"
                  }`}
              >
                {path === '/' ? 'Home' : path.charAt(1).toUpperCase() + path.slice(2)}
              </Link>
            </motion.div>
          ))}
          <motion.button
            onClick={toggleTheme}
            className="text-[var(--foreground)] py-2 px-2 hover:text-[var(--primary-red)] transition flex items-center"
            aria-label="Toggle theme"
            whileHover={{ scale: 1.1, rotate: 15 }}
            whileTap={{ scale: 0.9 }}
          >
            <Suspense fallback={<IconFallback />}>
              {theme === "dark" ? <FaSun size={20} /> : <FaMoon size={20} />}
            </Suspense>
          </motion.button>
        </motion.div>
        {/* Mobile Menu Button */}
        <motion.button
          className="md:hidden text-[var(--foreground)] hover:text-[var(--primary-red)]"
          onClick={toggleMenu}
          aria-label="Toggle menu"
          whileTap={{ scale: 0.9 }}
        >
          <Suspense fallback={<IconFallback />}>
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </Suspense>
        </motion.button>
      </nav>
      
      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            className="md:hidden absolute top-full left-0 w-full bg-[var(--card-bg)] py-4 border-t border-[var(--border)] shadow-lg z-50"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container mx-auto px-4 flex flex-col space-y-2">
              {['/', '/menu', '/about', '/contact'].map((path, index) => (
                <motion.div
                  key={path}
                  variants={mobileNavItemVariants}
                  initial="initial"
                  animate="animate"
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    href={path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block py-3 px-2 font-medium border-l-4 pl-4 transition-all duration-300 hover:translate-x-1 ${isActive(path)
                        ? "text-[var(--primary-green)] border-[var(--primary-green)]"
                        : "text-[var(--foreground)] border-transparent hover:text-[var(--primary-green)] hover:border-[var(--primary-green)]"
                      }`}
                  >
                    {path === '/' ? 'Home' : path.charAt(1).toUpperCase() + path.slice(2)}
                  </Link>
                </motion.div>
              ))}
              <motion.button
                onClick={() => {
                  toggleTheme();
                  setIsMenuOpen(false);
                }}
                className="block text-[var(--foreground)] py-3 px-2 hover:text-[var(--primary-red)] transition-all duration-300 font-medium border-l-4 border-transparent hover:border-[var(--primary-red)] hover:translate-x-1 pl-4 flex items-center"
                whileTap={{ scale: 0.98 }}
              >
                <Suspense fallback={<IconFallback />}>
                  {theme === "dark" ? (
                    <>
                      <FaSun size={20} className="mr-2" />
                      Light Mode
                    </>
                  ) : (
                    <>
                      <FaMoon size={20} className="mr-2" />
                      Dark Mode
                    </>
                  )}
                </Suspense>
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}