import React,{ useState } from 'react';
import {v4 as uuidv4} from 'uuid';

const TaskForm = ({addTask}) => {
const[taskName, setTaskName] = useState('');

const submit = (e) =>{
e.preventDefault();
if(taskName.trim()){
    addTask({id: uuidv4(), name: taskName, completed: false});
    setTaskName('');
}
}

return(
    <form onSubmit={submit}>
        <input type='text'
        placeholder='Enter task name'
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}/>
        <button type = "submit">Add Task</button>
    </form>
)
}
export default TaskForm;