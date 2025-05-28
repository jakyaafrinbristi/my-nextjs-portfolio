"use client";

import { motion } from "framer-motion";

const EducationPage = () => {
  return (
    <section className="bg-gradient-to-br from-zinc-900 via-black to-zinc-900 text-white px-6 py-16">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-indigo-400 mb-4 text-center"
        >
          🎓 Education
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-gray-300 text-lg mb-10 text-center"
        >
          My academic journey so far.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* BSc */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="bg-black/40 border border-indigo-500 p-6 rounded-xl shadow-md hover:shadow-lg transition"
          >
            <h3 className="text-2xl font-semibold text-indigo-300">
              B.Sc in Computer Science & Engineering
            </h3>
            <p className="text-gray-400">
              Institute of Science & Technology
            </p>
            <p className="text-gray-400">CGPA: 3.08</p>
          </motion.div>

          {/* HSC */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="bg-black/40 border border-indigo-500 p-6 rounded-xl shadow-md hover:shadow-lg transition"
          >
            <h3 className="text-2xl font-semibold text-indigo-300">
              Higher Secondary Certificate (HSC)
            </h3>
            <p className="text-gray-400">
              Birshreshtha Munshi Abdur Rouf Public College
            </p>
            <p className="text-gray-400">GPA: 4.67</p>
          </motion.div>

          {/* SSC */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.5 }}
            className="bg-black/40 border border-indigo-500 p-6 rounded-xl shadow-md hover:shadow-lg transition"
          >
            <h3 className="text-2xl font-semibold text-indigo-300">
              Secondary School Certificate (SSC)
            </h3>
            <p className="text-gray-400">
              Birshreshtha Munshi Abdur Rouf Public College
            </p>
            <p className="text-gray-400">GPA: 5.00</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EducationPage;
