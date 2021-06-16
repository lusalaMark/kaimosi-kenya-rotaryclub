import React from "react";
import "./AboutUs.css";
import Centercontentaboutus from "./Centercontentaboutus";
import Sidebarcontentaboutus from "./Sidebarcontentaboutus";
import Rightbarcontentaboutus from "./Rightbarcontentaboutus";

export default function AboutUs() {
  return (
    <div className="aboutus__rotary">
      <div className="aboutus__heading">
        <h1>About us </h1>
      </div>
      <div className="aboutus__body">
        <Sidebarcontentaboutus />
        <Centercontentaboutus />
        <Rightbarcontentaboutus />
      </div>
    </div>
  );
}
