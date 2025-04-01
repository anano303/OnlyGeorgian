"use client";

import { ProductsList } from "@/modules/admin/components/products-list";
import "./adminProduct.css";

export default function AdminProductsPage() {
  return (
    <div className="admin-products-container">
      <div className="scrollable-container">
        <div className="products-content">
          <ProductsList />
        </div>
      </div>
    </div>
  );
}
