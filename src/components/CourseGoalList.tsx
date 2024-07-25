import { type ReactNode, type FC } from "react";
import CourseGoal from "./CourseGoal";
import { type CourseGoal as CGoal } from "../App";
import InfoBox from "./InfoBox";

type CourseGoalListProps = {
    goals: Array<CGoal>;
    onDelete: (id: number) => void;
}

const CourseGoalList: FC<CourseGoalListProps> = ({goals, onDelete}) => {

    if (goals.length === 0) {
        return (
            <InfoBox mode="info">
                You have no goals yet. Start adding some.
            </InfoBox>
        )
    }

    let warningBox: ReactNode;

    if (goals.length > 3) {
        warningBox = <InfoBox mode="warning" severity="high">You are collecting a lot of goals.</InfoBox>;
    }

    return (
        <>
            {warningBox}
            <ul>
                { goals.map((goal) => (
                    <li>
                        <CourseGoal
                            key={goal?.id}
                            title={goal?.title} 
                            id={goal?.id} 
                            onDelete={onDelete}>
                                <p>{goal?.description}</p>
                        </CourseGoal>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default CourseGoalList;