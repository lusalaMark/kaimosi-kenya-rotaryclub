import React from "react";
import { Link } from "react-router-dom";
import "./Leftsidebarcontentwearerotary.css";

function Leftsidebarcontentwearerotary() {
  return (
    <div className="sidebarcontent__wearerotary">
      <div className="subpages">
        <Link to="/" style={{ textDecoration: "none", color: "blue" }}>
          <h3>Welcome to Rotary</h3>
        </Link>
      </div>
      <div className="subpages">
        <Link to="/" style={{ textDecoration: "none", color: "blue" }}>
          <h3>Related Pages</h3>
        </Link>
      </div>
      <div className="subpages">
        <Link to="/" style={{ textDecoration: "none", color: "blue" }}>
          <h3>Links</h3>
        </Link>
      </div>
      <div className="subpages">
        <Link to="/" style={{ textDecoration: "none", color: "blue" }}>
          <h3>File</h3>
        </Link>
      </div>
      <div className="subpages">
        <Link to="/" style={{ textDecoration: "none", color: "blue" }}>
          <h3>Photo Albums</h3>
        </Link>
      </div>
    </div>
  );
}

export default Leftsidebarcontentwearerotary;
