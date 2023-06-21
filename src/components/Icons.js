import React, { useState } from "react";
import notepad_icon from "../assets/notepad_icon.png";
import ie from "../assets/ie.png";
import solitaire_icon from "../assets/solitaire_icon.png";
import paint_icon from "../assets/paint_icon.png";
import { Window } from "react-windows-xp";
import Resume from "../components/Resume";
import About from "./About";
import Solitaire from "./Solitaire";
import Paint from "./Paint";
import "../App.css";

export default function Icons() {
  const [aboutOpen, setAboutOpen] = useState(false);
  const [resumeOpen, setResumeOpen] = useState(false);
  const [paintOpen, setPaintOpen] = useState(false);
  const [solitaireOpen, setSolitaireOpen] = useState(false);

  return (
    <div id="icons">
      <div className="icon-container">
        <div className="icon">
          <img
            src={notepad_icon}
            alt="notepad"
            onClick={() => setAboutOpen(true)}
          />
          <p>About Me</p>
        </div>
        <div className="icon">
          <img
            src={notepad_icon}
            alt="notepad"
            onClick={() => setResumeOpen(true)}
          />
          <p>Resume</p>
        </div>
        <div className="icon">
          <a
            href={"https://github.com/ahelfrich99"}
            target={"_blank"}
            rel="noreferrer"
          >
            <img src={ie} alt="github" />
          </a>
          <p>GitHub</p>
        </div>
        <div className="icon">
          <a
            href={"https://www.linkedin.com/in/adriannahelfrich/"}
            target={"_blank"}
            rel="noreferrer"
          >
            <img src={ie} alt="linkedin" />
          </a>
          <p>LinkedIn</p>
        </div>
        <div className="icon">
          <img
            src={paint_icon}
            alt="paint"
            onClick={() => setPaintOpen(true)}
          />
          <p>Paint</p>
        </div>
        <div className="icon">
          <img
            src={solitaire_icon}
            alt="solitaire"
            onClick={() => setSolitaireOpen(true)}
          />
          <p>Solitaire</p>
        </div>
      </div>
      {resumeOpen && (
        <Window
          title={"Resume"}
          className="window"
          children={<Resume />}
          showClose={true}
          onClose={() => setResumeOpen(false)}
        />
      )}
      {aboutOpen && (
        <Window
          title={"About Me"}
          className="window"
          children={<About />}
          showClose={true}
          onClose={() => setAboutOpen(false)}
        />
      )}
      {paintOpen && (
        <Window
          title={"Paint"}
          className="window"
          children={<Paint />}
          showClose={true}
          onClose={() => setPaintOpen(false)}
        />
      )}
      {solitaireOpen && (
        <Window
          title={"Solitaire"}
          className="window"
          children={<Solitaire />}
          showClose={true}
          onClose={() => setSolitaireOpen(false)}
        />
      )}
    </div>
  );
}
