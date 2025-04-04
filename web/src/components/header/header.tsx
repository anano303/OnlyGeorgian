"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import logo from "../../assets/Images/Logo.png";
import menu from "../../assets/Images/menu.png";
import { CartIcon } from "@/modules/cart/components/cart-icon";
import "./header.scss";
import UserMenu from "./user-menu";

import SearchBox from "../SearchBox/search-box";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className={`header paper-texture ${isMenuOpen ? "mobile-menu-active" : ""}`}>
        <div className="logo">
          <div className="menu" onClick={toggleMenu}>
            <Image src={menu} 
            alt="menu"
            width={48}
            style={{ height: "auto" }}
            />
          </div>
          <Link href="/">
            <Image
              src={logo}
              width={161}
              style={{ height: "auto" }}
              alt="logo soulArt"
            />
          </Link>
        </div>
       
        <div className="search-wrapper desktop-only">
          <SearchBox />
        </div>
        
        <div className="auth-cart desktop-only">
          <div className="d-none">
            <UserMenu />
          </div>
          <CartIcon />
        </div>
        
        {/* Mobile Menu */}
        <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
          <div className="mobile-menu-content">
            <div className="mobile-menu-item">
              <UserMenu />
            </div>
            <div className="mobile-menu-item">
              <CartIcon />
            </div>
          </div>
        </div>
      </header>
      
      {/* Mobile search container that appears below header */}
      <div className="mobile-search-container">
        <div className="search-wrapper">
          <SearchBox />
        </div>
      </div>
    </>
  );
}
