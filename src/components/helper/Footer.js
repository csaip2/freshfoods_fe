import { motion } from "framer-motion";
import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";

const Footer = () => {
  const containerVariants = {
    initial: { opacity: 0, y: 50 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
      },
    },
  };

  const iconVariants = {
    initial: { scale: 0 },
    animate: {
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
      },
    },
    hover: {
      scale: 1.2,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <motion.footer
      className="bg-pink-100 text-white py-12 px-6 md:px-12 lg:px-24"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-12">
        {/* Social Media Section */}
        <motion.div className="flex flex-col space-y-6" variants={itemVariants}>
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent flex">
            Connect With Us
            {/* <FaHeart className="bg-black fill-red" /> */}
          </h2>
          <p className="text-gray-700 max-w-md">
            Join our community and stay updated with the latest news, products,
            and exclusive offers.
          </p>

          <div className="flex flex-wrap gap-4">
            <motion.a
              href="#"
              className="text-gray-700 hover:text-white"
              variants={iconVariants}
              whileHover="hover"
            >
              <FaXTwitter className="w-6 h-6" />
            </motion.a>
            <motion.a
              href="#"
              className="text-gray-700 hover:text-white"
              variants={iconVariants}
              whileHover="hover"
            >
              <FaInstagram className="w-6 h-6" />
            </motion.a>
            <motion.a
              href="#"
              className="text-gray-700 hover:text-white"
              variants={iconVariants}
              whileHover="hover"
            >
              <FaLinkedin className="w-6 h-6" />
            </motion.a>
            <motion.a
              href="#"
              className="text-gray-700 hover:text-white"
              variants={iconVariants}
              whileHover="hover"
            >
              <FaFacebook className="w-6 h-6" />
            </motion.a>
            <motion.a
              href="#"
              className="text-gray-700 hover:text-white"
              variants={iconVariants}
              whileHover="hover"
            >
              <FaYoutube className="w-6 h-6" />
            </motion.a>
            <motion.a
              href="#"
              className="text-gray-700 hover:text-white"
              variants={iconVariants}
              whileHover="hover"
            >
              <FaWhatsapp className="w-6 h-6" />
            </motion.a>
          </div>
        </motion.div>

        {/* Links Section */}
        <motion.div className="flex flex-col space-y-4" variants={itemVariants}>
          <h3 className="text-xl text-gray-700 font-semibold">Quick Links</h3>
          <div className="flex flex-col space-y-2">
            <motion.a
              href="#"
              className="text-gray-700 hover:text-dark transition-colors duration-200"
              whileHover={{ x: 5 }}
            >
              About Us
            </motion.a>
            <motion.a
              href="#"
              className="text-gray-700 hover:text-white transition-colors duration-200"
              whileHover={{ x: 5 }}
            >
              Blog
            </motion.a>
            <motion.a
              href="#"
              className="text-gray-700 hover:text-white transition-colors duration-200"
              whileHover={{ x: 5 }}
            >
              FAQ
            </motion.a>
            <motion.a
              href="#"
              className="text-gray-700 hover:text-white transition-colors duration-200"
              whileHover={{ x: 5 }}
            >
              Terms and Conditions
            </motion.a>
            <motion.a
              href="#"
              className="text-gray-700 hover:text-white transition-colors duration-200"
              whileHover={{ x: 5 }}
            >
              Privacy Policy
            </motion.a>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
