import React from "react";
import "./ClubLeaders.css";
import Leftsidebarcontentclubleaders from "./Leftsidebarcontentclubleaders";
import Centercontentclubleaders from "./Centercontentclubleaders";

export default function Clubleaders() {
  return (
    <div className="clubleaders__rotary">
      <div className="clubleaders__heading">
        <h1>KAIMOSI-KENYA ROTARY CLUB LEADERS</h1>
      </div>
      <div className="clubleaders__contentbody">
        <Leftsidebarcontentclubleaders />
        <Centercontentclubleaders />
      </div>
    </div>
  );
}
