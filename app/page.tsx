"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Product } from "./types/Product";
import { getProducts, deleteProduct } from "./utils/productStorage";

const HomePage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [categoryFilter, setCategoryFilter] = useState("");
  const [priceFilter, setPriceFilter] = useState("");

  useEffect(() => {
    setProducts(getProducts());
  }, []);

  // Get unique categories
  const uniqueCategories = [...new Set(products.map((product) => product.category))];

  const filteredProducts = products.filter((product) => {
    return (
      (categoryFilter ? product.category === categoryFilter : true) &&
      (priceFilter ? product.price <= parseFloat(priceFilter) : true)
    );
  });

  const handleDelete = (id: string) => {
    deleteProduct(id);
    setProducts(getProducts());
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Product Listing</h1>
      <Link href="/add" className="text-blue-500 mb-4 inline-block">
        Add Product
      </Link>
      
      {/* Filters */}
      <div className="mb-4">
        <label className="mr-2">Filter by Category:</label>
        <select
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
          className="border rounded px-2 py-1 mr-4"
        >
          <option value="">All Categories</option>
          {uniqueCategories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>

        <label className="mr-2">Filter by Price (below):</label>
        <input
          type="number"
          value={priceFilter}
          onChange={(e) => setPriceFilter(e.target.value)}
          className="border rounded px-2 py-1"
          placeholder="Enter max price"
        />
      </div>

      {/* Product List */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product.id} className="border p-4 rounded">
              <h2 className="text-xl font-semibold">{product.name}</h2>
              <p>${product.price}</p>
              <div className="flex space-x-2 mt-2">
                <Link href={`/product/${product.id}`} className="text-blue-500">
                  View
                </Link>
                <Link href={`/edit/${product.id}`} className="text-blue-500">
                  Edit
                </Link>
                <button
                  onClick={() => handleDelete(product.id)}
                  className="text-red-500"
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>No products found matching your criteria.</p>
        )}
      </div>
    </div>
  );
};

export default HomePage;
