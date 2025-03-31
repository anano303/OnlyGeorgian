"use client";

import { useState } from "react";
import { useCart } from "@/modules/cart/context/cart-context";
import { useToast } from "@/hooks/use-toast";
import "./ProductCard.css";

interface AddToCartButtonProps {
  productId: string;
  countInStock: number;
  className?: string;
}

export function AddToCartButton({
  productId,
  countInStock,
  className,
}: AddToCartButtonProps) {
  const { addItem } = useCart();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  // const [quantity, setQuantity] = useState(1);

  const isOutOfStock = countInStock === 0;

  const handleAddToCart = async () => {
    setLoading(true);
    toast({
      title: "Adding to cart...",
      description: "Please wait while we add your item.",
    });

    try {
      await addItem(productId, 1); // Default quantity set to 1
    } catch (error) {
      console.log(error);
      toast({
        title: "Error",
        description: "Failed to add item to cart. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="cart-actions">
      <button
        className={`addButtonCart ${className}`}
        disabled={isOutOfStock || loading}
        onClick={handleAddToCart}
      >
        {isOutOfStock ? "არ არის მარაგში" : loading ? "Adding..." : "კალათაში დამატება"}
      </button>
    </div>
  );
}
