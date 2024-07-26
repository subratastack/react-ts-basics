import { useContext, type FC } from "react";
import { useTimerContext } from "../store/timers-context";
import Button from "../lib/Button";

const Header: FC = () => {

    const timersCtx = useTimerContext();

  return (
    <header>
      <h1>ReactTimer</h1>

        <Button el="button" className="button"
        onClick={
            timersCtx.isRunning ? 
            timersCtx.stopTimers : timersCtx.startTimers}>
            {timersCtx.isRunning ? 'Stop' : 'Start'} Timers
        </Button>
    </header>
  );
};

export default Header;
