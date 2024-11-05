import React from "react";
import { motion } from "framer-motion";
import C1 from "../../gallery/LiveChicken/C1.png";
import NC5 from "../../gallery/LiveChicken/NC5.jpg";
import E3 from "../../gallery/Eggs/E3.jpg";

const HomePageProducts = () => {
  const gridVariants = {
    initial: { opacity: 0, y: 50 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.2,
        ease: "easeOut",
        duration: 0.8,
      },
    },
  };

  const productVariants = {
    initial: { opacity: 0, scale: 0.9 },
    animate: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      className="bg-[#FFF0F5] py-12"
      variants={gridVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8 text-gray-800">
          Our Products
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <motion.div
              key={product.id}
              className="bg-white rounded-lg shadow-md overflow-hidden"
              variants={productVariants}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full sm:h-full object-cover transform transition-all duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                <h3 className="absolute bottom-5 right-5 text-2xl font-bold text-white">
                  {product.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default HomePageProducts;

const products = [
  {
    id: 1,
    name: "Chicken",
    description:
      "Fresh, tender chicken meat, perfect for grilling, roasting, or stir-frying. A rich source of protein and essential nutrients, suitable for a balanced diet.",
    MRP: 480,
    price: 200,
    image: NC5,
    tags: ["meat", "poultry", "protein", "fresh"],
    diet: "non-vegetarian",
  },
  {
    id: 2,
    name: "Country Chicken",
    description:
      "Organic country chicken known for its robust flavor and texture. Ideal for traditional recipes, offering a healthier alternative to commercially raised chicken.",
    MRP: 550,
    price: 350,
    image: C1,
    tags: ["meat", "poultry", "organic", "protein"],
    diet: "non-vegetarian",
  },
  {
    id: 3,
    name: "Eggs",
    description:
      "Fresh eggs, packed with protein and essential vitamins. Great for breakfast or as an ingredient in various dishes. A staple in many diets.",
    MRP: 12,
    price: 6,
    image: E3,
    tags: ["dairy", "protein", "breakfast", "versatile"],
    diet: "non-vegetarian",
  },
];
