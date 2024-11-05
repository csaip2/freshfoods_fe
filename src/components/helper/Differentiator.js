import React from "react";
import { motion } from "framer-motion";
import H1 from "../../gallery/HeroSection.jpg";
import { BsBullseye, BsShieldCheck } from "react-icons/bs";
import { GiLoveInjection } from "react-icons/gi";
import { PiFarm } from "react-icons/pi";

const Differentiator = () => {
  const containerVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        ease: "easeOut",
        duration: 0.8,
      },
    },
  };

  const textVariants = {
    initial: { y: -50, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const highlightVariants = {
    initial: { opacity: 0, scale: 0.9 },
    animate: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      className="relative w-full h-auto py-16 md:py-24 lg:py-32 overflow-hidden bg-gradient-to-b from-[#FFF0F5] to-white"
      variants={containerVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center md:bg-left-center sm:bg-right-center"
        style={{ backgroundImage: `url(${H1})` }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div>

      <div className="relative max-w-screen-xl mx-auto flex flex-col items-start justify-center p-6 md:p-12 lg:p-16 text-white space-y-8">
        {/* Title Section */}
        <motion.div
          className="flex flex-col items-start"
          variants={textVariants}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4">
            Why Choose Us?
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl max-w-md leading-relaxed">
            Discover the difference with our high-quality, ethically sourced
            products.
          </p>
        </motion.div>

        {/* Highlights Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8 mt-8">
          <motion.div
            className="bg-white/10 rounded-lg p-6 text-center flex flex-col items-center"
            variants={highlightVariants}
            whileHover="hover"
          >
            <BsBullseye className="text-4xl md:text-5xl lg:text-6xl text-green-400 mb-4 animate-spin-slow" />
            <h3 className="text-xl md:text-2xl font-semibold">Chemical-Free</h3>
            <p className="text-sm md:text-lg">
              No harmful chemicals or additives
            </p>
          </motion.div>
          <motion.div
            className="bg-white/10 rounded-lg p-6 text-center flex flex-col items-center"
            variants={highlightVariants}
            whileHover="hover"
          >
            <GiLoveInjection className="text-4xl md:text-5xl lg:text-6xl text-green-400 mb-4 animate-spin-slow" />
            <h3 className="text-xl md:text-2xl font-semibold">
              Zero Injection
            </h3>
            <p className="text-sm md:text-lg">No artificial injections</p>
          </motion.div>
          <motion.div
            className="bg-white/10 rounded-lg p-6 text-center flex flex-col items-center"
            variants={highlightVariants}
            whileHover="hover"
          >
            <PiFarm className="text-4xl md:text-5xl lg:text-6xl text-green-400 mb-4 animate-spin-slow" />
            <h3 className="text-xl md:text-2xl font-semibold">
              Fresh from Farm
            </h3>
            <p className="text-sm md:text-lg">
              Directly sourced from local farms
            </p>
          </motion.div>
          <motion.div
            className="bg-white/10 rounded-lg p-6 text-center flex flex-col items-center"
            variants={highlightVariants}
            whileHover="hover"
          >
            <BsShieldCheck className="text-4xl md:text-5xl lg:text-6xl text-green-400 mb-4 animate-spin-slow" />
            <h3 className="text-xl md:text-2xl font-semibold">
              No Antibiotics
            </h3>
            <p className="text-sm md:text-lg">No antibiotic residues</p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Differentiator;
