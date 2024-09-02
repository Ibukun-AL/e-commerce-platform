// app/edit/[id]/page.tsx
"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Product } from "../../types/Product";
import { getProducts, updateProduct } from "../../utils/productStorage";

const EditProduct = ({ params }: { params: { id: string } }) => {
  const router = useRouter();
  const { id } = params;
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    const products = getProducts();
    const currentProduct = products.find((p) => p.id === id) || null;
    setProduct(currentProduct);
  }, [id]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (product) {
      setProduct({ ...product, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (product) {
      updateProduct(product);
      router.push("/");
    }
  };

  if (!product) return <div>Product not found</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Edit Product</h1>
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
        <button type="submit" className="bg-yellow-500 text-white px-4 py-2 rounded">
          Update Product
        </button>
      </form>
    </div>
  );
};

export default EditProduct;