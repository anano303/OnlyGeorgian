"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

import "./user-menu.css";
import frame from "../../assets/Images/Frame 63.png";
import { Role } from "@/types/role";
import Image from "next/image";
import { useAuth } from "@/hooks/use-auth";

export default function UserMenu() {
  // Use the new authentication hook
  const { user, isLoading, logout } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Loading state
  if (isLoading) {
    return <div className="loader"></div>;
  }

  // Not authenticated state
  if (!user) {
    return (
      <Link href="/login" className="button">
        <span className="icon">
         <Image 
          src={frame}
          alt="authFrame"
          width={30}
          height={42}
         />
        <p> ავტორიზაცია/ რეგისტრაცია</p>
        </span>
      </Link>
    );
  }

  // Authenticated state
  return (
    <div className="dropdown" ref={menuRef}>
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="button"
        aria-label="Toggle user menu"
      >
        <span className="icon">🧑</span> {user.name || 'მომხმარებელი'}
      </button>
      
      {isOpen && (
        <div className="dropdown-menu">
          <div className="dropdown-label">ჩემი ანგარიში</div>
          <hr />
          <Link href="/profile" className="dropdown-item" onClick={() => setIsOpen(false)}>
            პროფილი
          </Link>
          <Link href="/profile/orders" className="dropdown-item" onClick={() => setIsOpen(false)}>
            შეკვეთები
          </Link>

          {(user.role === Role.Admin || user.role === Role.Seller) && (
            <>
              <hr />
              <div className="dropdown-label">ადმინ პანელი</div>
              <Link href="/admin/products" className="dropdown-item" onClick={() => setIsOpen(false)}>
                პროდუქტები
              </Link>
            </>
          )}

          {user.role === Role.Admin && (
            <>
              <Link href="/admin/users" className="dropdown-item" onClick={() => setIsOpen(false)}>
                მომხმარებლები
              </Link>
              <Link href="/admin/orders" className="dropdown-item" onClick={() => setIsOpen(false)}>
                შეკვეთები
              </Link>
            </>
          )}

          <hr />
          <button 
            onClick={() => {
              setIsOpen(false);
              logout();
            }} 
            className="dropdown-item logout-button"
          >
            გასვლა
          </button>
        </div>
      )}
    </div>
  );
}
