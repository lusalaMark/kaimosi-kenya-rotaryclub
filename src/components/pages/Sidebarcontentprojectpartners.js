import React from "react";
import "./Sidebarcontentprojectpartners.css";
import image1 from "../../images/9.jpg";
import image2 from "../../images/10.jpg";
import image3 from "../../images/11.jpg";
import image4 from "../../images/12.jpg";

function Sidebarcontentprojectpartners() {
  return (
    <div className="sidebarcontent__projectpartners">
      <div className="content__cen">
        <div className="contactpeople">
          <div className="picture">
            <img src={image1} alt="" />
          </div>
          <div className="imgtext">Friends College Kaimosi</div>
        </div>
        <div className="contactpeople">
          <div className="picture">
            <img src={image2} alt="" />
          </div>
          <div className="imgtext">Kaimosi Friends Universty College</div>
        </div>
        <div className="contactpeople">
          <div className="picture">
            <img src={image3} alt="" />
          </div>
          <div className="imgtext">Friends School Kaimosi Girls</div>
        </div>
        <div className="contactpeople">
          <div className="picture">
            <img src={image4} alt="" />
          </div>
          <div className="imgtext">Rural Service Programme Kaimosi</div>
        </div>
      </div>
    </div>
  );
}

export default Sidebarcontentprojectpartners;
