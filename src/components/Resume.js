import React from "react";
import resume from "../assets/resume.PNG";

export default function Resume() {
  return (
    <div id="resume" >
      <img src={resume} alt="resume" style={{ display: "block", maxWidth: "70%", height: "auto", marginLeft: "auto", marginRight: "auto"}}/>
    </div>
  );
}
