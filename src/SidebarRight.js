import React from "react";
import "./SidebarRight.css";
import image1 from "./images/flag.jpg";

function SidebarLeft() {
  return (
    <div className="sidebar__Right">
      {/* <div className="sidebarRight__top">{---<Widgets /> }</div> */}

      <div className="sidebarRight__bottom">
        <div className="sidebarRight__bottomheader">
          <p>
            <h1>Raise a flag</h1>
            <img src={image1} alt="" />
          </p>
        </div>

        <p>
          Raise a Flag for your community and celebrate national holidays in
          2021
        </p>
      </div>
      <div className="sidebarRight__bottom">
        <div className="sidebarRight__bottomheader">
          <p>
            <h1>Welcome to Kaimosi-Kenya Rotary Club</h1>
          </p>
        </div>
        <p>
          Service Above Self Tuesdays at 12:00 PM Coast Tsawwassen Inn 1665 –
          56th Street Delta, BC V4L 2B2 Canada <br />
          <br />
          Ladner Rotary continues to meet weekly on ZOOM.
          <br />
          <br />
          To attend as a guest, please contact Patrivk Lidovolo
          patricklidovolo@gmail.com or club president Lydia Khasungu Songole
          lydiakhasungu@gmail.com
        </p>
      </div>

      <div className="sidebarRight__bottom">
        <div className="sidebarRight__bottomheader">
          <p>
            <h1>ROTARY THEME 2020-21</h1>
          </p>
        </div>

        <p>Rotary Opens Opportunities.</p>
      </div>
      <div className="sidebarRight__bottom">
        <div className="sidebarRight__bottomheader">
          <p>
            <h1>SPEAKERS RI</h1>
          </p>
        </div>

        <p>
          Director Valarie Wafer <br />
          Apr 06, 2021 12:00 PM
          <br /> Diversity, Equity, and Inclusion in Rotary <br />
          <br />
          Sean Dollinger <br />
          Apr 13, 2021 12:00 PM <br />
          Plant Based Market <br />
          <br />
          David Nicaudri
          <br /> Apr 20, 2021 12:00 PM <br />
          Captain Cook Rediscovered
          <br />
          <br /> Yvonne Anderson
          <br /> Apr 27, 2021 <br />
          Delta Chamber Transportation Policy
          <br />
          <br />
        </p>
      </div>

      <div className="sidebarRight__bottom">
        <div className="sidebarRight__bottomheader">
          <p>
            <h1>BULLETINS</h1>
          </p>
        </div>

        <p>
          Kaimosi-Kenya Rotary Club Bulletin, March 30, 2021 Mar 30, 2021 <br />
          <br />
          Kaimosi-Kenya Rotary Club Bulletin, February 24, 2021 Feb 24, 2021{" "}
          <br />
          <br />
          Kaimosi-Kenya Rotary Club Bulletin, January 27, 2021 Jan 27, 2021{" "}
          <br />
          <br />
          Kaimosi-Kenya Rotary Club Bulletin, January 27, 2021 Jan 27, 2021{" "}
          <br />
          <br />
          Kaimosi-Kenya Rotary Club Bulletin, December 21, 2020 Dec 21, 2020{" "}
          <br />
          <br />
          Kaimosi-Kenya Rotary Club Bulletin, November 27, 2020 Nov 27, 2020{" "}
          <br />
          <br />
          Kaimosi-Kenya Rotary Club Bulletin, October 30, 2020 Oct 30, 2020{" "}
          <br />
          <br />
          Kaimosi-Kenya Rotary Club Bulletin, September 28, 2020 Sep 28, 2020
        </p>
      </div>
    </div>
  );
}

export default SidebarLeft;
