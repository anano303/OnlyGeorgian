"use client";

import React from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchWithAuth } from "@/lib/fetch-with-auth";
import { Product } from "@/types";
import LoadingAnim from "../loadingAnim/loadingAnim";
import { ProductCard } from "@/modules/products/components/product-card";
import styles from "./TopItems.module.css";
import Link from "next/link";

const TopItems: React.FC = () => {
  const { data: topProducts, isLoading } = useQuery({
    queryKey: ["topProducts"],
    queryFn: async () => {
      const searchParams = new URLSearchParams({
        page: "1",
        limit: "3",
        sort: "-rating",
      });
      const response = await fetchWithAuth(
        `/products?${searchParams.toString()}`
      );
      const data = await response.json();
      return data.items.slice(0, 7);
    },
  });

  if (isLoading) {
    return (
      <div className={styles.container}>
        <LoadingAnim />
      </div>
    );
  }

  return (
    <div className={styles.container}>
       <div className={styles.titleSeemore}>
        <h3>ყველაზე გაყიდვადი</h3>
        <div className={styles.seemore}>
          <Link href="/shop">
            <button className={styles.seeMoreBtn}>ნახე მეტი</button>
          </Link>
        </div>
        </div>
      <div className={styles.gridContainer}>
        {topProducts?.map((product: Product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default TopItems;
