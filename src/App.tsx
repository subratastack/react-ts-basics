/* import CourseGoal from './components/CourseGoal.tsx';
import GoalImg from './assets/goals.png';
import Header from './components/Header.tsx';
import { useState } from 'react';
import CourseGoalList from './components/CourseGoalList.tsx';
import NewGoal from './components/NewGoal.tsx';

export type CourseGoal = {
  title: string;
  description: string;
  id: number;
}; */

import Input from "./lib/Input";
import Button from "./lib/Button";
import Container from "./lib/Container";
import { useRef } from "react";
import Form, {type FormHandle} from "./lib/Form";

function App() {

  /* const [goals, setGoals] = useState<Array<CourseGoal>>([]);

  const handleAddGoal = (goal: string, summary: string) => {
    setGoals(prevGoals => {
      const newGoal: CourseGoal = {
          id: prevGoals.length + 1,
          title: goal,
          description: summary
      };
      return [...prevGoals, newGoal];
    });
  };

  const handleDeleteGoal = (id: number) => {
    setGoals(prevGoals => {
      return prevGoals.filter((goal: CourseGoal) => goal.id !== id);
    })
  };
  

  return (
    <>
      <main>
        <Header image={{src: GoalImg, alt: 'A list of goals'}}>
            <h1>Your Course Goals</h1>
        </Header>
        <NewGoal onAddGoal={handleAddGoal} />
        <CourseGoalList goals={goals} onDelete={handleDeleteGoal} />
      </main>
    </>
  ) */

    const inputRef = useRef<HTMLInputElement>(null);
    const formRef = useRef<FormHandle>(null);

    const handleSave = (data: unknown) => {
      const extractedData = data as {location: string, age: string};
      console.log(extractedData);
      formRef.current?.clear();
    };

    return (
      <>
        <main>
          <Input id="name" label="Enter name" type="text" ref={inputRef}/>
          <Input id="age" label="Enter age" type="date" />
          <Button el="button" className="button">A button</Button>
          <Button el="link" className="button">A link</Button>
        </main>

        <Container as={Button} onClick={() => {}}>
          Click me
        </Container>

        <main>
          <Form onSave={handleSave} ref={formRef}>
            <Input id="location" label="Enter city" type="text" />
            <Input id="age" label="Enter age" type="date" />
            <p>
              <Button el="button" className="button">
                Save
              </Button>
            </p>
          </Form>
        </main>
      </>
    )
}

export default App
