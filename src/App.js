import React,{ useState } from 'react';
import './App.css';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import TaskStats from './components/TaskStats';
import img from './assets/prioritize.png'
const App = () =>{

const[tasks, setTasks] = useState([]);//initializing the task state to an empty array
const[selectedTask, setSelectedTask] = useState(null);

const addTask = (task) =>{ //addTask function that updates the state of tasks by copying all tasks from current
  setTasks([...tasks, task]);// state 'tasks' and adding a new task to the array.
  setSelectedTask(task.id);
}

const updateTask = (updatedTask) => {
  setTasks(tasks.map(task => task.id === updatedTask.id ? updatedTask : task));//map iterates through each task and looks for matching id
  setSelectedTask(updatedTask.id);
}

const deleteTask = (id) =>{
  setTasks(tasks.filter(task => task.id !== id));//creating new array by removing the matching id
  //if id is not matching, the task is added in new array.
  setSelectedTask('');
}

return(
  <>
  <h1> <img src = {img} width='50px' height='50px' alt='nothing'/>Task Manager</h1>
  <div className = "TaskApp" >
    <div id= "app">
    <TaskForm addTask = {addTask}/>
    <h3>Select a task to modify: </h3>
    <TaskList tasks = {tasks}  selectedTask = {selectedTask} setSelectedTask = {setSelectedTask} updateTask = {updateTask} deleteTask={deleteTask}/> </div>
   <div id ="stats">
   <TaskStats tasks = {tasks}/> </div>
   </div>
   </> 
)
}

export default App;
