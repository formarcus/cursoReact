import React from "react";
import Task from "./Task.jsx";

const Tasks = ({tasks, HandleTaskCompleted, handleTaskRemove}) => {
    
    return (
        <>
            {tasks.map((task) => (
                <Task task={task} 
                HandleTaskCompleted={HandleTaskCompleted} 
                handleTaskRemove={handleTaskRemove}/>
            ))}
         
        </>
    )
}

export default Tasks;