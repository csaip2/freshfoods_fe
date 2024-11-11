import React, { useState, useMemo } from "react";
import { productsData } from "../data/ProductsData";
import { useRecoilState } from "recoil";
import { cartListAtom } from "../recoil/atoms/CartStateAtom";
import { handleQuantityChange, addToCartItem } from "../utils/cartUtils";
import FilterSortOptions from "../utils/FilterSortOptions";
import ProductCard from "./ProductCard";

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

  return (
    <div className="bg-[#FFF0F5] py-12">
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        <div className="flex flex-wrap justify-between mb-10">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800">
            Our Products
          </h2>

          <FilterSortOptions
            sortBy={sortBy}
            setSortBy={setSortBy}
            filterCategory={filterCategory}
            setFilterCategory={setFilterCategory}
          />
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              cartItem={cartList.find((item) => item.id === product.id)}
              handleQuantityChange={(change) =>
                handleQuantityChange(product, change, setCartList)
              }
              addToCart={() => addToCartItem(product, setCartList)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
