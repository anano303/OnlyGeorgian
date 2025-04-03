'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { fetchWithAuth } from '@/lib/fetch-with-auth';
import { isAuthenticated } from '@/lib/api-client';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import './orders.css';

// Define types for the orders
interface OrderItem {
  product: {
    _id: string;
    name: string;
    image: string;
    price: number;
  };
  quantity: number;
  price: number;
}

interface Order {
  _id: string;
  orderItems: OrderItem[];
  paymentMethod: string;
  shippingAddress: {
    address: string;
    city: string;
    postalCode: string;
    country: string;
  };
  totalPrice: number;
  status: string;
  createdAt: string;
}

// Create a client-only component with no SSR to prevent prerendering errors
function ProfileOrdersContent() {
  // Use state to store orders
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  // This useEffect will only run in the browser after hydration
  useEffect(() => {
    const checkAuthAndFetchOrders = async () => {
      // Check if the user is authenticated
      if (!isAuthenticated()) {
        router.push('/login?redirect=/profile/orders');
        return;
      }

      try {
        // Fetch orders
        const response = await fetchWithAuth('/orders/my-orders');
        const data = await response.json();
        setOrders(data);
      } catch (err) {
        console.error('Error fetching orders:', err);
        setError('Failed to load orders. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    checkAuthAndFetchOrders();
  }, [router]);

  // Handle loading state
  if (loading) {
    return (
      <div className="orders-container">
        <h1 className="orders-title">ჩემი შეკვეთები</h1>
        <div className="loading-indicator">იტვირთება...</div>
      </div>
    );
  }

  // Handle error state
  if (error) {
    return (
      <div className="orders-container">
        <h1 className="orders-title">ჩემი შეკვეთები</h1>
        <div className="error-message">{error}</div>
      </div>
    );
  }

  // No orders found
  if (orders.length === 0) {
    return (
      <div className="orders-container">
        <h1 className="orders-title">ჩემი შეკვეთები</h1>
        <div className="no-orders">
          <p>თქვენ ჯერ არ გაქვთ შეკვეთები</p>
          <Link href="/shop" className="shop-now-button">
            ნახე პროდუქტები
          </Link>
        </div>
      </div>
    );
  }

  // Render orders
  return (
    <div className="orders-container">
      <h1 className="orders-title">ჩემი შეკვეთები</h1>
      
      <div className="orders-list">
        {orders.map((order) => (
          <div key={order._id} className="order-card">
            <div className="order-header">
              <h3 className="order-number">შეკვეთა #{order._id.substring(0, 8)}</h3>
              <span className="order-date">
                {new Date(order.createdAt).toLocaleDateString('ka-GE')}
              </span>
            </div>
            
            <div className="order-status">
              <span className={`status-badge status-${order.status.toLowerCase()}`}>
                {order.status}
              </span>
            </div>
            
            <div className="order-items">
              {order.orderItems.map((item, index) => (
                <div key={index} className="order-item">
                  <span className="item-name">{item.product.name}</span>
                  <span className="item-quantity">x{item.quantity}</span>
                  <span className="item-price">{item.price} ₾</span>
                </div>
              ))}
            </div>
            
            <div className="order-footer">
              <span className="order-total">სულ: {order.totalPrice} ₾</span>
              <Link href={`/profile/orders/${order._id}`} className="view-details-button">
                დეტალების ნახვა
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Dynamically import the content component with SSR disabled
// This prevents the component from being executed during static build
const OrdersContentWithNoSSR = dynamic(() => Promise.resolve(ProfileOrdersContent), {
  ssr: false,
});

// Export a simple wrapper that uses the dynamic component
export default function ProfileOrdersPage() {
  return <OrdersContentWithNoSSR />;
}
