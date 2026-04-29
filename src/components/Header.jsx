import React from "react";
import { Link } from "react-router-dom";

export default function Header({
  title,
  subtitle,
  description,
  buttonText,
  buttonLink,
  backgroundImages = [],
}) {
  return (
    <div className="OpportunityAppCtn">
      <div className="OpportunityAppHeader">
        <div className="ContentCtn-Center">
          {subtitle && (
            <span className="ContentCtn-Center-Span">{subtitle}</span>
          )}
          {title && <h1>{title}</h1>}
          {description && <p>{description}</p>}
        </div>

        {buttonText && buttonLink && (
          <div className="SingleBtnCtn-Center">
            <Link className="ApplicationButton" to={buttonLink}>
              {buttonText}
              <span class="material-symbols-outlined">globe_location_pin</span>
            </Link>
          </div>
        )}
      </div>

      {backgroundImages.length > 0 && (
        <div className="BackgroundImage">
          {backgroundImages.map((img, index) => (
            <img key={index} src={img} alt={`Background ${index + 1}`} />
          ))}
        </div>
      )}
    </div>
  );
}
