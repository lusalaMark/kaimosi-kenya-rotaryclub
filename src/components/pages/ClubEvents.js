import React from "react";
import "./ClubEvents.css";
import Centercontentclubevents from "./Centercontentclubevents";
import Sidebarcontentclubevents from "./Sidebarcontentclubevents";

export default function ClubEvents() {
  return (
    <div className="clubEvents__contact">
      <div className="clubEvents__heading">
        <h1>Kaimosi-kenya Rotary Club Events</h1>
      </div>
      <div className="clubEvents__contentbody">
        <Sidebarcontentclubevents />
        <Centercontentclubevents />
      </div>
    </div>
  );
}
