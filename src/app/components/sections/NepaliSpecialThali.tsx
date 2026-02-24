import Image from 'next/image';
import { motion } from 'framer-motion';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: 'easeOut' }
};

const NepaliSpecialThali = () => {
  return (
    <motion.section
      className="py-16 bg-gradient-to-l from-[#e62e2d] via-[#ffffff] to-[#347338]"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6 }}
    >
      <div className="w-full max-w-[1280px] mx-auto px-4">
        <motion.div
          className="flex flex-col-reverse md:flex-row items-center bg-[var(--card-bg)] rounded-3xl overflow-hidden shadow-xl transition-all duration-500 hover:shadow-2xl"
          whileHover={{ scale: 1.01 }}
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {/* Image Section - Lazy loaded, optimized quality */}
          <motion.div
            className="md:w-1/2 relative h-80 md:h-[400px] w-full overflow-hidden"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
          >
            <div className="relative w-full aspect-[4/3] overflow-hidden rounded-xl">
              <Image
                src="https://res.cloudinary.com/dweqejpfk/image/upload/v1771594540/Nepali_Special_Thali_kmt2gq.webp"
                alt="Nepali Special Thali - Traditional platter with rice, dal, vegetables and curries"
                fill
                className="object-cover transition-transform duration-700 hover:scale-110"
                sizes="(max-width: 768px) 100vw, 50vw"
                loading="lazy"
                quality={75}
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=="
              />
            </div>
          </motion.div>
          {/* Text Section */}
          <div className="md:w-1/2 p-10">
            <motion.h2
              className="text-3xl font-bold text-[var(--dark-gray)] mb-4"
              variants={fadeInUp}
            >
              Nepali Special Thali
            </motion.h2>
            <motion.p
              className="text-[var(--medium-gray)] mb-8 text-lg"
              variants={fadeInUp}
            >
              Nepali Special Thali is a traditional platter featuring steamed rice, lentil dal, seasonal vegetables, flavorful curries, achar, salad, and papad, offering a complete, balanced meal with authentic Himalayan taste and variety.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default NepaliSpecialThali;
