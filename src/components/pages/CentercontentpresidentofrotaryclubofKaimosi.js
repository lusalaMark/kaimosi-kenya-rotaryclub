import React from "react";
import "./CentercontentpresidentofrotaryclubofKaimosi.css";
import Socialmedia from "./Socialmedia";
import image1 from "../../images/stone.jpg";

function CentercontentpresidentofrotaryclubofKaimosi() {
  return (
    <div className="content__center">
      <div className="content__cen">
        <div className="logo">
          <img src={image1} alt="" />
        </div>

        <div className="feed">
          <p>Past Presidents of Kaimosi-Kenya Rotary Club</p>
        </div>
        <div className="contactpeople">
          <div className="imgtext">
            Lydia Khasungu Songole
            <br />
            Period : 2020-2022 <br />
          </div>
        </div>

        <div className="socialmedia__icons">
          <h1>Follow us on</h1>
          <Socialmedia />
        </div>
      </div>
    </div>
  );
}

export default CentercontentpresidentofrotaryclubofKaimosi;
