import { useEffect, useRef, useState, type FC } from "react";
import Container from "../lib/Container";
import { useTimerContext, type Timer as TimerProps } from "../store/timers-context";

const Timer:FC<TimerProps> = ({name, duration}) => {
  const interval = useRef<number | null>(null);
  const [remainingTime, setRemainingTime] = useState(duration * 1000);

  const {isRunning} = useTimerContext();

  if (remainingTime <= 0 && interval.current) {
    clearInterval(interval.current);
  }

  useEffect(() => {
    let timer: number;
    if (isRunning) {
      timer = setInterval(() => {
        setRemainingTime(prevTime => {
          if (prevTime <= 0) {
            return prevTime;
          }
          return prevTime - 50;
        });
      }, 50);
      interval.current = timer;
    } else if(interval.current) {
      clearInterval(interval.current);
    }
    

    return () => {
      clearInterval(timer);
    }
  }, [isRunning]);

  return (
    <Container as="article">
      <h2>{name}</h2>
      <p><progress max={duration * 1000} value={remainingTime} /></p>
      <p>{(remainingTime / 1000).toFixed(2)}</p>
    </Container>
  );
};

export default Timer;
