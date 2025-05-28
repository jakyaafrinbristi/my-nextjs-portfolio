/* eslint-disable react/no-unescaped-entities */
'use client';

import { FaGithub, FaFacebook, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";
import { motion } from "framer-motion";
import Link from "next/link";

const Footer = () => {
  const socialLinks = [
    {
      icon: <FaFacebook className="text-2xl" />,
      href: "https://www.facebook.com/jakyabristi.jakyabristi/",
      label: "Facebook"
    },
    {
      icon: <FaGithub className="text-2xl" />,
      href: "https://github.com/jakyaafrinbristi",
      label: "GitHub"
    },
    {
      icon: <FaLinkedin className="text-2xl" />,
      href: "https://www.linkedin.com/in/jakyaafrinbristi/",
      label: "LinkedIn"
    }
  ];

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Me", href: "/about" },
    { name: "Skills", href: "/skills" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contacts" }
  ];

  return (
    <footer className="bg-gradient-to-br from-zinc-900 via-black to-zinc-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-blue-300 bg-clip-text text-transparent">
              Let's Connect
            </h3>
            <p className="text-gray-300">
              I'm always open to discussing new projects, creative ideas or opportunities.
            </p>
            
            <div className="space-y-2">
              <div className="flex items-center gap-3 text-gray-300 hover:text-indigo-400 transition-colors">
                <FaEnvelope />
                <Link href="mailto:your-email@example.com">jakyaafrinbristi@gmail.com</Link>
              </div>
              <div className="flex items-center gap-3 text-gray-300 hover:text-indigo-400 transition-colors">
                <FaPhone />
                <span>+8801625013019</span>
              </div>
            </div>
          </motion.div>

{/* Quick Links */}
<motion.div 
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, delay: 0.1 }}
  viewport={{ once: true }}
  className="space-y-4"
>
  <h3 className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-blue-300 bg-clip-text text-transparent">
    Quick Links
  </h3>
  <div className="grid grid-cols-2 gap-2">
    {navLinks.map((link, index) => (
      <motion.div
        key={index}
        whileHover={{ x: 3 }} 
      >
        <Link
          href={link.href}
          className="block px-2 py-1 text-gray-300 hover:text-white
                     font-medium hover:underline underline-offset-4
                     transition-all duration-200"
        >
          {link.name}
        </Link>
      </motion.div>
    ))}
  </div>
</motion.div>

    
<motion.div 
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, delay: 0.2 }}
  viewport={{ once: true }}
  className="space-y-4"
>
  <h3 className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-blue-300 bg-clip-text text-transparent">
    Follow Me
  </h3>
  <p className="text-gray-300">
    Check out my social profiles for more updates and projects.
  </p>
  <div className="flex gap-4">
    {socialLinks.map((social, index) => (
      <motion.div
        key={index}
        whileHover={{ y: -3 }}
        whileTap={{ scale: 0.9 }}
      >
        <Link
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={social.label}
          className="p-3 rounded-full transition-colors hover:text-indigo-400"
        >
          {social.icon}
        </Link>
      </motion.div>
    ))}
  </div>
</motion.div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-zinc-800 py-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center text-gray-400"
        >
          <p>
            &copy; {new Date().getFullYear()} Jakya Afrin Bristi. All rights reserved.
          </p>
          <p className="mt-1 text-sm">
            Crafted with ❤️ by Jakya
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;