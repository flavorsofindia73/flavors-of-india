'use client';
import { useState } from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';
import Image from 'next/image';
import { FaMapMarkerAlt, FaPhone, FaClock } from 'react-icons/fa';

const AboutPage = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Thank you for subscribing with: ${email}`);
    setEmail('');
  };

  // Our values
  const values = [
    {
      title: "Quality First",
      description: "We partner with top-rated restaurants and carefully select ingredients to ensure the highest quality meals."
    },
    {
      title: "Customer Satisfaction",
      description: "Your happiness is our priority. We go above and beyond to exceed your expectations."
    },
    {
      title: "Sustainability",
      description: "We're committed to eco-friendly packaging and supporting local communities."
    }
  ];

  const branches = [
    {
      name: 'Flavors of India – Main Branch',
      address: 'BKK1 #158, St.63, Phnom Penh, Cambodia',
      phone: ["+855 23 990 455", "+855 10 835 907", "+855 12 886 374"],
      hours: 'Mon–Sun | 10:30 AM – 11:00 PM',
    },
    {
      name: 'Flavors of India – Secondary Branch',
      address: '#32Eo, St.123 Toul Tumpong, Phnom Penh, Cambodia',
      phone: ["+855 23 221 990", "+855 95 221 990"],
      hours: 'Mon–Sun | 10:30 AM – 11:00 PM',
    },
    {
      name: 'Flavors of India – Third Branch',
      address: '#301-302, St.121 Battambang, Cambodia',
      phone: ["012 302 770"],
      hours: 'Mon–Sun | 10:30 AM – 11:00 PM',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#e62e2d] via-[#ffffff] to-[#347338]">
      <Header />
      <main id="main-content" className="w-full max-w-[1280px] mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-r from-[var(--primary-green)] to-[var(--primary-red)] rounded-3xl overflow-hidden mb-16 px-4">
          <div className="max-w-[1280px] mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-12">

            {/* Left Content */}
            <div className="w-full md:w-1/2 text-center md:text-left">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
                Flavors of India
              </h1>
              <p className="text-white text-base sm:text-lg mb-6 max-w-xl mx-auto md:mx-0">
                Founded in 2001 by Mr. Lal Singh Khadka, Flavors of India brings
                authentic Indian and Nepali flavors crafted with tradition, passion,
                and quality ingredients — creating memorable dining experiences.
              </p>
            </div>

            {/* Right Image */}
            <div className="w-full md:w-1/2 flex justify-center md:justify-end">
              <div className="relative w-full max-w-md h-72 sm:h-80 md:h-96 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://res.cloudinary.com/dweqejpfk/image/upload/v1771871500/Orange_and_Green_Modern_Bold_Butter_Chicken_Indian_Food_Marketing_Instagram_Post_448_x_384_px_kkpmjh.webp"
                  alt="Flavors of India restaurant logo and branding"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  quality={85}
                />
              </div>
            </div>

          </div>
        </section>

        {/* Our Story */}
        <section className="py-12 md:py-16 mb-12 md:mb-16 ">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">

            {/* Section Heading */}
            <div className="text-center mb-10 md:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-700 mb-4">
                Our Story
              </h2>
              <div className="w-16 md:w-20 h-1 bg-[var(--primary-green)] mx-auto"></div>
            </div>

            {/* Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">

              {/* Image */}
              <div className="w-full">
                <Image
                  src="https://res.cloudinary.com/dweqejpfk/image/upload/v1771871831/Orange_and_Green_Modern_Bold_Butter_Chicken_Indian_Food_Marketing_Instagram_Post_448_x_384_px_472_x_314_px_rc4ala.webp"
                  alt="Our restaurant kitchen with traditional Indian cooking equipment"
                  width={600}
                  height={400}
                  className="rounded-2xl shadow-lg w-full h-auto"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  loading="lazy"
                  quality={85}
                />
              </div>

              {/* Text Content */}
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-700 mb-4 md:mb-6">
                  From Passion to Plate
                </h3>

                <p className="text-sm sm:text-base text-black mb-4 md:mb-6 leading-relaxed">
                  Founded in 2001 by Mr. Lal Singh Khadka, Founder & Chief Executive Officer,
                  Flavors of India began with a passion to share authentic Indian and Nepali
                  cuisine with the community. What started as a humble culinary vision has grown
                  into a beloved dining destination known for its rich flavors and warm hospitality.
                </p>

                <p className="text-sm sm:text-base text-black mb-4 md:mb-6 leading-relaxed">
                  For over two decades, we have remained committed to quality, tradition, and
                  excellence. Using fresh ingredients and aromatic spices, we prepare every dish
                  with care — creating memorable dining experiences that bring people together
                  through the true taste of home.
                </p>

                {/* Stats */}
                <div className="flex flex-wrap gap-6 sm:gap-8 mt-6 md:mt-8">
                  <div>
                    <div className="text-2xl sm:text-3xl font-bold text-[var(--primary-green)]">2001</div>
                    <div className="text-sm sm:text-base text-black">Established</div>
                  </div>

                  <div>
                    <div className="text-2xl sm:text-3xl font-bold text-[var(--primary-green)]">20+</div>
                    <div className="text-sm sm:text-base text-black">Years of Excellence</div>
                  </div>

                  <div>
                    <div className="text-2xl sm:text-3xl font-bold text-[var(--primary-green)]">Authentic</div>
                    <div className="text-sm sm:text-base text-black">Indian & Nepali Flavors</div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-16 mb-16 bg-card-bg rounded-3xl shadow-lg">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--dark-gray)] mb-4">Our Core Values</h2>
              <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
                These principles guide everything we do at Flavors of India
              </p>
              <div className="w-20 h-1 bg-[var(--primary-green)] mx-auto mt-4"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <div key={index} className="bg-[var(--light-gray)] p-8 rounded-2xl text-center transition-all duration-300 hover:shadow-xl">
                  <div className="w-16 h-16 bg-[var(--primary-green)] rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-6">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-bold text-[var(--dark-gray)] mb-4">{value.title}</h3>
                  <p className="text-[var(--text-secondary)]">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CEO Card */}
        <div className="max-w-[1280px] mb-16 mx-auto flex flex-col md:flex-row bg-card-bg rounded-3xl shadow-2xl overflow-hidden">
          {/* CEO Image */}
          <div className="w-full md:w-1/3">
            <div className="relative w-full aspect-[3/4] md:h-full">
              <Image
                src="/ceo.png"
                alt="Mr. Lal Singh Khadka - Founder and CEO of Flavors of India"
                fill
                className="object-cover object-top md:rounded-l-3xl rounded-t-3xl"
                sizes="(max-width: 768px) 100vw, 33vw"
                loading="lazy"
                quality={85}
              />
            </div>
          </div>
          {/* CEO Content */}
          <div className="w-full md:w-2/3 p-6 sm:p-10 md:p-14 flex flex-col justify-between bg-gradient-to-br from-[var(--light-gray)] to-[var(--card-bg)]">
            <div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-1 text-center md:text-left">
                Mr. Lal Singh Khadka
              </h3>
              <p className="font-semibold text-[var(--primary-green)] text-base sm:text-lg mb-4 text-center md:text-left">
                Founder & Chief Executive Officer
              </p>
              <p className="text-[var(--text-secondary)] leading-relaxed mb-6 text-sm sm:text-base text-center md:text-left">
                Lalsingh Khadka was born in Galkot, Baglung, Nepal. His journey from a small village to becoming a successful businessman in Cambodia reflects dedication, resilience, and vision.

                Nearly 23 years ago, he arrived in Southeast Asia with determination and big dreams. Cambodia, once a transit stop in his journey, became the foundation of his success. Through hard work, he established multiple restaurants in Phnom Penh and other cities, including the well-known "Flavors of India." His businesses have created employment opportunities for many Nepali and international staff.

                Beyond hospitality, he is also involved in real estate development in Cambodia, strengthening his position as a respected entrepreneur.

                Lalsingh Khadka serves as the Cambodian President of the Non-Resident Nepali Association (NRNA), actively supporting the Nepali community and engaging in social initiatives both in Cambodia and Nepal.

                His story is one of perseverance, leadership, and commitment to growth.
              </p>
            </div>
            {/* Quote */}
            <div className="border-l-4 border-[var(--primary-green)] pl-4 sm:pl-6 py-3 bg-card-bg rounded-r-lg shadow-sm">
              <p className="italic text-foreground text-sm sm:text-base">
                "Our mission is to share the rich tapestry of Indian flavors while honoring the traditions that make each dish special."
              </p>
            </div>
          </div>
        </div>

        {/* Our Branches */}
        <section id="branches" className="py-16 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-700 mb-4">Our Branches</h2>
            <div className="w-20 h-1 bg-[var(--primary-green)] mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 gap-8">
            {branches.map((branch, index) => (
              <div
                key={index}
                className="bg-[var(--card-bg)] rounded-2xl p-8 shadow-lg transition-all duration-300 hover:shadow-2xl border border-[var(--border)]"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-[var(--primary-green)] rounded-full flex items-center justify-center mr-4">
                    <FaMapMarkerAlt className="text-white text-xl" />
                  </div>
                  <h3 className="text-xl font-bold text-[var(--foreground)]">
                    {branch.name}
                  </h3>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start">
                    <FaMapMarkerAlt className="text-[var(--primary-green)] mt-1 mr-3 flex-shrink-0" />
                    <span className="text-[var(--text-secondary)]">{branch.address}</span>
                  </div>

                  <div className="flex items-center">
                    <FaPhone className="text-[var(--primary-green)] mr-3 flex-shrink-0" />
                    <p className="text-[var(--text-secondary)] hover:text-[var(--primary-green)] transition-colors">
                      {branch.phone.join(' / ')}
                    </p>
                  </div>

                  <div className="flex items-start">
                    <FaClock className="text-[var(--primary-green)] mt-1 mr-3 flex-shrink-0" />
                    <span className="text-[var(--text-secondary)]">{branch.hours}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Food Showcase Image */}
        <section className="py-8 mb-16">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
            <div className="relative aspect-[21/9] w-full">
              <Image
                src="https://res.cloudinary.com/dweqejpfk/image/upload/v1771512786/bg_iyoh6p.webp"
                alt="Authentic Indian food showcase with various traditional dishes"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="100vw"
                loading="lazy"
                quality={85}
              />
            </div>
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              <div className="text-center px-4">
                <p className="text-white text-2xl md:text-3xl lg:text-4xl font-bold tracking-wide">
                  Serving Authentic Taste Since 2001
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
