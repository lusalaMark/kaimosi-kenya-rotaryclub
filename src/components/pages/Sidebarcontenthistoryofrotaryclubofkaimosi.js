import React from "react";
import { Link } from "react-router-dom";
import "./Sidebarcontenthistoryofrotaryclubofkaimosi.css";

function Sidebarcontenthistoryofrotaryclubofkaimosi() {
  return (
    <div className="sidebarcontent__historyofrotaryclubofkaimosi">
      <div className="subpagesmain__historyofrotaryclubofkaimosi">
        <h3>SERVICE PROJECTS</h3>
      </div>
      <div className="subpage__historyofrotaryclubofkaimosi">
        <Link to="/" style={{ textDecoration: "none", color: "blue" }}>
          <h3>Subpages</h3>
        </Link>
      </div>
      <div className="subpage__historyofrotaryclubofkaimosi">
        <Link to="/" style={{ textDecoration: "none", color: "blue" }}>
          <h3>Service Projects</h3>
        </Link>
      </div>
      <div className="subpage__historyofrotaryclubofkaimosi">
        <Link to="/" style={{ textDecoration: "none", color: "blue" }}>
          <h3>Adopt-A-Village Laos</h3>
        </Link>
      </div>
      <div className="subpage__historyofrotaryclubofkaimosi">
        <Link to="/" style={{ textDecoration: "none", color: "blue" }}>
          <h3>Related Pages</h3>
        </Link>
      </div>
      <div className="subpage__historyofrotaryclubofkaimosi">
        <Link to="/" style={{ textDecoration: "none", color: "blue" }}>
          <h3>Links</h3>
        </Link>
      </div>
      <div className="subpage__historyofrotaryclubofkaimosi">
        <Link to="/" style={{ textDecoration: "none", color: "blue" }}>
          <h3>Files</h3>
        </Link>
      </div>
      <div className="subpagee__historyofrotaryclubofkaimosi">
        <Link to="/" style={{ textDecoration: "none", color: "blue" }}>
          <h3>Photo Albums</h3>
        </Link>
      </div>
    </div>
  );
}

export default Sidebarcontenthistoryofrotaryclubofkaimosi;
