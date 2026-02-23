'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { CategoryMenuProps } from '@/app/types/types';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: 'easeOut' }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.05
    }
  }
};

export default function CategoryMenu({ items }: CategoryMenuProps) {
  if (items.length === 0) {
    return (
      <motion.div 
        className="text-center py-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        <p className="text-[var(--text-secondary)] text-lg">
          No items available in this category.
        </p>
      </motion.div>
    );
  }
  return (
    <motion.div 
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      variants={staggerContainer}
      initial="initial"
      animate="animate"
    >
      {items.map((item, index) => (
        <motion.div
          key={item.id}
          className="bg-[var(--card-bg)] rounded-2xl overflow-hidden shadow-lg
            border border-[var(--border)] group"
          variants={fadeInUp}
          whileHover={{ scale: 1.02, y: -6, boxShadow: '0 20px 40px rgba(0,0,0,0.12)' }}
          transition={{ duration: 0.25 }}
        >
          <div className="relative h-48 overflow-hidden">
            <Image
              src={item.image}
              alt={item.name}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              loading={index < 3 ? 'eager' : 'lazy'}
              quality={75}
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=="
            />
            <div className="absolute top-3 left-3 flex gap-2">
              {item.popular && (
                <motion.span 
                  className="bg-[var(--primary-red)] text-white text-xs font-bold
                    px-3 py-1 rounded-full"
                  whileHover={{ scale: 1.1 }}
                >
                  Popular
                </motion.span>
              )}
              {item.vegetarian && (
                <motion.span 
                  className="bg-[var(--primary-green)] text-white text-xs font-bold
                    px-3 py-1 rounded-full"
                  whileHover={{ scale: 1.1 }}
                >
                  Veg
                </motion.span>
              )}
              {item.spicy && (
                <motion.span 
                  className="bg-orange-500 text-white text-xs font-bold
                    px-3 py-1 rounded-full"
                  whileHover={{ scale: 1.1 }}
                >
                  Spicy
                </motion.span>
              )}
            </div>
          </div>
          <div className="p-5">
            <motion.h3 
              className="text-lg font-bold text-[var(--foreground)] mb-2 line-clamp-1"
              whileHover={{ color: 'var(--primary-green)' }}
              transition={{ duration: 0.2 }}
            >
              {item.name}
            </motion.h3>
            <p className="text-[var(--text-secondary)] text-sm mb-4 line-clamp-2 h-10">
              {item.description}
            </p>
            <div className="flex items-center justify-between">
              <span className="text-2xl font-bold text-[var(--primary-green)]">
                ${item.price.toFixed(2)}
              </span>
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
