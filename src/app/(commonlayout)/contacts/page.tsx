"use client";

import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-zinc-900 via-black to-zinc-900 px-6 py-12 flex items-center justify-center ">
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-10 text-white"
      >
        {/* Heading and Description */}
        <div className="col-span-1 md:col-span-2 text-center mt-16">
          <h2 className="text-2xl font-semibold text-indigo-400">
            Let’s Get in Touch
          </h2>
          <p className="text-lg text-gray-300 mb-6">
          I’m open to collaborations, discussions, and anything that sparks creativity. Feel free to drop me a message anytime!
          </p>
        </div>

        {/* Left Info */}
        <div className="space-y-6 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
          <h2 className="text-4xl font-bold text-indigo-400">Contact Info</h2>
          <div className="space-y-5 text-lg text-gray-300">
            <div className="flex items-start gap-4">
              <FaMapMarkerAlt className="text-indigo-400 mt-1" />
              <span>Location: Dhaka, Bangladesh</span>
            </div>
            <div className="flex items-start gap-4">
              <FaPhoneAlt className="text-indigo-400 mt-1" />
              <span>Mobile / WhatsApp: 01625013019</span>
            </div>
            <div className="flex items-start gap-4">
              <FaEnvelope className="text-indigo-400 mt-1" />
              <span>Email: jakyaafrinb@gmail.com</span>
            </div>
          </div>
        </div>

        {/* Right Form */}
        <form className="space-y-8 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
          <h2 className="text-2xl font-semibold text-center md:text-left text-indigo-400">
            Send Me a Message
          </h2>

          <div className="space-y-4">
            <div>
              <label className="block mb-1 text-gray-200">Name</label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-5 py-3 rounded bg-black text-white border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300"
                required
              />
            </div>

            <div>
              <label className="block mb-1 text-gray-200">Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full px-5 py-3 rounded bg-black text-white border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300"
                required
              />
            </div>

            <div>
              <label className="block mb-1 text-gray-200">Message</label>
              <textarea
                rows={5}
                placeholder="Write your message..."
                className="w-full px-5 py-3 rounded bg-black text-white border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300"
                required
              ></textarea>
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-3 rounded-xl transition-all duration-300"
          >
            Send Message
          </motion.button>
        </form>
      </motion.div>
    </section>
  );
};

export default Contact;
