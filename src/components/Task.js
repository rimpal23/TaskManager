import React, { useState } from 'react';

const Task = ({task, updateTask, deleteTask}) => {
    const[Editing, setEditing] = useState(false);
    const[taskName, setTaskName] = useState(task.name);

    const updates = ()=>{
        if(taskName.trim()){
     updateTask({...task, name:taskName});
     setEditing(false);
        }
    }

return(
    <div> 
        {Editing? (
            <>
            <input type = "text" value={taskName} onChange={(e)=>setTaskName(e.target.value)}/>
            <button onClick={updates}>Update</button>
            <button onClick={()=>setEditing(false)}>Cancel</button>
            </>

        ):(
            <>
             <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
            {task.name}
          </span>
          <button onClick={() => setEditing(true)}>Edit</button>
          <button onClick={() => deleteTask(task.id)}>Delete</button>
            </>
        )}
    </div>
)
}
export default Task;