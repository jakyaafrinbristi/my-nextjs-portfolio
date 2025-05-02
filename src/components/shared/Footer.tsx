"use client";

import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";
import Link from "next/link"; 

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-zinc-900 via-black to-zinc-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center md:flex-row justify-between">
    
        <div className="flex-1 text-center md:text-left mb-6 md:mb-0">
          <h3 className="text-xl font-semibold text-indigo-400">Get in Touch</h3>
          <p className="text-gray-300 mt-2">
            Feel free to reach out for collaborations or just to say hello. I’m always open to new opportunities.
          </p>
        </div>

        <div className="flex-1 text-center mb-6 md:mb-0">
          <h3 className="text-xl font-semibold text-indigo-400">Quick Links</h3>
          <div className="flex flex-col gap-2 mt-4">
            <Link href="/" className="text-gray-300 hover:text-indigo-400">Home</Link>
            <Link href="/about" className="text-gray-300 hover:text-indigo-400">About Me</Link>
            <Link href="/skills" className="text-gray-300 hover:text-indigo-400">Skills</Link>
            <Link href="/projects" className="text-gray-300 hover:text-indigo-400">Projects</Link>
            <Link href="/contacts" className="text-gray-300 hover:text-indigo-400">Contact</Link>
          </div>
        </div>


        <div className="flex-1 text-center md:text-right">
          <h3 className="text-xl font-semibold text-indigo-400">Follow Me</h3>
          <div className="flex gap-4 mt-4 justify-center md:justify-end">
            <a
              href="https://github.com/your-github-profile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-indigo-400"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/your-linkedin-profile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-indigo-400"
            >
              <FaLinkedinIn size={24} />
            </a>
            <a
              href="https://twitter.com/your-twitter-profile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-indigo-400"
            >
              <FaTwitter size={24} />
            </a>
          </div>
        </div>
      </div>

      <div className="bg-black py-4 text-center text-gray-500">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          &copy; {new Date().getFullYear()} Jakya Afrin Bristi. All rights reserved.
        </motion.p>
      </div>
    </footer>
  );
};

export default Footer;
