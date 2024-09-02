// app/utils/productStorage.ts
import { Product } from "../types/Product";

const STORAGE_KEY = "ecommerce_products";

export const getProducts = (): Product[] => {
  if (typeof window === "undefined") return [];
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
};

export const addProduct = (product: Product): void => {
  const products = getProducts();
  products.push(product);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(products));
};

export const updateProduct = (updatedProduct: Product): void => {
  let products = getProducts();
  products = products.map((product) =>
    product.id === updatedProduct.id ? updatedProduct : product
  );
  localStorage.setItem(STORAGE_KEY, JSON.stringify(products));
};

export const deleteProduct = (id: string): void => {
  let products = getProducts();
  products = products.filter((product) => product.id !== id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(products));
};
