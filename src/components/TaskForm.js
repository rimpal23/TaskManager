import React,{ useState } from 'react';
import {v4 as uuidv4} from 'uuid';

const TaskForm = ({addTask}) => {
const[taskName, setTaskName] = useState('');

const submit = (e) =>{
e.preventDefault();//prevents page reloading
if(taskName.trim()){//removes whitespace
    addTask({id: uuidv4(), name: taskName, completed: false});
    setTaskName('');//resets the taskname to empty string
}
}

return(
    <form onSubmit={submit}>
        <br></br>
        <label><strong>Task:</strong> </label>&nbsp;
        <input type='text'
        placeholder='Enter task name'
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}/>
        <button type = "submit">Add Task</button>
    </form>
)//e.target.value updates refers to the HTML target field, here it is input field where value is updated
}
export default TaskForm;