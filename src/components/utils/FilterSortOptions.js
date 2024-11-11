import React from "react";

const FilterSortOptions = ({
  sortBy,
  setSortBy,
  filterCategory,
  setFilterCategory,
}) => (
  <div className="flex flex-wrap gap-4 justify-end items-center">
    <div className="flex items-center">
      <select
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
        className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full sm:w-auto"
        aria-label="Sort by"
      >
        <option value="relevance">Price: Relevance</option>
        <option value="price-asc">Price: Low to High</option>
        <option value="price-desc">Price: High to Low</option>
      </select>
    </div>
    <div className="flex items-center">
      <select
        value={filterCategory}
        onChange={(e) => setFilterCategory(e.target.value)}
        className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full sm:w-auto"
        aria-label="Filter by category"
      >
        <option value="all">Filter - All</option>
        <option value="Chicken">Chicken</option>
        <option value="Dairy & Eggs">Dairy & Eggs</option>
      </select>
    </div>
  </div>
);

export default FilterSortOptions;
