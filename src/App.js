import React, { useState } from "react";
import "./App.css";
import { Window } from "react-windows-xp";
import Icons from "./components/Icons";
import Welcome from "./components/Welcome";
import start from "./assets/start.png";

function App() {
  const [welcomeOpen, setWelcomeOpen] = useState(true);

  return (
    <div className="App">
      <div>
        <Icons />
      </div>
      <div>
        {welcomeOpen && (
          <Window
            title={"Welcome"}
            className="window"
            children={<Welcome />}
            showClose={true}
            onClose={() => setWelcomeOpen(false)}
          />
        )}
      </div>
      <div id="start-bar">
        <img src={start} onClick={() => setWelcomeOpen(true)} alt="start" />
      </div>
    </div>
  );
}

export default App;
