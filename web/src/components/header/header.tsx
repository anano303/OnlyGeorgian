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
  const [isNavOpen] = useState(false);


  // const toggleNav = () => {
  //   setIsNavOpen((prevState) => !prevState); // Toggle navigation visibility
  // };



  return (
    <header className={`header paper-texture ${isNavOpen ? "mobile-nav-active" : ""}`}>
      <div className="logo">
        <div className="menu">
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
     
     <SearchBox />
      <div className="auth-cart">
        <div className="d-none">
          <UserMenu />
        </div>

        <CartIcon />
      
      </div>

      {/* Mobile Navigation */}
      {/* <div className="mobile-nav-btn" onClick={toggleNav}>
        <span className={`hamburger-icon ${isNavOpen ? "close" : ""}`}>
          {isNavOpen ? "×" : "☰"}
        </span>
      </div> */}
    </header>
  );
}
