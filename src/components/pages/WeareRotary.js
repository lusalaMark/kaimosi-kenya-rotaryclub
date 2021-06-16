import React from "react";
import Leftsidebarcontentwearerotary from "./Leftsidebarcontentwearerotary";
import Centercontentwearerotary from "./Centercontentwearerotary";
import "./WeareRotary.css";
import Rightbarcontentwearerotary from "./RightbarcontentWearerotary";

export default function Wearerotary() {
  return (
    <div className="wearerotary">
      <div className="wearerotaryheading">
        <h1>Welcome to Kaimosi-Kenya Rotary Club</h1>
      </div>
      <div className="wearerotarycontent__body">
        <Leftsidebarcontentwearerotary />
        <Centercontentwearerotary />
        <Rightbarcontentwearerotary />
      </div>
    </div>
  );
}
