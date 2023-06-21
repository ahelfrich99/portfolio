import React from "react";
import resume from "../assets/resume.PNG";
import { Button } from "react-windows-xp";
import "../App.css";

export default function Resume() {
  return (
    <div id="resume">
      <img
        src={resume}
        alt="resume"
        style={{
          display: "block",
          maxWidth: "70%",
          height: "auto",
        }}
      />
      <br />
      <a href={resume} target={"_blank"} rel="noreferrer">
        <Button className={"button"}>Download</Button>
      </a>
    </div>
  );
}
