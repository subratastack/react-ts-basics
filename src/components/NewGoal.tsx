import { type FormEventHandler, type FC, type FormEvent, useRef } from "react";

type NewGoalProp = {
    onAddGoal: (goal: string, summary: string) => void
};

const NewGoal: FC<NewGoalProp> = ({onAddGoal}) => {

    const goalRef = useRef<HTMLInputElement>(null);
    const summaryRef = useRef<HTMLInputElement>(null);

    const handleSubmit: FormEventHandler<HTMLFormElement> | undefined = 
    (event: FormEvent<HTMLFormElement>) => {
        event?.preventDefault();

        // new FormData(event.currentTarget);

        const enteredGoal = goalRef.current!.value;
        const enteredSummary = summaryRef.current!.value;

        event.currentTarget.reset();

        onAddGoal(enteredGoal, enteredSummary);

    };

    return (
        <form onSubmit={handleSubmit}>
            <p>
                <label htmlFor="goal">Your goal</label>
                <input id="goal" type="text" ref={goalRef} />
            </p>
            <p>
                <label htmlFor="summary">Short summary</label>
                <input id="summary" type="text" ref={summaryRef} />
            </p>
            <p>
                <button type="submit">Add goal</button>
            </p>
        </form>
    );
};

export default NewGoal;