import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../assets/blue_economy_logo.png";

export default function Navbar() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const hash = location.hash;

  const isHomeActive = hash === "#home" || hash === "";
  const isAboutActive = hash === "#about";
  const isIndustryActive = hash === "#industries";
  const isBlogActive = hash === "#blogpost";
  const isLeadershipActive = hash === "#leadership";

  const toggleMenu = () => setMenuOpen((current) => !current);
  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav className={isScrolled ? "Scroll" : ""}>
        <Link className="Navbar-Logo" to="/#home">
          <img src={Logo} alt="Blue Economy Summit Logo" />
        </Link>

        {/* Desktop Nav */}
        <div className="Navlink-Left">
          <a
            className={`NavlinkItem ${isHomeActive ? "active" : ""}`}
            href="#home"
          >
            Home
          </a>

          <a
            className={`NavlinkItem ${isAboutActive ? "active" : ""}`}
            href="#about"
          >
            The Summit
          </a>

          <a
            className={`NavlinkItem ${isIndustryActive ? "active" : ""}`}
            href="#industries"
          >
            Industries We Focus On
          </a>

          <a
            className={`NavlinkItem ${isBlogActive ? "active" : ""}`}
            href="#blogpost"
          >
            Blog Post
          </a>
        </div>

        {/*
        <div className="Navlink-Right">
          <a
            className={`NavlinkItem ${isLeadershipActive ? "active" : ""}`}
            href="#leadership"
          >
            Leadership
          </a>

          <a
            className="NavlinkItem"
            href="https://calendly.com/quinndaisies-info/meeting"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contact Us
          </a>
        </div>
        */}
      </nav>

      {/* Mobile Nav */}
      <div className="ResponsiveNavigation">
        <Link className="Navbar-Logo" to="/#home" onClick={closeMenu}>
          <img src={Logo} alt="Blue Economy Logo" />
        </Link>

        <div className="ResponsiveNavigationControl" onClick={toggleMenu}>
          <p>Menu</p>
          <span className="material-symbols-outlined">
            {menuOpen ? "close" : "menu"}
          </span>
        </div>
      </div>

      <ul className={`responsiveMenuList ${menuOpen ? "active" : ""}`}>
        <div className="responsiveMenuListContainer">
          <li>
            <a href="#home" onClick={closeMenu}>
              Home
            </a>
          </li>

          <li>
            <a href="#about" onClick={closeMenu}>
              The Summit
            </a>
          </li>

          <li>
            <a href="#industries" onClick={closeMenu}>
              Industries
            </a>
          </li>

          <li>
            <a href="#blogpost" onClick={closeMenu}>
              Blog Post
            </a>
          </li>

          {/*
          <li>
            <a href="#leadership" onClick={closeMenu}>
              Leadership
            </a>
          </li>

          <li>
            <a
              href="https://calendly.com/quinndaisies-info/meeting"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
            >
              Contact Us
            </a>
          </li>
         */}
        </div>
      </ul>
    </>
  );
}
