import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: 'easeOut' }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.15
    }
  }
};

const HeroSection = () => {
  return (
    <>

      <motion.section
        className="relative py-16 md:py-24 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Background Image - optimized with explicit dimensions */}
        <div className="absolute inset-0">
          <Image
            src="https://res.cloudinary.com/dweqejpfk/image/upload/v1771512786/bg_iyoh6p.webp"
            alt="Spices and ingredients for authentic Indian cuisine at Flavors of India"
            fill
            className="object-cover transition-transform duration-700 hover:scale-105"
            priority
            sizes="100vw"
            quality={75}


          />
        </div>
        <div className="w-full max-w-[1280px]  mx-auto px-4 relative z-10">
          <motion.div
            className="flex flex-col md:flex-row items-center"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            {/* Left Content */}
            <motion.div className="md:w-1/2 mb-12 md:mb-0" variants={fadeInUp}>
              <div className="max-w-lg ">
                <motion.div
                  className="inline-block bg-white/20 backdrop-blur-sm px-4 py-1.5 rounded-full mb-4 transition-all duration-300 hover:bg-white/30"
                  whileHover={{ scale: 1.05 }}
                >
                  <span className=" text-black font-medium">Premium Indian Food!</span>
                </motion.div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                  Authentic India <br />& Nepalese Cuisine
                </h1>
                <p className="text md:text-xl text-white mb-8 max-w-lg opacity-90">
                  Discover authentic Indian cuisine. Enjoy rich flavors and timeless traditional recipes.
                </p>

                <div className="flex flex-wrap gap-4">
                  <motion.div
                    whileHover={{ scale: 1.05, y: -4 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Link
                      href="/menu"
                      className="inline-flex items-center justify-center
                    bg-[var(--primary-green)]
                    text-white
                    font-semibold
                    p-4
                    rounded-xl
                    transition-all duration-300
                    shadow-lg hover:shadow-xl hover:bg-[var(--accent-hover)]"
                    >
                      Explore Menu
                    </Link>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Right Image - Hero image with priority loading */}
            <motion.div
              className="md:w-1/2 flex justify-center ml-0 md:ml-56"
              variants={fadeInUp}
            >
              <motion.div
                className="relative w-full max-w-lg"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative aspect-square max-w-md mx-auto">
                  <Image
                    src="https://res.cloudinary.com/dweqejpfk/image/upload/v1771946455/Orange_and_Green_Modern_Bold_Butter_Chicken_Indian_Food_Marketing_Instagram_Post_448_x_448_px_greyw3.png"
                    alt="Signature Butter Chicken dish with naan bread at Flavors of India restaurant"
                    fill
                    className="object-cover rounded-3xl shadow-2xl border-8 border-white/30 transition-transform duration-500 hover:scale-105"
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 400px"
                    quality={85}
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAn/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCwAB//2Q=="
                  />
                  {/* Decorative blocks */}
                  <motion.div
                    className="absolute hidden md:block -bottom-6 -left-6 w-32 h-32 bg-[var(--primary-red)] rounded-2xl shadow-xl -z-10 transition-transform duration-500 hover:scale-110 hover:rotate-3"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  />
                  <motion.div
                    className="absolute hidden md:block -top-6 -right-6 w-24 h-24 bg-[var(--primary-green)] rounded-2xl shadow-xl -z-10 transition-transform duration-500 hover:scale-110 hover:-rotate-3"
                    whileHover={{ scale: 1.1, rotate: -5 }}
                  />
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </>
  );
};

export default HeroSection;
