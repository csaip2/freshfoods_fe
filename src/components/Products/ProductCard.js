import React from "react";
import { motion } from "framer-motion";
import AddToCart from "../helper/AddToCart";

const ProductCard = ({
  product,
  cartItem,
  handleQuantityChange,
  addToCart,
}) => (
  <motion.div
    className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col justify-between"
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5, ease: "easeOut" }}
    viewport={{ once: true }}
  >
    <motion.div
      className="relative h-64 overflow-hidden"
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.3, ease: "easeOut" },
      }}
    >
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-full object-cover transform transition-all duration-500 hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
      <h3 className="absolute bottom-5 right-5 text-2xl font-bold text-white">
        {product.name}
      </h3>
    </motion.div>

    {/* Tags */}
    <div className="p-4 flex-grow">
      <p className="text-gray-700">{product.description}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {product.tags.map((tag, i) => (
          <motion.span
            key={i}
            className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm font-medium"
            whileHover={{
              scale: 1.1,
              backgroundColor: "#e2e8f0",
              transition: { duration: 0.2, ease: "easeOut" },
            }}
          >
            {tag}
          </motion.span>
        ))}
      </div>
    </div>
    <div className="p-4 pt-2 flex justify-between items-center">
      <p className="font-bold text-gray-800">
        ₹{product.price.toLocaleString()} / {product.quantity}
      </p>

      {cartItem ? (
        <div className="flex items-center gap-2">
          <button
            onClick={() => handleQuantityChange(-1)}
            className="px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded-md transition-colors"
          >
            -
          </button>
          <span className="w-8 text-center font-medium">
            {cartItem.quantity}
          </span>
          <button
            onClick={() => handleQuantityChange(1)}
            className="px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded-md transition-colors"
          >
            +
          </button>
        </div>
      ) : (
        <motion.button
          className="rounded-md transition-colors duration-300 ease-in-out"
          onClick={addToCart}
          whileHover={{
            scale: 1.05,
            boxShadow:
              "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
            transition: { duration: 0.2, ease: "easeOut" },
          }}
          whileTap={{
            scale: 0.95,
            transition: { duration: 0.1, ease: "easeOut" },
          }}
          aria-label="Add to cart"
        >
          <AddToCart />
        </motion.button>
      )}
    </div>
  </motion.div>
);

export default ProductCard;
