import React from "react";
import "./Centercontentaboutus.css";
import Socialmedia from "./Socialmedia";

function Centercontentaboutus() {
  return (
    <div className="content__center">
      <div className="content__cen">
        <div className="socialmedia__icons">
          <h1>Follow us on</h1>
          <Socialmedia />
        </div>
      </div>
    </div>
  );
}

export default Centercontentaboutus;
