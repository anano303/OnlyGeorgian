import React from "react";
import "./footer.css";
import Link from "next/link";
import Image from "next/image";
import map from "../../assets/Images/რუკა.png";

export default function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-section">
          <h3 className="footer-title">იხილე მხოლოდ შენთვის განკუთვნილი შეთავაზებები</h3>
          <Link href="/login" className="buttonAuth">ავტორიზაცია </Link>
          <Link href="/login" className="buttonReg">რეგისტრაცია </Link>
        </div>
        <div className="footer-section">
          <Image
            src={map}
            alt="map"
            className="footer-image responsive-image"
          />
        </div>
      </div>
    </footer>
  );
}