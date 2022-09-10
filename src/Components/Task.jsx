import React from 'react';
import "./Task.css"

const Task = ({task, HandleTaskCompleted, handleTaskRemove}) => {
    return (

        <div className='task-container' 
            style={task.completed ? { borderLeft : '10px solid chartreuse'} : {}}
            >
            
            
            <div className='task-title' onClick={() => HandleTaskCompleted(task.id)}>
                {task.title}
            </div>

            <div className='container-button-remove'>
                <button onClick={() => handleTaskRemove(task.id)} className='button-remove-task'>
                    X
                </button>
            </div>
        </div>
        
        
    );
}
 
export default Task;