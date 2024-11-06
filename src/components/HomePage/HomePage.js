import React from "react";
import Slider from "../helper/Slider";
import HomePageBanner from "../../gallery/HomePageBanner.jpg";
import { motion } from "framer-motion";
import HomePageProducts from "../Products/HomePageProducts";
import Differentiator from "../helper/Differentiator";
import Footer from "../helper/Footer";

const HomePage = () => {
  const fadeInUp = {
    initial: { y: 30, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 0.8, ease: "easeOut" },
  };

  const scaleIn = {
    initial: { scale: 0.9, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    transition: { duration: 0.2, delay: 0.1, ease: "easeOut" },
  };

  return (
    <div className="bg-[#FFF0F5]">
      <Slider />

      {/* <motion.img
        src={EggImage2}
        alt="decorative egg 2"
        className="absolute lg:left-20 lg:w-46 sm:w-20 sm:right-4 xs:w-10 md:w-36 opacity-10"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.4, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      /> */}

      {/* Hero Section */}
      <div className="relative w-full mx-auto px-4 sm:px-6 lg:px-8 py-4">
        {/* Hero Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-6 sm:mb-8 text-center"
        >
          <motion.h1
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold 
              bg-gradient-to-r from-green-600 to-green-700 bg-clip-text text-transparent 
              font-['Playfair_Display'] tracking-wide leading-tight"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 5,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            Nature's Fresh, Delivered With Care
          </motion.h1>
        </motion.div>

        {/* Banner Image */}
        <div className="relative h-[300px] sm:h-[400px] sm:w-full md:h-[500px] lg:h-[600px] rounded-lg overflow-hidden">
          <motion.img
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            src={HomePageBanner}
            alt="home page banner"
            className="w-full h-full object-cover"
          />

          {/* Text Overlay */}
          <div className="absolute inset-0">
            <div className="h-full w-full md:w-1/2 flex flex-col justify-center p-6 sm:p-8 md:p-12 lg:p-16">
              <motion.p
                {...fadeInUp}
                className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-green-800 mb-4
                  font-['Montserrat'] font-semibold max-w-[90%] sm:max-w-[80%] md:max-w-full"
              >
                Fresh Chicken and Eggs
              </motion.p>

              <motion.p
                {...scaleIn}
                className="text-sm sm:text-base sm:text-justify md:text-lg lg:text-xl text-gray-700 mb-8
                  font-['Roboto'] leading-relaxed max-w-[60%] sm:max-w-[50%] md:max-w-xl
                  tracking-wide"
              >
                Welcome to our non-veg store! Explore our wide selection of
                high-quality fresh chicken and eggs, perfect for all your
                culinary needs
              </motion.p>

              <motion.button
                {...scaleIn}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-green-600 hover:bg-green-700 text-white
                  px-6 sm:px-8 py-2.5 sm:py-3 rounded-full
                  text-sm sm:text-base md:text-lg
                  font-['Montserrat'] font-semibold
                  transition-colors duration-300
                  shadow-lg w-fit"
              >
                Shop now
              </motion.button>
            </div>
          </div>
        </div>
      </div>

      {/* Products */}
      <HomePageProducts />

      {/* Differentiator Section */}
      <motion.div
        className="bg-gradient-to-b from-[#FFF0F5] to-[#FAF7F5] px-4 sm:px-8 lg:px-24"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <Differentiator />
      </motion.div>

      {/* Decorative Divider */}
      <div className="bg-gradient-to-b from-[#FAF7F5] to-gray-200 h-16"></div>

      {/* Footer */}
      <motion.div
        className="bg-gray-200 px-4 md:px-12 lg:px-24"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <Footer />
      </motion.div>
    </div>
  );
};

export default HomePage;
