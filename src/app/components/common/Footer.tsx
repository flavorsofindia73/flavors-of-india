import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { motion } from 'framer-motion';

// Optional: Icons as components
const LocationIcon: FC = () => (
  <svg className="h-5 w-5 text-[var(--primary-green)] mt-0.5 mr-3 flex-shrink-0 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const PhoneIcon: FC = () => (
  <svg className="h-5 w-5 text-[var(--primary-green)] mt-0.5 mr-3 flex-shrink-0 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
);

const MailIcon: FC = () => (
  <svg className="h-5 w-5 text-[var(--primary-green)] mt-0.5 mr-3 flex-shrink-0 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

// Social Icon Component
const SocialIcon: FC<{ href: string; icon: "facebook" | "instagram" | "tiktok" }> = ({ href, icon }) => {
  let svg = null;
  if (icon === "facebook") {
    svg = (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
      </svg>
    );
  } else if (icon === "instagram") {
    svg = (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
      </svg>
    );
  } else if (icon === "tiktok") {
    svg = (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-1.79V14.53a5.5 5.5 0 1 1-4.764-5.446v2.292a3.21 3.21 0 1 0 2.209 3.054V2h2.555a4.79 4.79 0 0 0 3.77 4.686v-.001z" />
      </svg>
    );
  }

  return (
    <motion.div
      whileHover={{ scale: 1.1, y: -4 }}
      whileTap={{ scale: 0.95 }}
    >
      <Link href={href} target="_blank" className="bg-[var(--primary-green)] hover:bg-[var(--accent-hover)] text-white w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300">
        <span className="sr-only">{icon}</span>
        {svg}
      </Link>
    </motion.div>
  );
};

// Branch Data
const branchesData = [
  {
    name: "Main Branch",
    address: "BKK1 #158, St.63, Phnom Penh, Cambodia",
    phones: ["+855 23 990 455", "+855 10 835 907", "+855 12 886 374"],
    email: "foi.combodia@gmail.com"
  },
  {
    name: "Secondary Branch",
    address: "#32Eo, St.123 Toul Tumpong, Phnom Penh, Cambodia",
    phones: ["+855 23 221 990", "+855 95 221 990"],
    email: "foi.combodia@gmail.com"
  },
  {
    name: "Third Branch",
    address: "#301-302, St.121 Battambang, Cambodia",
    phones: ["+855 53 731 553", "+855 98 856 140"],
    email: "foi.combodia@gmail.com"
  }
];

const footerVariants = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Footer() {
  return (
    <motion.footer
      className="bg-[var(--background)] text-[var(--foreground)] py-12 border-t border-[var(--primary-green)] mb-5 transition-colors duration-300"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      variants={footerVariants}
    >
      <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Content */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
          variants={staggerContainer}
        >
          {/* Company Info */}
          <motion.div
            className="transition-all duration-300"
            variants={footerVariants}
            whileHover={{ y: -4 }}
          >
            <div className="logo mb-4">
              <motion.div whileHover={{ scale: 1.05 }}>
                <Link href="/" className="text-[var(--primary-green)] font-bold text-xl md:text-2xl flex items-center gap-2 transition-all duration-300">
                  <Image src="/logo.png" alt="Flavors of India Logo" width={180} height={120} className="inline-block" />
                </Link>
              </motion.div>
            </div>
            <p className="text-[var(--text-secondary)] mb-6 transition-colors duration-300">
              Delivering delicious meals right to your doorstep since 2021. We&apos;re committed to providing the best food delivery experience.
            </p>
            <div className="flex space-x-4">
              <SocialIcon href="https://www.facebook.com/profile.php?id=100068232918971&rdid=lZIdrbeIwzJUY7Vb#" icon="facebook" />
              <SocialIcon href="https://www.instagram.com/flavorsofi/" icon="instagram" />
              <SocialIcon href="https://www.tiktok.com/@flavorsindia92" icon="tiktok" />
            </div>
          </motion.div>
          {/* Quick Links */}
          <motion.div
            className="transition-all duration-300"
            variants={footerVariants}

          >
            <h3 className="text-lg font-bold mb-6 text-[var(--foreground)]">Quick Links</h3>
            <ul className="space-y-3">
              {['/', '/menu', '/contact', '/about'].map((path) => (
                <motion.li
                  key={path}
                  whileHover={{ x: 8 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link href={path} className="text-[var(--text-secondary)] hover:text-[var(--foreground)] transition-all duration-300 inline-block">
                    {path === '/' ? 'Home' : path.charAt(1).toUpperCase() + path.slice(2)}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          {/* Branches Section */}
          <motion.div
            className="-ml-4 md:-ml-[250px] md:-mt-5 transition-all duration-300"
            variants={footerVariants}

          >
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 flex-col sm:flex-row sm:flex-wrap gap-6 md:gap-40 justify-start">
              {branchesData.map((branch, i) => (
                <motion.div
                  key={i}
                  className="flex-1 min-w-[250px] sm:max-w-[300px] p-4 transition-all duration-300"

                >
                  <strong className="text-[var(--foreground)]">{branch.name}</strong>
                  <ul className="mt-2 space-y-2 text-[var(--text-secondary)]">
                    <li className="flex items-start group">
                      <LocationIcon />
                      {branch.address}
                    </li>
                    <li className="flex items-start group">
                      <PhoneIcon />
                      <div>{branch.phones.map(p => <p key={p}>{p}</p>)}</div>
                    </li>
                    <li className="flex items-start group">
                      <MailIcon />
                      <a href={`mailto:${branch.email}`} className="hover:underline transition-colors duration-300">{branch.email}</a>
                    </li>
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
        {/* Divider */}
        <div className="border-t border-[var(--primary-green)] mb-5 transition-colors duration-300"></div>
        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row -mb-10 justify-between items-center md:items-start flex-wrap gap-4 md:gap-0">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.4 }}
          >
            <p className="text-[var(--text-secondary)] transition-colors duration-300">© {new Date().getFullYear()} Flavors of India. All rights reserved.</p>
          </motion.div>
        </div>
      </div>
    </motion.footer>
  );
}
