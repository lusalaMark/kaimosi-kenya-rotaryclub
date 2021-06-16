import React from "react";
import "./ProjectPartners.css";
import Centercontentprojectpartners from "./Centercontentprojectpartners";
import Sidebarcontentprojectpartners from "./Sidebarcontentprojectpartners";

export default function ProjectPartners() {
  return (
    <div className="ProjectPartners__contact">
      <div className="ProjectPartners__heading">
        <h1>PROJECT PARTNERS</h1>
        <h3>
          Kaimosi-Kenya Rotary Club partners wuth th following institutions to
          ensure service delivery to the people is achieved in the best way
          possible
        </h3>
      </div>

      <div className="ProjectPartners__contentbody">
        <Sidebarcontentprojectpartners />
        <Centercontentprojectpartners />
      </div>
    </div>
  );
}
