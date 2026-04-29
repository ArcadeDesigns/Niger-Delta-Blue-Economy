import React, { useRef } from "react";
import { Link } from "react-router-dom";

export default function Slide() {
  const imagePinRef = useRef(null);

  return (
    <section className="ApplicationImageDesign" ref={imagePinRef}>
      <div className="ApplicationChartContentListContainer">
        <div className="fill"></div>

        <div className="ApplicationChartContentList">
          <h2 className="ApplicationImageDesignHeader">
            Built for reliability, visibility, and vendor confidence
          </h2>
          {industrySlides.map((item, index) => (
            <div
              key={index}
              className={`ApplicationChartDesignItem ${
                index === 0 ? "is-active" : ""
              }`}
            >
              <h4>{item.title}</h4>
            </div>
          ))}
        </div>
      </div>

      <div className="ApplicationChartContent">
        <div className="ApplicationChartSlides">
          {industrySlides.map((item, index) => (
            <div
              key={index}
              className={`ApplicationChartSlide ${
                index === 0 ? "is-active" : ""
              }`}
            >
              <div className="ApplicationChartContentContainer">
                <img
                  className="ApplicationChartContentContainerImage"
                  src={item.image}
                  alt={item.title}
                />

                <div className="ApplicationChartContentContainerContent">
                  <p className="ApplicationChartContentContainerContentText">
                    {item.description}
                  </p>

                  <Link className="ApplicationButton" to={item.link}>
                    Learn More Here
                    <span class="material-symbols-outlined">
                      globe_location_pin
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
