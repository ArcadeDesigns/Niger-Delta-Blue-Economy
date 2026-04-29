import React from "react";
import { Link } from "react-router-dom";
import Facebook from "../assets/Facebook.png";
import Instagram from "../assets/Instagram.png";
import LinkedIn from "../assets/LinkedIn.png";
import Logo from "../assets/blue_economy_logo.png";

export default function Footer() {
  return (
    <>
      <div className="Footer ApplicationFooter">
        <div className="ApplicationFlex">
          <div className="ApplicationFooterBox">
            <Link to="/" className="Logo">
              <img
                src={Logo}
                alt="Niger Delta Blue Economy Logo"
              />
            </Link>
          </div>

          
            <div className="ApplicationFooterBoxSocial">
              <Link to="#" className="Cta">
                <img
                  src={LinkedIn}
                  alt="Niger Delta Blue Economy Logo"
                />
              </Link>
              <Link to="#" className="Cta">
                <img
                  src={Instagram}
                  alt="Niger Delta Blue Economy Logo"
                />
              </Link>
              <Link to="#" className="Cta">
                <img
                  src={Facebook}
                  alt="Niger Delta Blue Economy Logo"
                />
              </Link>
            </div>
        </div>

        <div className="ApplicationFooterBottom">
          <div className="ApplicationFooterBox">
            <h4>Resources</h4>
            <div className="ApplicationFooterBoxBottomLink">
              <Link to="#" className="Cta">
                Terms of Use
              </Link>
              <Link to="#" className="Cta">
                Privacy Policy
              </Link>
              <Link to="#" className="Cta">
                Cookie Policy
              </Link>
            </div>
          </div>
          <p>2026 All rights Reserved - Niger Delta Blue Economy</p>
        </div>
      </div>
    </>
  );
}
