import { type FC } from "react";
import { useTimerContext } from "../store/timers-context";
import Timer from "./Timer";

const Timers: FC = () => {
    const {timers} = useTimerContext();
    return <ul>
            {
                timers.map((timer) => {
                    return (
                        <li key={timer.name}>
                            <Timer name={timer.name} duration={timer.duration} />
                        </li>
                    )
                })
            }
        </ul>;
};

export default Timers;
  