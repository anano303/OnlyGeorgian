"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import "./homePageShop.css";
import { ProductGrid } from "@/modules/products/components/product-grid";
import { getProducts } from "@/modules/products/api/get-products";
import { Product } from "@/types";
// import { ProductFilters } from "@/modules/products/components/product-filters";

export default function HomePageShop() {
  // const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchProducts() {
      const { items } = await getProducts(1, 3); // Fetch only 4 products
      // setProducts(items);
      setFilteredProducts(items);
    }
    fetchProducts();
  }, []);

  return (
    <div className="container">
      <div className="content">
        {/* <h1 className="title">ნამუშევრები </h1>

        <ProductFilters 
          products={products}
          onCategoryChange={setSelectedCategory}
          onArtistChange={setSelectedArtist}
        /> */}
        <div className="titleSeemore">
          <h3>ახალი დამატებული ნივთები</h3>
          <div className="see-more">
            <Link href="/shop">
              <button className="see-more-btn">ნახე მეტი</button>
            </Link>
          </div>
        </div>
        <ProductGrid products={filteredProducts} />
      </div>
    </div>
  );
}
