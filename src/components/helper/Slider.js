import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Banner2 from "../../gallery/Banner2.png";
import Banner3 from "../../gallery/Banner3.png";

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [Banner2, Banner3];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="relative overflow-hidden mx-auto rounded-lg">
      <AnimatePresence>
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full h-[150px] sm:h-[200px] md:h-[400px] lg:h-[600px] rounded-lg overflow-hidden"
        >
          <img
            src={images[currentIndex]}
            alt={`Banner ${currentIndex + 1}`}
            className="w-full object-cover"
          />
        </motion.div>
      </AnimatePresence>

      {/* Navigation Buttons */}
      <button
        onClick={handlePrev}
        className="absolute top-1/2 left-2 sm:left-4 transform -translate-y-1/2 bg-white rounded-full p-1 sm:p-2 md:p-3 hover:bg-[#FFC0CB] duration-200 shadow-md"
        aria-label="Previous Slide"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 lg:h-8 lg:w-8 text-gray-800"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      <button
        onClick={handleNext}
        className="absolute top-1/2 right-2 sm:right-4 transform -translate-y-1/2 bg-white rounded-full p-1 sm:p-2 md:p-3 hover:bg-[#FFC0CB] duration-200 shadow-md"
        aria-label="Next Slide"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 lg:h-8 lg:w-8 text-gray-800"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      {/* Dots Indicator */}
      {/* <div className="flex justify-center space-x-2 mt-0 sm:mt-4">
        {images.map((_, index) => (
          <span
            key={index}
            className={`h-1.5 w-1.5 sm:h-1 sm:w-1 md:h-3 md:w-3 rounded-full ${
              index === currentIndex ? "bg-[#FFC0CB]" : "bg-gray-300"
            }`}
          ></span>
        ))}
      </div> */}
    </div>
  );
};

export default Slider;
