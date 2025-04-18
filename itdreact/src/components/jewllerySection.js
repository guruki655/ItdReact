import React, { useState, useEffect } from "react";
import JwelleryItem from "./jewlleryitem";

const ProductsSection = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/category/jewelery")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <>
      {products.map((product) => (
        <JwelleryItem key={product.id} product={product} />
      ))}
    </>
  );
};

export default ProductsSection;
