"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-black to-zinc-900 px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
      {/* Image on Left with Animation */}
      <div className="md:col-span-1 flex justify-center">
        <motion.div
          whileHover={{ scale: 1.05, rotate: 1 }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="p-2 rounded-xl bg-gradient-to-tr from-indigo-500 via-indigo-300 to-indigo-500 shadow-xl"
        >
          <Image
            src="https://i.ibb.co/XZsrkVjK/image.jpg"
            alt="Jakya Afrin Bristi"
            width={320}
            height={420}
            className="rounded-xl object-cover border-4 border-white shadow-lg"
          />
        </motion.div>
      </div>

      {/* Text on Right */}
      <div className="md:col-span-2 space-y-6">
        <h4 className="text-indigo-400 italic text-lg">--- About Me ---</h4>
        <h1 className="text-white font-extrabold text-4xl md:text-5xl font-serif">
          So Who Am I?
        </h1>
        <p className="text-gray-300 text-md md:text-lg font-medium leading-relaxed">
          Hi, I’m <span className="font-bold text-indigo-300">Jakya Afrin Bristi</span> — a
          passionate <span className="font-bold text-indigo-300">Frontend Developer</span> skilled in the{" "}
          <span className="italic font-semibold text-indigo-300">MERN Stack</span>.
          <br /> <br />
          My journey began with a simple curiosity: <span className="italic text-gray-400">how are websites made?</span> That spark grew into a deep love for coding.
          Through <span className="text-indigo-300 font-semibold">sleepless nights</span> and constant learning, I’ve embraced challenges that helped shape my growth.
          <br /> <br />
          Every bug fixed, every feature built, reminds me that this is just the start of my{" "}
          <span className="font-semibold text-indigo-300">endless programming journey</span>.
          <br /> <br />
          When I’m not coding, you’ll find me <span className="italic text-gray-400">drawing, reading</span>, or occasionally{" "}
          <span className="italic text-gray-400">traveling to clear my head</span>.
          Thanks for being here!
        </p>
      </div>
    </div>
  );
};

export default About;
