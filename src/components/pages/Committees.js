import React from "react";
import "./Committees.css";
import Leftbarcontentcommittees from "./LeftbarcontentCommittees";
import Centerbarcontentcommittes from "./Centerbarcontentcommittes";
import RightbarcontentCommittees from "./RightbarcontentCommittees";

export default function Committees() {
  return (
    <div className="committees">
      <div className="committees__heading">
        <h1>Here are the Kaimosi-Kenya Rotary Club committees</h1>
      </div>
      <div className="committees__contentbody">
        <Leftbarcontentcommittees />
        <Centerbarcontentcommittes />
        <RightbarcontentCommittees />

        {/* <Sidebarcontentcommittees />
        <Centercontentcommittees />
        <Rightbarcontentcommittees /> */}
      </div>
    </div>
  );
}
