"use client";

import { useEffect, useState } from "react";
import { Product } from "../../types/Product";
import { getProducts } from "../../utils/productStorage";

export default function ProductDetail({ params }: { params: { id: string } }) {
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    const products = getProducts();
    const foundProduct = products.find((p) => p.id === params.id);
    if (foundProduct) {
      setProduct(foundProduct);
    } else {
      setProduct(null);
    }
  }, [params.id]);

  if (product === null) {
    return <div>Product not found. Please check the product ID and try again.</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col md:flex-row">
        <img src={product.imageUrl} alt={product.name} className="w-full md:w-1/2 h-64 object-cover" />
        <div className="md:ml-4 mt-4 md:mt-0">
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="text-gray-600 mt-2">${product.price}</p>
          <p className="mt-4">{product.description}</p>
          <p className="mt-2 text-sm text-gray-500">Category: {product.category}</p>
        </div>
      </div>
    </div>
  );
}
