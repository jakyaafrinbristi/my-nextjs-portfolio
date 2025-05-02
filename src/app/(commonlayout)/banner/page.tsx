
"use client";

import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { FaDownload } from "react-icons/fa";
import Image from "next/image";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <section className="w-full min-h-screen bg-gradient-to-br from-zinc-900 via-black to-zinc-900 px-6 py-12 flex flex-col-reverse md:flex-row items-center justify-center">

      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="flex-1 flex flex-col items-center md:items-start text-center md:text-left"
      >
        <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-wide">
          JAKYA AFRIN BRISTI
        </h1>
        <h3 className="text-indigo-400 italic text-xl md:text-2xl mt-2 mb-4 font-semibold">
          Frontend Developer
        </h3>
        <p className="text-gray-300 max-w-xl text-md font-medium leading-relaxed">
        I am dedicated and hardworking, always striving for excellence. With a flexible mindset,
         I quickly learn new skills to meet any challenge, constantly improving myself.
        </p>

        <div className="flex flex-col md:flex-row gap-4 mt-6">
          <a
            href="/projects"
            className="w-[180px] bg-indigo-400 text-black hover:bg-indigo-500 duration-300 text-lg px-4 py-2 rounded flex items-center justify-center gap-2"
          >
            View Projects <MdKeyboardDoubleArrowRight />
          </a>

          <a
            href="/resume.pdf"
            download
            className="w-[180px] bg-indigo-400 text-black hover:bg-indigo-500 duration-300 text-lg px-4 py-2 rounded flex items-center justify-center gap-2"
          >
            Resume <FaDownload />
          </a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="flex-1 flex justify-center mb-10 md:mb-0"
      >
        <div className="p-2 rounded-full bg-gradient-to-tr from-indigo-500 via-indigo-300 to-indigo-500 shadow-lg">
          <Image
            src="https://i.ibb.co.com/rGKjXXJj/IMG-0471-2.jpg"
            alt="Jakya Afrin Bristi"
            width={280}
            height={280}
            className="rounded-full object-cover border-4 border-white shadow-xl"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Banner;
