import React,{ useState } from 'react';
import './App.css';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

const App = () =>{

const[tasks, setTasks] = useState([]);
const addTask = (task) =>{
  setTasks([...tasks, task]);
}

const updateTask = (updatedTask) => {
  setTasks(tasks.map(task => task.id === updateTask.id ? updatedTask : task));
}

const deleteTask = (id) =>{
  setTasks(tasks.filter(task => task.id !== id));
}

return(
  <div classname = "TaskApp">
    <h1> Task Manager</h1>
    <TaskForm addTask = {addTask}/>
    <TaskList tasks = {tasks} updateTask = {updateTask} deleteTask={deleteTask}/>
  </div>
)
}

export default App;
