"use client";
import "./mainPhoto.css";
import Image from "next/image";
import mainOffer1 from "../../assets/Images/Main offer 1.png";
import mainOffer2 from "../../assets/Images/Main offer 2.png"; 
import mainOffer3 from "../../assets/Images/Main offer 3.png";   

const MainPhoto = () => {
  return (
    <div className="home-container">
      <div className="hero-section">

        <div className="mainOfferImages"> 
          <Image src={mainOffer1} alt="Main Offer 1" className="mainOfferImage" />
          <Image src={mainOffer2} alt="Main Offer 2" className="mainOfferImage" />
          <Image src={mainOffer3} alt="Main Offer 3" className="mainOfferImage" />

        </div>
        {/* <div className="hero-text">
        
        
        </div> */}
       
      </div>
    </div>
  );
};

export default MainPhoto;
