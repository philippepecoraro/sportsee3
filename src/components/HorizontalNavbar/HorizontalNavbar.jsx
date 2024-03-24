import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { ReactComponent as SportseeLogo } from "../../assets/sportseeLogo.svg";
import { ReactComponent as SportseeText } from "../../assets/sportseeText.svg";
import { ReactComponent as Hamburger } from "../../assets/hamburger_button_menu_icon.svg";
import { ReactComponent as Close } from "../../assets/close.svg";
import "./HorizontalNavbar.css";

const HorizontalNavbar = () => {
  const [showHorizontalNavbar, setShowHorizontalNavbar] = useState(false);

  const handleShowHorizontalNavbar = () => {
    setShowHorizontalNavbar(!showHorizontalNavbar);
  };

  const removeShowHorizontalNavbar = () => {
    setShowHorizontalNavbar(false);
  };

  return (
    <nav className="horizontalNavbar">
      <div className="horizontalNavbarContainer">
        <div className="logo">
          <div className="logologo">
            <SportseeLogo />
          </div>
          <div className="logoText">
            <SportseeText />
          </div>
        </div>

        <div className="menu-icon" onClick={handleShowHorizontalNavbar}>
          {!showHorizontalNavbar ? <Hamburger /> : <Close />}
        </div>

        <div className={`navbar ${showHorizontalNavbar && "active"}`}>
          <ul>
            <li>
              <NavLink
                to={"/"}
                end
                className="navbarText1"
                onClick={removeShowHorizontalNavbar}
                style={({ isActive }) => {
                  return {
                    textDecoration: isActive ? "none" : "",
                  };
                }}
              >
                Accueil
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/emptypagereglage"}
                end
                className="navbarText3"
                onClick={removeShowHorizontalNavbar}
                style={({ isActive }) => {
                  return {
                    textDecoration: isActive ? "none" : "",
                  };
                }}
              >
                Réglage
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/emptypagecommunaute"}
                end
                className="navbarText4"
                onClick={removeShowHorizontalNavbar}
                style={({ isActive }) => {
                  return {
                    textDecoration: isActive ? "none" : "",
                  };
                }}
              >
                Communauté
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default HorizontalNavbar;
