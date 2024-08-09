import React, { useEffect, useState } from 'react';

const Task = ({task, updateTask, deleteTask}) => {
    const[Editing, setEditing] = useState(false);
    const[taskName, setTaskName] = useState(task.name);
    const[completed,setCompleted] = useState(task.completed);

useEffect(() => {
    setTaskName(task.name);
    setCompleted(task.completed);
},[task]);//task is a dependency array, will only run when task prop changes
    
const updates = ()=>{
        if(taskName.trim()){
     updateTask({...task, name:taskName, completed});
     setEditing(false);
        }
    }
    const handletaskcompletion = () =>{
        setCompleted(!completed);
        updateTask({...task, completed: !completed});
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
            Tasks completed : <input type = "checkbox" checked={completed} onChange={handletaskcompletion}/>
             <span style={{ textDecoration: completed ? 'line-through' : 'none' }}>
            {task.name}
          </span><br></br><br></br>
          <h3>Modify Task</h3>
          <button onClick={() => setEditing(true)}>Edit</button>
          <button onClick={() => deleteTask(task.id)}>Delete</button></>
        )}
    </div>
)
}
export default Task;