import React from 'react';
import Task from './Task';

const TaskList = ({tasks, selectedTask, setSelectedTask, updateTask, deleteTask}) =>{
const selecteddata = tasks.find(task => task.id === selectedTask);
return(
    <div>
        <select onChange={(e) => setSelectedTask(e.target.value)} value={selectedTask}>
          <option value="" disabled>Select a Task</option>
   
        {tasks.map(task => (
            <option key ={task.id} value={task.id}>
             {task.name}</option>
        ))}
             </select>
        {selectedTask && selecteddata && (
            <Task task = {selecteddata} updateTask={updateTask} deleteTask={deleteTask}/>
        )}
    </div>
)
}
export default TaskList;