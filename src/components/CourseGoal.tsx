import { type FC, type PropsWithChildren, type ReactNode } from "react";

/* type CourseGoalProps = {
    title: string,
    children: ReactNode
}; */

type CourseTitle = {
    title: string;
    id: number;
    onDelete: (id: number) => void;
}

type CourseGoalProps = PropsWithChildren<CourseTitle>;

const CourseGoal: FC<CourseGoalProps> = ({title, children, id, onDelete}) => {
    return <article>
        <div>
            <h3>{title}</h3>
            {children}
        </div>
        <button onClick={() => onDelete(id)}>Delete</button>
    </article>
};

export default CourseGoal;

/* export default function CourseGoal({title, children}: 
    CourseGoalProps
) {
    return <article>
        <div>
            <h3>{title}</h3>
            {children}
        </div>
        <button>Delete</button>
    </article>
}; */