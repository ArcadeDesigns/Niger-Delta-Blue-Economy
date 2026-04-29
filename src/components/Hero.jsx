import React from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import DHL from "../../../assets/DHL.png";
import UPS from "../../../assets/UPS.png";
import FedEx from "../../../assets/FedEx.png";

gsap.registerPlugin(ScrollTrigger);

export default function Advert() {
  return (
    <section className="HeroContainer">
      <img
        src="https://res.cloudinary.com/renaissance-images/image/upload/v1775929345/QuinnDaisies/2151937269_ubbvn4.jpg"
        alt="Quinn Daisies"
      />

      <div className="HeroOverlay OverwriteHeroOverlayFlex">
        <div className="ServiceHeroContent">
          <h1>Growth, Performance, and Long-Term Value</h1>
          <p className="ServiceHeroContentText">
            Quinn Daisies offers tailored logistics solutions designed to
            streamline operations and enhance efficiency for businesses across
            diverse industries. Our team specializes in providing seamless,
            end-to-end logistics management that prioritizes reliability, speed,
            and cost-effectiveness, ensuring your goods reach their destination
            safely and on schedule.
          </p>

          <Link className="ApplicationButton" to="/">
            Learn More Here
            <span class="material-symbols-outlined">globe_location_pin</span>
          </Link>
        </div>

        <div className="PartnerBoxContainer">
          <div className="PartnerBox">
            <img src={DHL} alt="DHL" />
            <p>DHL</p>
          </div>

          <div className="PartnerBox">
            <img src={UPS} alt="UPS" />
            <p>UPS</p>
          </div>

          <div className="PartnerBox">
            <img src={FedEx} alt="FedEx" />
            <p>FedEx</p>
          </div>
        </div>
      </div>
    </section>
  );
}
