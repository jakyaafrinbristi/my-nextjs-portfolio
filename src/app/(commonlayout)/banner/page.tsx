"use client";

import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { FaDownload, FaGithub, FaFacebook, FaLinkedin } from "react-icons/fa";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const Banner = () => {
  const handleDownloadResume = () => {
    const resumePath = "/mernstack resume bristi.pdf";
    window.open(resumePath, "_blank");
    const link = document.createElement("a");
    link.href = resumePath;
    link.download = "mernstack resume bristi.pdf";
    link.click();
  };

  return (
    <section className="w-full min-h-screen bg-gradient-to-br from-zinc-900 via-black to-zinc-900 px-4 md:px-8 lg:px-20 py-12 flex items-center justify-center">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        {/* Left Section */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center md:text-left"
        >
          <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-tight mb-2">
            JAKYA AFRIN BRISTI
          </h1>
          <h3 className="text-indigo-400 italic text-xl md:text-2xl font-semibold mb-4">
            MERN Stack Developer
          </h3>
          <p className="text-gray-300 text-md md:text-lg font-medium leading-relaxed max-w-xl">
            I am dedicated and hardworking, always striving for excellence. With a flexible mindset,
            I quickly learn new skills to meet any challenge, constantly improving myself.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-6 justify-center md:justify-start">
            <Link
              href="/projects"
              className="w-full sm:w-[180px] bg-indigo-400 hover:bg-indigo-500 text-black font-semibold py-2 px-4 rounded flex items-center justify-center gap-2 transition"
            >
              View Projects <MdKeyboardDoubleArrowRight />
            </Link>
            <button
              onClick={handleDownloadResume}
              className="w-full sm:w-[180px] bg-indigo-400 hover:bg-indigo-500 text-black font-semibold py-2 px-4 rounded flex items-center justify-center gap-2 transition"
            >
              Resume <FaDownload />
            </button>
          </div>
        </motion.div>

        {/* Right Section */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col items-center gap-6"
        >
          <div className="p-2 rounded-full bg-gradient-to-tr from-indigo-500 via-indigo-300 to-indigo-500 shadow-xl">
            <Image
              src="https://i.ibb.co.com/rGKjXXJj/IMG-0471-2.jpg"
              alt="Jakya Afrin Bristi"
              width={280}
              height={280}
              className="rounded-full object-cover border-4 border-white shadow-lg"
            />
          </div>

          <div className="flex gap-6">
            <Link href="https://www.facebook.com/jakyabristi.jakyabristi/" target="_blank">
              <FaFacebook className="text-white text-3xl hover:text-indigo-400 transition duration-300" />
            </Link>
            <Link href="https://github.com/jakyaafrinbristi" target="_blank">
              <FaGithub className="text-white text-3xl hover:text-indigo-400 transition duration-300" />
            </Link>
            <Link href="https://www.linkedin.com/in/jakyaafrinbristi/" target="_blank">
              <FaLinkedin className="text-white text-3xl hover:text-indigo-400 transition duration-300" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Banner;
