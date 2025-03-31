"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useUser } from "@/modules/auth/hooks/use-user";
import { useLogout } from "@/modules/auth/hooks/use-auth";
import "./user-menu.css";
import frame from "../../assets/Images/Frame 63.png";
import { Role } from "@/types/role";
import Image from "next/image";
// import hunterIcon from "../../assets/icons/hunter.png";
// import Image from "next/image";

export default function UserMenu() {
  const { user, isLoading } = useUser();
  const logout = useLogout();
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

  if (isLoading) {
    return <div className="loader"></div>;
  }

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
          {/* <Image src={hunterIcon} alt="hunterIcon" width={28} height={28} /> */}
        <p> ავტორიზაცია/ რეგისტრაცია</p>  {" "}
        </span>
      </Link>
    );
  }

  return (
    <div className="dropdown" ref={menuRef}>
      <button onClick={() => setIsOpen(!isOpen)} className="button">
        <span className="icon">🧑</span> {user.name}
      </button>
      {isOpen && (
        <div className="dropdown-menu">
          <div className="dropdown-label">My Account</div>
          <hr />
          <Link href="/profile" className="dropdown-item">
            Profile
          </Link>
          <Link href="/profile/orders" className="dropdown-item">
            Orders
          </Link>

          {(user.role === Role.Admin || user.role === Role.Seller) && (
            <>
              <hr />
              <div className="dropdown-label">Admin Dashboard</div>
              <Link href="/admin/products" className="dropdown-item">
                Products
              </Link>
            </>
          )}

          {user.role === Role.Admin && (
            <>
              <Link href="/admin/users" className="dropdown-item">
                Users
              </Link>
              <Link href="/admin/orders" className="dropdown-item">
                Orders
              </Link>
            </>
          )}

          <hr />
          <button onClick={() => logout.mutate()} className="dropdown-item">
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
}
