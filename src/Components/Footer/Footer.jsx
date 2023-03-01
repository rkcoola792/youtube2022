import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import "./Footer.scss"
const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h1>Category</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </div>

        <div className="item">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>

        <div className="item">
          <h1>About</h1>
          <span>
            Hey Everyone! This site is owned by Rajeev kumar and we are making a
            revolution in Indian market by selling the products all over India
            at a reasonable price filled with great quality.
          </span>
        </div>

        <div className="item">
          <h1>Contact</h1>
          {/* Contact us :<InstagramIcon></InstagramIcon>meveeastore_official
          <MailOutlineIcon></MailOutlineIcon>meveeastore@gmail.com
          <PhoneAndroidIcon></PhoneAndroidIcon>011-25242524 */}

          <span>
           You can contact us on meveea@gmail.com
          </span>
        </div>
      </div>

      <div className="bottom">
        <div className="left">
          <span className="logo">MEVEEA STORE</span>
          <span className="copyright">© Copyright 2023.All rights reserved</span>
        </div>
        <div className="right">
          <img src="/images/payment.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
