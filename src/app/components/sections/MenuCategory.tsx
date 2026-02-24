'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { MenuCategoryProps } from '@/app/types/types';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: 'easeOut' }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.06
    }
  }
};

const MenuCategory = ({ categoryName, items }: MenuCategoryProps) => {
  const capitalize = (str: string) =>
    str.charAt(0).toUpperCase() + str.slice(1);

  return (
    <motion.section
      className="bg-card-bg rounded-2xl shadow-lg overflow-hidden transition-all duration-500 hover:shadow-2xl"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5 }}
    >
      {/* Category Header */}
      <div className="bg-gradient-to-r from-[var(--primary-green)] to-[var(--primary-red)] p-6">
        <motion.h2
          className="text-2xl font-bold text-white"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          {capitalize(categoryName)}
        </motion.h2>
      </div>

      {/* Items Grid */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: '-50px' }}
      >
        {items.map((item) => (
          <motion.div
            key={item.id}
            className="rounded-xl overflow-hidden bg-white shadow-sm border border-border transition-all duration-300"
            variants={fadeInUp}
            whileHover={{
              y: -8,
              scale: 1.02,
              boxShadow: '0 12px 30px rgba(0,0,0,0.12)'
            }}
          >
            {/* ✅ IMAGE FIXED SECTION */}
            <div className="relative w-full aspect-[4/3] overflow-hidden bg-gray-100">
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover transition-transform duration-500 hover:scale-110"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                loading="lazy"
                quality={75}
              />
            </div>

            {/* Card Content */}
            <div className="p-5">
              <div className="flex justify-between items-start mb-2">
                <motion.h3
                  className="text-lg font-bold text-[var(--dark-gray)] transition-colors duration-300"
                  whileHover={{ color: 'var(--primary-green)' }}
                >
                  {item.name}
                </motion.h3>
                <span className="text-[var(--primary-green)] font-bold">
                  ${item.price.toFixed(2)}
                </span>
              </div>

              <p className="text-[var(--text-secondary)] text-sm mb-4">
                {item.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-2">
                {item.popular && (
                  <motion.span
                    className="bg-[var(--primary-red)] text-white text-xs px-2 py-1 rounded-full"
                    whileHover={{ scale: 1.1 }}
                  >
                    Popular
                  </motion.span>
                )}

                {item.vegetarian && (
                  <motion.span
                    className="bg-[var(--light-gray)] text-[var(--primary-green)] text-xs px-2 py-1 rounded-full"
                    whileHover={{ scale: 1.1 }}
                  >
                    Veg
                  </motion.span>
                )}

                {item.spicy && (
                  <motion.span
                    className="bg-[var(--light-gray)] text-[var(--primary-red)] text-xs px-2 py-1 rounded-full"
                    whileHover={{ scale: 1.1 }}
                  >
                    Spicy
                  </motion.span>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default MenuCategory;