// app/add/page.tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { addProduct } from "../utils/productStorage";
import { Product } from "../types/Product";
import { v4 as uuidv4 } from "uuid";

const AddProduct = () => {
  const router = useRouter();
  const [product, setProduct] = useState<Product>({
    id: "",
    name: "",
    description: "",
    price: 0,
    category: "",
    imageUrl: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addProduct({ ...product, id: uuidv4() });
    router.push("/");
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Add New Product</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Product Name"
          required
          value={product.name}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded"
        />
        <textarea
          name="description"
          placeholder="Product Description"
          required
          value={product.description}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded"
        ></textarea>
        <input
          type="number"
          name="price"
          placeholder="Price"
          required
          value={product.price}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded"
        />
        <input
          type="text"
          name="category"
          placeholder="Category"
          required
          value={product.category}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded"
        />
        <input
          type="url"
          name="imageUrl"
          placeholder="Image URL"
          required
          value={product.imageUrl}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded"
        />
        <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
