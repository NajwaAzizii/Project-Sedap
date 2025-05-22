import { useState } from "react";
import productsData from "./products.json";

// Mengambil unique dari brand
const brands = [...new Set(productsData.map((p) => p.brand))];

export default function Products() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTag, setActiveTag] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("");

  const filteredProducts = productsData.filter((product) => {
    const matchQuery =
      product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.brand.toLowerCase().includes(searchQuery.toLowerCase());

    const matchTag = activeTag ? product.tags.includes(activeTag) : true;
    const matchBrand = selectedBrand ? product.brand === selectedBrand : true;

    return matchQuery && matchTag && matchBrand;
  });

  return (
    <div className="p-8 bg-gray-100 dark:bg-gray-900 min-h-screen">
      <div className="mb-6 flex flex-col lg:flex-row flex-wrap gap-4 items-start lg:items-center">
        <input
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full lg:w-1/3 p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <select
          value={selectedBrand}
          onChange={(e) => setSelectedBrand(e.target.value)}
          className="p-3 rounded-lg border border-gray-300 w-full lg:w-auto"
        >
          <option value="">All Brands</option>
          {brands.map((brand) => (
            <option key={brand} value={brand}>
              {brand}
            </option>
          ))}
        </select>

        <button
          onClick={() => {
            setSearchQuery("");
            setActiveTag(null);
            setSelectedBrand("");
            setSelectedCategory("");
          }}
          className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-all"
        >
          Reset Filter
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="border p-4 rounded-lg shadow-md bg-white transition-transform hover:scale-105"
          >
            <h1 className="text-2xl font-bold mb-2">{product.title}</h1>
            <p className="text-gray-600 mb-2">{product.description}</p>

            <ul className="text-sm text-gray-700 space-y-1 mb-3">
              <li>
                <b>Category:</b> {product.category}
              </li>
              <li>
                <b>Price:</b> ${product.price.toFixed(2)}{" "}
                {product.discountPercentage > 0 && (
                  <span className="ml-2 text-green-600 font-semibold">
                    (-{product.discountPercentage}%)
                  </span>
                )}
              </li>
              <li>
                <b>Rating:</b>{" "}
                <span className="text-yellow-500">⭐ {product.rating}</span>
              </li>
              <li>
                <b>Stock:</b>{" "}
                {product.stock > 0 ? (
                  <span className="text-green-600">In Stock ({product.stock})</span>
                ) : (
                  <span className="text-red-600">Out of Stock</span>
                )}
              </li>
              <li>
                <b>Dimensions:</b>{" "}
                W: {product.dimensions.width}mm, H: {product.dimensions.height}mm, D:{" "}
                {product.dimensions.depth}mm
              </li>
            </ul>

            <div className="flex flex-wrap gap-2 mb-4">
              {product.tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-gray-200 text-gray-700 px-2 py-1 text-xs rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
