import React, { useState } from "react";
import "./App.css";
import DisplayComponent from "./Components/DisplayComponent";
import BtnDisplayComponent from "./Components/BtnDisplayComponent";
import Laps from "./Components/Laps/Laps";

function App() {
  const [time, setTime] = useState({ ms: 0, s: 0, m: 0, h: 0 });
  const [interv, setInterv] = useState();
  const [status, setStatus] = useState(0);
  const [laps, setLaps] = useState([]);
  const [isShowing, setShowing] = useState(true);

  let updatedMs = time.ms,
    updatedS = time.s,
    updatedM = time.m,
    updatedH = time.h;

  const start = () => {
    run();
    setStatus(1);
    setInterv(setInterval(run, 10));
  };

  const run = () => {
    if (updatedM === 60) {
      updatedH++;
      updatedM = 0;
    }
    if (updatedS === 60) {
      updatedM++;
      updatedS = 0;
    }
    if (updatedMs === 100) {
      updatedS++;
      updatedMs = 0;
    }
    updatedMs++;
    return setTime({ ms: updatedMs, s: updatedS, m: updatedM, h: updatedH });
  };

  const addLap = () => {
    setLaps([
      ...laps,
      {
        ms: updatedMs,
        s: updatedS,
        m: updatedM,
        h: updatedH,
      },
    ]);
  };

  const showCounter = () => {
    if (isShowing) {
      setShowing(false);
      reset();
      setStatus(3);
    } else {
      setShowing(true);
      setStatus(0);
    }
  };

  const stop = () => {
    clearInterval(interv);
    setStatus(2);
  };

  const reset = () => {
    clearInterval(interv);
    setStatus(0);
    setTime({ ms: 0, s: 0, m: 0, h: 0 });
    setLaps([]);
  };

  const resume = () => start();

  return (
    <div className="main-section">
      <div className="clock-holder">
        <div className="stopwatch">
          {isShowing && <DisplayComponent time={time} />}
          <BtnDisplayComponent
            addLap={addLap}
            resume={resume}
            reset={reset}
            stop={stop}
            status={status}
            start={start}
            showCounter={showCounter}
          />
          <Laps laps={laps} />
        </div>
      </div>
    </div>
  );
}

export default App;
