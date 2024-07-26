import { type FC, useRef } from 'react';
import Form, { FormHandle } from '../lib/Form';
import Input from '../lib/Input';
import Button from '../lib/Button';
import { useTimerContext } from '../store/timers-context';


const AddTimer: FC = () => {
  const form = useRef<FormHandle>(null);
  const {addTimer} = useTimerContext();

  const handleSaveTimer = (data: unknown) => {
    const extractedData = data as { name: string; duration: string };
    
    addTimer({
        name: extractedData.name,
        duration: Number(extractedData.duration) // +extractedData.duration
    });

    form.current?.clear();
  }

  return (
    <Form ref={form} onSave={handleSaveTimer} id="add-timer">
      <Input type="text" label="Name" id="name" />
      <Input type="number" label="Duration" id="duration" />
      <p>
        <Button el="button" className='button'>Add Timer</Button>
      </p>
    </Form>
  );
};

export default AddTimer;
