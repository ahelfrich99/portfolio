import React, { useState, useEffect } from "react";
import "./App.css";
import { Window } from "react-windows-xp";
import Icons from "./components/Icons";
import Welcome from "./components/Welcome";
import start from "./assets/start.png";
import windows_loading from "./assets/windows_loading.gif";

function App() {
  const [welcomeOpen, setWelcomeOpen] = useState(true);
  const [loadingOpen, setLoadingOpen] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoadingOpen(false);
    }, 3500);
  }, []);

  return (
    <div className="App">
      {loadingOpen && <img id="loading" src={windows_loading} alt="loading" />}
      <div>
        <Icons />
      </div>
      <div>
        {welcomeOpen && !loadingOpen && (
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
        {!loadingOpen && <img src={start} onClick={() => setWelcomeOpen(true)} alt="start" />}
      </div>
    </div>
  );
}

export default App;
