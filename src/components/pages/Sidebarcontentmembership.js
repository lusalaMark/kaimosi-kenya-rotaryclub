import React from "react";
import "./Sidebarcontentmembership.css";
import image1 from "../../images/team.jpg";
import image2 from "../../images/1.jpg";
import image3 from "../../images/2.jpg";
import image4 from "../../images/3.jpg";
import image5 from "../../images/4.jpg";

function Sidebarcontentmembership() {
  return (
    <div className="Sidebarcontentmembership">
      <div className="subpagesections__sidebarcontentmembership">
        <img src={image1} alt="" />
      </div>
      <div className="subpagesections__sidebarcontentmembership">
        <img src={image2} alt="" />
      </div>
      <div className="subpagesections__sidebarcontentmembership">
        <img src={image3} alt="" />
      </div>
      <div className="subpagesections__sidebarcontentmembership">
        <img src={image4} alt="" />
      </div>
      <div className="subpagesections__sidebarcontentmembership">
        <img src={image5} alt="" />
      </div>
    </div>
  );
}

export default Sidebarcontentmembership;
