'use client';
import { useState, useEffect } from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';
import Link from 'next/link';
import { FormData } from '@/app/types/types';
import { FormErrors } from '@/app/types/types';
import { useForm } from '@formspree/react';
import { toast } from 'react-toastify';

const ContactPage = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [state, handleSubmit] = useForm('mojnlekn');
  const [hasSubmitted, setHasSubmitted] = useState(false);

  useEffect(() => {
    if (state.succeeded && hasSubmitted) {
      toast.success('Message sent successfully!');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setHasSubmitted(false);
    }
    if (state.errors && hasSubmitted) {
      toast.error('Something went wrong. Please try again.');
      setHasSubmitted(false);
    }
  }, [state, hasSubmitted]);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message should be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setHasSubmitted(true);
    handleSubmit({
      name: formData.name,
      email: formData.email,
      subject: formData.subject,
      message: formData.message
    });
  };

  const contactInfo = [
    {
      icon: (
        <svg className="w-6 h-6 text-[var(--primary-green)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: "Phone",
      content: "+855 23 221 990 / +855 23 990 455 / +855 10 835 907"
    },
    {
      icon: (
        <svg className="w-6 h-6 text-[var(--primary-green)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: "Email",
      content: "foi.combodia@gmail.com"
    },
    {
      icon: (
        <svg className="w-6 h-6 text-[var(--primary-green)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: "Address",
      content: "BKK1 #158, St.63, Phnom Penh, Cambodia"
    },
    {
      icon: (
        <svg className=" w-6 h-6 text-[var(--primary-green)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Hours",
      content: 'Mon–Sun | 10:30 PM – 11:00 PM'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#FF671F] via-[#ffffff] to-[#046A38]">
      <Header />
      <main className="w-full max-w-[1280px] mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-700 mb-4">Contact Us</h1>
          <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
            Have questions or feedback? Reach out to us and our team will get back to you as soon as possible.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="bg-card-bg rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-[var(--dark-gray)] mb-6">Get in Touch</h2>
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start">
                  <div className="mt-1">
                    {info.icon}
                  </div>
                  <div className="ml-4">
                    <h3 className="font-bold text-[var(--dark-gray)]">{info.title}</h3>
                    <p className="text-[var(--text-secondary)]">{info.content}</p>
                  </div>
                </div>
              ))}
            </div>
            {/* Social Media Links */}
            <div className="mt-10">
              <h3 className="font-bold text-[var(--dark-gray)] mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <Link href="https://www.facebook.com/profile.php?id=100068232918971&rdid=uZllRcasQZhp29TL#" className="bg-[var(--primary-green)] hover:bg-[var(--accent-hover)] text-white w-10 h-10 rounded-full flex items-center justify-center transition duration-300">
                  <span className="sr-only">Facebook</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </Link>
                <Link href="https://www.instagram.com/flavorsofi/" className="bg-[var(--primary-green)] hover:bg-[var(--accent-hover)] text-white w-10 h-10 rounded-full flex items-center justify-center transition duration-300">
                  <span className="sr-only">Instagram</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </Link>
                <Link
                  href="https://www.tiktok.com/@flavorsindia92"
                  target="_blank"
                  className="bg-[var(--primary-green)] hover:bg-[var(--accent-hover)] text-white w-10 h-10 rounded-full flex items-center justify-center transition duration-300"
                >
                  <span className="sr-only">TikTok</span>
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-1.79V14.53a5.5 5.5 0 1 1-4.764-5.446v2.292a3.21 3.21 0 1 0 2.209 3.054V2h2.555a4.79 4.79 0 0 0 3.77 4.686v-.001z" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
          {/* Contact Form */}
          <div className="bg-card-bg rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-[var(--dark-gray)] mb-6">Send us a Message</h2>
            <form onSubmit={onSubmit}>
              <div className="mb-5">
                <label htmlFor="name" className="block text-[var(--dark-gray)] font-medium mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border ${errors.name ? 'border-[var(--primary-red)]' : 'border-border'
                    } focus:outline-none focus:ring-2 focus:ring-[var(--primary-green)] text-foreground`}
                  placeholder="John Doe"
                />
                {errors.name && <p className="mt-1 text-[var(--primary-red)] text-sm">{errors.name}</p>}
              </div>
              <div className="mb-5">
                <label htmlFor="email" className="block text-[var(--dark-gray)] font-medium mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border ${errors.email ? 'border-[var(--primary-red)]' : 'border-border'
                    } focus:outline-none focus:ring-2 focus:ring-[var(--primary-green)] text-foreground`}
                  placeholder="john@example.com"
                />
                {errors.email && <p className="mt-1 text-[var(--primary-red)] text-sm">{errors.email}</p>}
              </div>
              <div className="mb-5">
                <label htmlFor="subject" className="block text-[var(--dark-gray)] font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border ${errors.subject ? 'border-[var(--primary-red)]' : 'border-border'
                    } focus:outline-none focus:ring-2 focus:ring-[var(--primary-green)] text-foreground`}
                  placeholder="How can we help?"
                />
                {errors.subject && <p className="mt-1 text-[var(--primary-red)] text-sm">{errors.subject}</p>}
              </div>
              <div className="mb-6 ">
                <label htmlFor="message" className="resize-none block text-[var(--dark-gray)] font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className={`resize-none w-full px-4 py-3 rounded-lg border ${errors.message ? 'border-[var(--primary-red)]' : 'border-border'
                    } focus:outline-none focus:ring-2 focus:ring-[var(--primary-green)] text-foreground`}
                  placeholder="Your message here..."
                ></textarea>
                {errors.message && <p className="mt-1 text-[var(--primary-red)] text-sm">{errors.message}</p>}
              </div>
              <button
                type="submit"
                disabled={state.submitting}
                className={`w-full bg-[var(--primary-green)] hover:bg-[var(--accent-hover)] text-white font-bold py-3 px-4 rounded-lg transition duration-300 ${state.submitting ? 'opacity-70 cursor-not-allowed' : ''
                  }`}
              >
                {state.submitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
        {/* Find Our Branches Section */}
        <section className="py-16 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-700 mb-4">Find Our Branches</h2>
            <div className="w-20 h-1 bg-[var(--primary-green)] mx-auto"></div>
          </div>
          <div className="grid grid-cols-1  gap-8">
            {/* Branch 1 */}
            <div className="bg-[var(--card-bg)] rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-[var(--foreground)] mb-2">Flavors of India – Main Branch</h3>
              <p className="text-[var(--text-secondary)] mb-4">Phnom Penh, Cambodia</p>
              <div className="w-full h-[350px] rounded-xl overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3908.9476241360317!2d104.9206576747753!3d11.555612544339013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3109513b161ce94b%3A0xe5f17b1f880d095b!2sFlavors%20of%20India!5e0!3m2!1sen!2s!4v1771411794671!5m2!1sen!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                  title="Flavors of India - Main Branch"
                ></iframe>
              </div>
            </div>
            {/* Branch 2 */}
            <div className="bg-[var(--card-bg)] rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-[var(--foreground)] mb-2">Flavors of India – Secondary Branch</h3>
              <p className="text-[var(--text-secondary)] mb-4">Toul Tumpong, Phnom Penh, Cambodia</p>
              <div className="w-full h-[350px] rounded-xl overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31271.57579683433!2d104.90263294174129!3d11.555659107980242!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31095195684d4b47%3A0x467f4b302d35a67e!2sFlavors%20Of%20India%20II%20Tuol%20Tom%20pung!5e0!3m2!1sen!2s!4v1771411932792!5m2!1sen!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                  title="Flavors of India - City Centre"
                ></iframe>
              </div>
            </div>
            {/* Branch 2 */}
            <div className="bg-[var(--card-bg)] rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-[var(--foreground)] mb-2">Flavors of India – Third Branch</h3>
              <p className="text-[var(--text-secondary)] mb-4">Battambang, Cambodia</p>
              <div className="w-full h-[350px] rounded-xl overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.004234113388!2d103.1957702747955!3d13.098918012074716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3105498d3c2d9637%3A0xf1ace30f34f67fde!2sFlavors%20of%20India%2C%20Battambang!5e0!3m2!1sen!2s!4v1771412030194!5m2!1sen!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                  title="Flavors of India - City Centre"
                ></iframe>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
