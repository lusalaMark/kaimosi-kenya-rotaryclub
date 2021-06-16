import React from "react";
import "./Whatdoesrotarydo.css";
import Sidebarcontentwhatdoesrotarydo from "./Sidebarcontentwhatdoesrotarydo";
import Centercontentwhatdoesrotarydo from "./Centercontentwhatdoesrotarydo";

export default function Whatdoesrotarydo() {
  return (
    <div className="Kaimosirotaryserviceprojects__contact">
      <div className="Kaimosirotaryserviceprojects__heading">
        <h1>What does Rotary do?</h1>
      </div>
      <div className="Kaimosirotaryserviceprojects__contentbody">
        <Sidebarcontentwhatdoesrotarydo />
        <Centercontentwhatdoesrotarydo />
      </div>
    </div>
  );
}
