import React from "react";
import "./VerticalNavbar.css";
import { Link } from "react-router-dom";
import { ReactComponent as Icon1 } from "../../assets/icon1.svg";
import { ReactComponent as Icon2 } from "../../assets/icon2.svg";
import { ReactComponent as Icon3 } from "../../assets/icon3.svg";
import { ReactComponent as Icon4 } from "../../assets/icon4.svg";
import { Tooltip } from "react-tooltip";

/**
 * Function VerticalNavbar - VerticalNavBar creation.
 */
const VerticalNavbar = () => {
  return (
    <div className="verticalNavbar">
      <div className="verticalNavbarIcons">
        <Link
          to={"#"}
          className="verticalNavbarIcon1"
          data-tooltip-id="my-tooltip"
          data-tooltip-place="top"
          data-tooltip-content="Pas implémenté !"
        >
          <Tooltip id="my-tooltip" className="tooltip" />
          <Icon1 />
        </Link>
        <Link
          to={"#"}
          className="verticalNavbarIcon2"
          data-tooltip-id="my-tooltip"
          data-tooltip-place="top"
          data-tooltip-content="Pas implémenté !"
        >
          <Tooltip id="my-tooltip" className="tooltip" />
          <Icon2 />
        </Link>
        <Link
          to={"#"}
          className="verticalNavbarIcon3"
          data-tooltip-id="my-tooltip"
          data-tooltip-place="top"
          data-tooltip-content="Pas implémenté !"
        >
          <Tooltip id="my-tooltip" className="tooltip" />
          <Icon3 />
        </Link>
        <Link
          to={"#"}
          className="verticalNavbarIcon4"
          data-tooltip-id="my-tooltip"
          data-tooltip-place="top"
          data-tooltip-content="Pas implémenté !"
        >
          <Tooltip id="my-tooltip" className="tooltip" />
          <Icon4 />
        </Link>
      </div>

      <div className="verticalNavbarText">Copiryght, SportSee 2020</div>
    </div>
  );
};

export default VerticalNavbar;
