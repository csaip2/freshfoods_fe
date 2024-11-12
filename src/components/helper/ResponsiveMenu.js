import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect } from "react";
import {
  FaEnvelope,
  FaHome,
  FaInfoCircle,
  FaProductHunt,
} from "react-icons/fa";
import { MdClose } from "react-icons/md";
import { Link } from "react-router-dom";

const ResponsiveMenu = ({ open, headerData, onClose }) => {
  const iconMap = {
    Home: <FaHome />,
    Products: <FaProductHunt />,
    About: <FaInfoCircle />,
    Contact: <FaEnvelope />,
  };

  useEffect(() => {
    const handleSize = () => {
      if (window.innerWidth >= 1024) {
        onClose();
      }
    };

    window.addEventListener("resize", handleSize);
    return () => {
      window.removeEventListener("resize", handleSize);
    };
  }, [onClose]);

  return (
    <AnimatePresence mode="wait">
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed top-0 left-0 w-full h-full z-50 bg-black bg-opacity-90"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-5 left-5 text-white text-3xl"
          >
            <motion.div
              initial={{ rotate: 0 }}
              animate={{ rotate: 90 }}
              exit={{ rotate: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="hover:text-secondary duration-300"
            >
              <MdClose />
            </motion.div>
          </button>

          {/* Menu Items */}
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            className="absolute top-20 left-0 w-full h-screen"
          >
            <div className="text-xl font-semibold uppercase bg-primary bg-opacity-90 md:bg-opacity-95 text-white py-10 mx-6 my-8 rounded-3xl">
              <ul className="flex flex-col justify-between items-center gap-10">
                {headerData.map((item) => (
                  <motion.li
                    key={item.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.2, delay: item.id * 0.1 }}
                    className="flex items-center gap-6 text-lg"
                  >
                    <span className="text-2xl">{iconMap[item.title]}</span>
                    <Link
                      to={item.link}
                      className="hover:text-secondary transition-colors duration-300 relative"
                      onClick={onClose}
                    >
                      <motion.span
                        initial={{ x: -20 }}
                        animate={{ x: 0 }}
                        transition={{ delay: item.id * 0.1, duration: 0.3 }}
                        // className="flex"
                      >
                        {item.title}
                      </motion.span>
                      <motion.span
                        layoutId="underline"
                        className="absolute bottom-0 left-0 w-full h-[2px] origin-left scale-x-0 hover:scale-x-100 transition-transform duration-300"
                      />
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ResponsiveMenu;
