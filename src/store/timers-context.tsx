import { createContext, FC, useContext, useReducer, type ReactNode } from "react";

export type Timer = {
    name: string;
    duration: number;
};

type TimersState = {
    isRunning: boolean;
    timers: Timer[];
};

type TimersContextValue = TimersState & {
    addTimer: (timerData: Timer) => void;
    startTimers: () => void;
    stopTimers: () => void;
}

type TimersContextProviderProps = {
    children: ReactNode;
}

type StartTimersAction = {
    type: 'START_TIMERS';
}

type StopTimersAction = {
    type: 'STOP_TIMERS';
}

type AddTimerAction = {
    type: 'ADD_TIMER';
    payload: Timer;
}

type Action = StartTimersAction | StopTimersAction | AddTimerAction;

// initial state
const initialState: TimersState = {
    isRunning: false,
    timers: []
}

const TimersContext = createContext<TimersContextValue | null>(null);

export const useTimerContext = () => {
    const timersCtx = useContext(TimersContext);
    if (timersCtx === null) {
        throw new Error("Something is wrong with timersCtx");
    }

    return timersCtx;
};

const timersReducer = (state: TimersState, action: Action): TimersState => {

    switch(action.type) {
        case 'START_TIMERS':
            return {
                ...state,
                isRunning: true
            };
        case 'STOP_TIMERS':
            return {
                ...state,
                isRunning: false
            };
        case 'ADD_TIMER':
            return {
                ...state,
                timers: [
                    ...state.timers,
                    {...action.payload}
                ]
            };
        default:
            return state;

    }

}

const TimersContextProvider: FC<TimersContextProviderProps> = ({children}) => {

    const [timersState, dispatch] = useReducer(timersReducer, initialState);

    const ctx: TimersContextValue = {
        timers: timersState.timers,
        isRunning: timersState.isRunning,
        addTimer: (timerData) => {
            dispatch({type: 'ADD_TIMER', payload: timerData});
        },
        startTimers: () => {
            dispatch({type: 'START_TIMERS'});
        },
        stopTimers: () => {
            dispatch({type: 'STOP_TIMERS'});
        }
    }
    return (
        <TimersContext.Provider value={ctx}>
            {children}
        </TimersContext.Provider>
    );
};

export default TimersContextProvider;