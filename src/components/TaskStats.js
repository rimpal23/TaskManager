import React from 'react';
import {PieChart, Pie, Tooltip, Legend, Cell} from 'recharts';

const TaskStats = ({tasks}) => {
const finishedTasks = tasks.filter(task => task.completed).length;
const pendingTasks = tasks.length - finishedTasks;

const data = [
    {name: 'Finished', value: finishedTasks},
    {name: 'Pending', value: pendingTasks}
];

const COLORS = ['blue', 'orange'];

return(
    <div>
        <h2>Task Stats</h2>
        <PieChart width = {500} height ={500}>
            <Pie data = {data} cx={300} cy={300} labelLine={false} 
            label={({name, percent}) => `${name} (${(percent*100).toFixed(0)}%)`}
            outerRadius={90}
            fill='yellow'
            dataKey="value">
               {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
            </Pie>
            <Tooltip/>
            <Legend/>
        </PieChart>
    </div>
)
}
export default TaskStats;