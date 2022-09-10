import React, {useState} from 'react';
import './AddTask.css';
import Button from './Button.jsx';

const AddTask = ({handleTaskAddition}) => {
    const [inputData, setInputData] = useState('')
    
    const handleInputChange = (e) =>{
        setInputData(e.target.value)
    }

    const handleAddTaskClick = () =>{
        handleTaskAddition(inputData)
        setInputData("")
    }
    return (

        <div className='add-task-container'>
            <input className='add-task-input' 
                onChange={handleInputChange} 
                type="text" 
                value={inputData}>
            </input>
            <div className='container-button'>
                <Button addTask={handleAddTaskClick}>Adicionar</Button>
            </div>
        </div>

    );
}

export default AddTask;