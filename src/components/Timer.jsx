import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Button from "./Button";
import { useContext, useEffect, useState, useRef } from "react";
import SettingsContext from "../contexts/SettingsContext";

const red = "#f54e4e";
const green = "#4aec8c";

function Timer() {

  const settingsInfo = useContext(SettingsContext);

  const [isPaused, setIsPaused] = useState(true);
  const [mode, setMode] = useState("work");
  const [secondsLeft, setSecondsLeft] = useState(settingsInfo.workMinutes * 60);

  const secondsLeftRef = useRef(secondsLeft);
  const isPausedRef = useRef(isPaused);
  const modeRef = useRef(mode);

  useEffect(() => {
    setSecondsLeft(mode === 'work' ? settingsInfo.workMinutes * 60 : settingsInfo.breakMinutes * 60);
    secondsLeftRef.current = mode === 'work' ? settingsInfo.workMinutes * 60 : settingsInfo.breakMinutes * 60;
  }, [settingsInfo, mode]);

  
  function tick() {
    secondsLeftRef.current = secondsLeftRef.current - 1;
    setSecondsLeft(secondsLeftRef.current)
  }
  
  useEffect( () => {

    function switchMode() {
      const nextMode = modeRef.current === "work" ? "break" : "work";
      const nextSeconds = (nextMode === 'work' ? settingsInfo.workMinutes : settingsInfo.breakMinutes) * 60;
  
      setMode(nextMode);
      modeRef.current = nextMode;
  
      setSecondsLeft(nextSeconds);
      secondsLeftRef.current = nextSeconds;
    }
    
    const interval = setInterval(() => {
      if (isPausedRef.current) {
        return;
      }
      if (secondsLeftRef.current === 0) {
        return switchMode();
      }
      tick();
    }, 1000);
    
    return () => clearInterval(interval)
  }, [settingsInfo]);
  
  const totalSeconds = mode === "work"
  ? settingsInfo.workMinutes * 60
    : settingsInfo.breakMinutes * 60

  const percentage = Math.round((secondsLeft / totalSeconds) * 100)

  const minutes = Math.floor(secondsLeft / 60)
  let seconds = secondsLeft % 60
  if (seconds < 10) seconds = "0" + seconds

  return (
    <>
      <div>
        <CircularProgressbar
          value={percentage}
          text={minutes + ":" + seconds}
          styles={buildStyles({
            pathColor:mode === 'work' ? red : green,
            textColor: "#fff",
            tailColor: "rgba(255,255,255,.2)",
          })}
        />
      </div>
      <div>
        {isPaused 
          ?  <Button type="button" label="Start" onClick={() => { setIsPaused(false); isPausedRef.current = false; }}/> 
          : <Button type="button" label="Pause" onClick={() => { setIsPaused(true); isPausedRef.current = true; }} />}
      </div>
    </>
  );
}

export default Timer;
