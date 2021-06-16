import React from "react";
import "./Committes.css";
import Rightbarcontentcommittes from "./Rightbarcontentcommittes";
import Sidebarcontentcommittes from "./Sidebarcontentcommittes";

export default function Committes() {
  return (
    <div className="committes">
      <div className="committes__heading">
        <h1>Kaimosi-Kenya Rotary Club Sub-Committes</h1>
      </div>
      <div className="committes__contentbody">
        <Sidebarcontentcommittes />
        <Rightbarcontentcommittes />
      </div>
    </div>
  );
}
