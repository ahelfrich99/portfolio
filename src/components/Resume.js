import React from "react";
import resume from "../assets/resume.PNG";
import Adrianna_Helfrich_Resume from "../assets/Adrianna_Helfrich_Resume.pdf";
import { Button } from "react-windows-xp";
import "../App.css";

export default function Resume() {
  return (
    <div id="resume">
      <img
        src={resume}
        alt="resume"
        style={{
          maxWidth: "70%",
        }}
      />
      <br />
      <a href={Adrianna_Helfrich_Resume} target={"_blank"} rel="noreferrer">
        <Button className={"button"}>Download</Button>
      </a>
    </div>
  );
}
