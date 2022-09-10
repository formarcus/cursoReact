import React from 'react';
import "./Button.css";

const Button = ({children, addTask}) => {
    return (
        <button className='button-add-task' onClick={addTask}>
            {children} 
        </button>
    );
}

export default Button