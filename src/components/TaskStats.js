import React from 'react';
import {PieChart, Pie, Tooltip, Legend, Cell} from 'recharts';

const TaskStats = ({tasks}) => {
const finishedTasks = tasks.filter(task => task.completed).length;
const pendingTasks = tasks.length - finishedTasks;

const data = [
    {name: 'Finished', value: finishedTasks},
    {name: 'Pending', value: pendingTasks}
];

const COLORS = ['green', 'red'];

return(
    <div>
        <h2>Task Stats</h2>
        {tasks.length > 0? 
        (
        <PieChart width = {800} height ={500}>
            <Pie data = {data} cx={350} cy={200} labelLine={false} 
            label={({name, percent}) => `${name} (${(percent*100).toFixed(0)}%)`}
            outerRadius={120}
            fill='yellow'
            dataKey="value">
               {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
            </Pie>
            <Tooltip/>
            <Legend/>
        </PieChart>
        ):(
        <p>No tasks added to show stats</p>
        )}
    </div>
)
}//entry is current item. Cell component refers to each slice of pie chart.
//[index%colors.length] makes sure that index wraps to the beginning of colors array if slices are more than colors
export default TaskStats;