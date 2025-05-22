import productsData from "./products.json";

export default function Products() {
  return (
    <div className="p-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {productsData.map((product) => (
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
