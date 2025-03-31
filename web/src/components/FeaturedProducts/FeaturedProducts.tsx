"use client";

import React, { useEffect, useState } from "react";
import { getProducts } from "@/modules/products/api/get-products";
import { Product } from "@/types";
import "./FeaturedProducts.css";
import Image from "next/image";

const FeaturedProducts: React.FC = () => {
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchFeaturedProducts() {
      const { items } = await getProducts(1, 3); // Fetch 4 featured products
      setFeaturedProducts(items);
    }
    fetchFeaturedProducts();
  }, []);

  return (
    <div className="featured-products-container">
      <div className="featured-products-header">
        <h3>გრანდიოზული ფასდაკლებები</h3>
      </div>
      <div className="featured-products-grid">
        {featuredProducts.map((product) => (
          <div key={product._id} className="featured-product-card">
            <Image
              src={product.images[0]}
              alt={product.name}
              className="featured-product-image"
              width={300} // Provide a default width
              height={200} // Provide a default height
              layout="responsive" // Ensure the image is responsive
            />
            <div className="featured-product-info">
              <h4 className="featured-product-name">{product.name}</h4>
              <p className="featured-product-brand">{product.brand}</p>
              <div className="featured-product-prices">
                <span className="current-price">{product.price}₾</span>
              </div>
              
            </div>
            <button className="featured-product-button">იყიდე</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
