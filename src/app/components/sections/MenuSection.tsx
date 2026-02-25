'use client';
import Navbar from '../common/Header';
import Footer from '../common/Footer';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { categories } from '@/app/database/AllMenu';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: 'easeOut' }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.08
    }
  }
};

export default function MenuPage() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-[#FF671F] via-[#ffffff] to-[#046A38]">
      <Navbar />
      <motion.main 
        className="w-full max-w-[1280px] mx-auto px-4 py-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Hero Section */}
        <motion.div 
          className="text-center mb-12 py-8"
          variants={fadeInUp}
          initial="initial"
          animate="animate"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-700  mb-4">
            Our Menu
          </h1>
          <p className="text-[var(--text-secondary)] text-lg max-w-2xl mx-auto">
            Explore our authentic Indian flavors
          </p>
          <div className="w-20 h-1 bg-[var(--primary-green)] mx-auto mt-6"></div>
        </motion.div>
        {/* Category Grid */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {categories.map((category) => (
            <motion.div
              key={category.slug}
              variants={fadeInUp}
              whileHover={{ scale: 1.03, y: -8 }}
              transition={{ duration: 0.2 }}
            >
              <Link
                href={`/menu/${category.slug}`}
                className="group bg-[var(--card-bg)] rounded-2xl overflow-hidden shadow-lg
                  transition-all duration-300 hover:shadow-2xl
                  border border-[var(--border)] block h-full"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-[var(--foreground)] group-hover:text-[var(--primary-green)] transition-colors duration-300">
                      {category.name}
                    </h3>
                    <motion.span 
                      className="bg-[var(--light-gray)] text-nowrap text-[var(--dark-gray)] text-xs font-semibold
                        px-3 py-1 rounded-full transition-all duration-300 group-hover:bg-[var(--primary-green)] group-hover:text-white"
                      whileHover={{ scale: 1.05 }}
                    >
                      {category.itemCount} items
                    </motion.span>
                  </div>
                  <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-4">
                    {category.description}
                  </p>
                  <motion.div 
                    className="flex items-center text-[var(--primary-green)] font-semibold text-sm group-hover:translate-x-2 transition-transform duration-300"
                    whileHover={{ x: 8 }}
                  >
                    View Menu
                    <motion.span
                      className="inline-block ml-2"
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}
                    >
                      <svg
                        className="w-4 h-4 transition-transform duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </motion.span>
                  </motion.div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
        {/* Additional Info */}
        <motion.div 
          className="bg-gradient-to-r from-[var(--primary-green)] to-[var(--primary-green)]/90 rounded-3xl p-8 md:p-12 text-center transition-all duration-500 hover:shadow-2xl"
          variants={fadeInUp}
          whileHover={{ scale: 1.01 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Want to Explore More?
          </h2>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            We offer a wide variety of authentic Indian dishes.
            Our menu features traditional recipes passed down through generations.
          </p>
          <motion.div
            whileHover={{ scale: 1.05, y: -4 }}
            whileTap={{ scale: 0.98 }}
          >
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-[var(--primary-red)]
                text-white font-semibold py-3 px-8 rounded-xl
                transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Contact Us
            </Link>
          </motion.div>
        </motion.div>
      </motion.main>
      <Footer />
    </div>
  );
}
