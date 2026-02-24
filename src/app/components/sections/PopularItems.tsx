'use client';
import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const items = [
  {
    id: 1,
    name: "Butter Chicken",
    price: "$6.75",
    image: "https://res.cloudinary.com/dweqejpfk/image/upload/v1771511467/Orange_and_Green_Modern_Bold_Butter_Chicken_Indian_Food_Marketing_Instagram_Post_6_ynwxkh_qec2cu.webp",
    alt: "Delicious butter chicken curry in a bowl with naan bread",
    width: 640,
    height: 640
  },
  {
    id: 2,
    name: "Pani Puri",
    price: "$4.80",
    image: "https://res.cloudinary.com/dweqejpfk/image/upload/v1771511469/Orange_and_Green_Modern_Bold_Butter_Chicken_Indian_Food_Marketing_Instagram_Post_11_nqhory_ixxuok.webp",
    alt: "Crispy pani puri with tangy tamarind water",
    width: 640,
    height: 640
  },
  {
    id: 3,
    name: "Hyadrabadi Dum Biryani",
    price: "$5.49",
    image: "https://res.cloudinary.com/dweqejpfk/image/upload/v1771511464/Orange_and_Green_Modern_Bold_Butter_Chicken_Indian_Food_Marketing_Instagram_Post_3_ymjsph_mqaqiy.webp",
    alt: "Hyderabadi dum biryani with aromatic basmati rice",
    width: 640,
    height: 640
  },
  {
    id: 4,
    name: "Chicken Tikka",
    price: "$3.00",
    image: "https://res.cloudinary.com/dweqejpfk/image/upload/v1771511464/Orange_and_Green_Modern_Bold_Butter_Chicken_Indian_Food_Marketing_Instagram_Post_4_zi293i_fripju.webp",
    alt: "Grilled chicken tikka skewers with spices",
    width: 640,
    height: 640
  },
  {
    id: 5,
    name: "Butter Naan",
    price: "$4.79",
    image: "https://res.cloudinary.com/dweqejpfk/image/upload/v1771916284/butter_naan_nfbbtd.webp",
    alt: "Fresh masala naan bread from tandoor oven",
    width: 640,
    height: 640
  }
];

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: 'easeOut' }
};

const PopularItems = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % items.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? items.length - 1 : prev - 1
    );
  };

  return (
    <motion.section 
      className="py-16 bg-gradient-to-l from-[#FF671F] via-[#ffffff] to-[#046A38]"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <div className="w-full max-w-[1280px] mx-auto px-4">

        {/* Header */}
        <div className="flex justify-between items-center mb-10">
          <motion.h2 
            className="text-3xl font-bold"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            Popular Items
          </motion.h2>

          {/* Slider Controls */}
          <motion.div 
            className="flex gap-3"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {/* Prev Button */}
            <motion.button
              onClick={prevSlide}
              aria-label="Previous slide"
              className="bg-gray-300 cursor-pointer hover:bg-gray-400 text-black rounded-full w-12 h-12 flex items-center justify-center transition-all duration-300 shadow-md hover:shadow-lg"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              ←
            </motion.button>

            {/* Next Button */}
            <motion.button
              onClick={nextSlide}
              aria-label="Next slide"
              className="bg-[var(--primary-green)] cursor-pointer hover:bg-[var(--accent-hover)] text-white rounded-full w-12 h-12 flex items-center justify-center transition-all duration-300 shadow-md hover:shadow-lg"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              →
            </motion.button>
          </motion.div>
        </div>

        {/* Slider Wrapper */}
        <div className="relative overflow-hidden rounded-2xl">
          <motion.div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {items.map((item) => (
              <div key={item.id} className="min-w-full">
                <motion.div 
                  className="bg-[var(--card-bg)] rounded-2xl shadow-xl overflow-hidden"
                  whileHover={{ y: -8, scale: 1.02, boxShadow: '0 20px 40px rgba(0,0,0,0.15)' }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="relative md:h-[420px] h-72 w-full overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.alt}
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 640px"
                      loading="lazy"
                      quality={75}
                      placeholder="blur"
                      blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=="
                    />
                  </div>

                  <div className="p-6">
                    <motion.h3 
                      className="font-bold text-2xl text-[var(--dark-gray)] mb-2 transition-colors duration-300"
                      whileHover={{ color: 'var(--primary-green)' }}
                    >
                      {item.name}
                    </motion.h3>
                    <p className="text-[var(--primary-green)] font-bold text-xl">
                      {item.price}
                    </p>
                  </div>
                </motion.div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default PopularItems;
