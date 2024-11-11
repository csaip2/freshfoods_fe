import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { productsData } from "../data/ProductsData";
import AddToCart from "../helper/AddToCart";
import { useRecoilState } from "recoil";
import { cartListAtom } from "../recoil/atoms/CartStateAtom";

const Products = () => {
  // State for filter and sort
  const [sortBy, setSortBy] = useState("relevance");
  const [filterCategory, setFilterCategory] = useState("all");
  const [cartList, setCartList] = useRecoilState(cartListAtom);

  // Memoize sorted and filtered products to prevent unnecessary re-renders
  const sortedProducts = useMemo(() => {
    const sorted = [...productsData];
    if (sortBy === "price-asc") sorted.sort((a, b) => a.price - b.price);
    if (sortBy === "price-desc") sorted.sort((a, b) => b.price - a.price);
    return sorted;
  }, [sortBy]);

  const filteredProducts = useMemo(
    () =>
      filterCategory === "all"
        ? sortedProducts
        : sortedProducts.filter(
            (product) => product.category === filterCategory
          ),
    [filterCategory, sortedProducts]
  );

  const handleQuantityChange = (product, change) => {
    setCartList((oldCartList) => {
      const existingItem = oldCartList.find((item) => item.id === product.id);

      // If item exists and new quantity would be 0 or less, remove item
      if (existingItem && existingItem.quantity + change <= 0) {
        return oldCartList.filter((item) => item.id !== product.id);
      }

      // If item exists, update quantity
      if (existingItem) {
        return oldCartList.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: item.quantity + change,
                price: product.price * (item.quantity + change),
              }
            : item
        );
      }

      // If item doesn't exist (shouldn't happen in this context)
      return oldCartList;
    });
  };

  const addToCartItem = (product) => {
    // Add product to cart, increment quantity if already exists
    setCartList((oldCartList) => {
      const existingItem = oldCartList.find((item) => item.id === product.id);
      if (existingItem) {
        return oldCartList.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: item.quantity + 1,
                price: product.price * (item.quantity + 1),
              }
            : item
        );
      } else {
        return [
          ...oldCartList,
          {
            id: product.id,
            name: product.name,
            quantity: 1,
            price: product.price,
          },
        ];
      }
    });
  };

  console.log(cartList); // Debugging purposes

  return (
    <div className="bg-[#FFF0F5] py-12">
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        <div className="flex flex-wrap justify-between mb-10">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800">
            Our Products
          </h2>

          {/* Filter and sort Options */}
          <div className="flex flex-wrap gap-4 justify-end items-center">
            <div className="flex items-center">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full sm:w-auto"
                aria-label="Sort by"
              >
                <option key="relevance" value="relevance">
                  Price: Relevance
                </option>
                <option key="price-asc" value="price-asc">
                  Price: Low to High
                </option>
                <option key="price-desc" value="price-desc">
                  Price: High to Low
                </option>
              </select>
            </div>
            <div className="flex items-center">
              <select
                value={filterCategory}
                onChange={(e) => setFilterCategory(e.target.value)}
                className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full sm:w-auto"
                aria-label="Filter by category"
              >
                <option key="all" value="all">
                  Filter - All
                </option>
                <option key="Chicken" value="Chicken">
                  Chicken
                </option>
                <option key="Dairy & Eggs" value="Dairy & Eggs">
                  Dairy & Eggs
                </option>
              </select>
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => {
            // check If item is already in cart
            const cartItem = cartList.find((item) => item.id === product.id);

            return (
              <motion.div
                key={product.id}
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

                  {/* Add to Cart Button */}
                  {cartItem ? (
                    <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleQuantityChange(product, -1)}
                      className="px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded-md transition-colors"
                    >
                      -
                    </button>
                    <span className="w-8 text-center font-medium">
                      {cartItem.quantity}
                    </span>
                    <button
                      onClick={() => handleQuantityChange(product, 1)}
                      className="px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded-md transition-colors"
                    >
                      +
                    </button>
                  </div>
                ) : (
                  <motion.button
                    className="rounded-md transition-colors duration-300 ease-in-out"
                    onClick={() => addToCartItem(product)}
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
          })}
        </div>
      </div>
    </div>
  );
};

export default Products;
