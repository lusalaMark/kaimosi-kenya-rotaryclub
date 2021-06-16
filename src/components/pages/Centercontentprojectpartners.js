import React from "react";
import "./Centercontentcontactus.css";
import image1 from "./countryside.jpg";

function Centercontentprojectpartners() {
  return (
    <div className="centercontent__projectpartners">
      <div className="content__cen">
        <div className="feed"></div>
        <div className="contactpeople">
          <div className="pic">
            <img src={image1} alt="" />
          </div>
          <div className="imgtext">?</div>
        </div>
        <div className="contactpeople">
          <div className="pic">
            <img src={image1} alt="" />
          </div>
          <div className="imgtext">?</div>
        </div>
      </div>
    </div>
  );
}

export default Centercontentprojectpartners;
