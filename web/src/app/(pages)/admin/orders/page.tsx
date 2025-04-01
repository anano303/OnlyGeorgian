"use client";

import { OrdersList } from "@/modules/admin/components/orders-list";
import "./adminOrders.css";

export default function AdminOrdersPage() {
  return (
    <div className="admin-orders-container">
      <div className="scrollable-container">
        <div className="orders-content">
          <OrdersList />
        </div>
      </div>
    </div>
  );
}
