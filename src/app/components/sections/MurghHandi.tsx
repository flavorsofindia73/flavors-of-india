import Image from 'next/image';
import { motion } from 'framer-motion';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: 'easeOut' }
};

const MurghHandi = () => {
  return (
    <motion.section
      className="py-16 bg-gradient-to-r from-[#FF671F] via-[#ffffff] to-[#046A38]"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6 }}
    >
      <div className="w-full max-w-[1280px] mx-auto px-4">
        <motion.div
          className="flex flex-col md:flex-row items-center bg-gradient-to-r from-[var(--primary-red)] to-[var(--primary-green)] rounded-3xl overflow-hidden shadow-xl transition-all duration-500 hover:shadow-2xl"
          whileHover={{ scale: 1.01 }}
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {/* Text Section */}
          <div className="md:w-1/2 p-10">
            <motion.h2
              className="text-3xl font-bold text-white mb-4"
              variants={fadeInUp}
            >
              Murgh Handi
            </motion.h2>
            <motion.p
              className="text-white mb-8 text-lg"
              variants={fadeInUp}
            >
              Murgh Handi is a rich, creamy chicken curry slow-cooked in a traditional clay pot with aromatic spices, tomatoes, ginger, garlic, and fresh cream, delivering deep flavor and authentic taste.
            </motion.p>
          </div>
          {/* Image Section - Lazy loaded, optimized quality */}
          <motion.div
            className="md:w-1/2 relative h-80 md:h-[400px] w-full overflow-hidden"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
          >
            <div className="relative w-full aspect-[4/3] overflow-hidden rounded-xl">
              <Image
                src="https://res.cloudinary.com/dweqejpfk/image/upload/v1771594539/Murgh_Handi_hwp0ec.webp"
                alt="Murgh Handi - Creamy chicken curry in traditional clay pot"
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
        </motion.div>
      </div>
    </motion.section>
  );
};

export default MurghHandi;
