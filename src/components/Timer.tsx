import { useEffect, useMemo, useState } from "react";

interface ITimer {
  hours: number,
  minutes?: number,
  seconds?: number,
  timerOver: boolean,
  setTimerOver(param: boolean): void,
}

export default function Timer({
  hours,
  minutes = 0,
  seconds = 0,
  timerOver,
  setTimerOver,
}: ITimer) { 
  const [[h, m, s], setTime] = useState([hours, minutes, seconds]);
  const timerClock = useMemo(() => (timerOver ? "over-timer" : "timer"),[timerOver]);

  const tick = () => {
    if (timerOver) return;

    if (h === 0 && m === 0 && s === 0) {
      setTimerOver(true);
    } else if (m === 0 && s === 0) {
      setTime([h - 1, 59, 59]);
    } else if (s == 0) {
      setTime([h, m - 1, 59]);
    } else {
      setTime([h, m, s - 1]);
    }
  };

  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);
    return () => clearInterval(timerID);
  });

  return (
    <div>
      <span className={timerClock}>
        {`${h.toString().padStart(2, "0")}:${m.toString().padStart(2, "0")}:${s
          .toString()
          .padStart(2, "0")}`}
      </span>
    </div>
  );
}
