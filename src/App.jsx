// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React , {useState} from "react";
import {v4 as uuidv4} from "uuid";
import Tasks from "./Components/Tasks.jsx";
import AddTasks from "./Components/AddTask.jsx";
import "./App.css";

const App = () => {

  const [tasks, setTasks] = useState([]);

  const HandleTaskCompleted = (taskId) => {
    const newTask = tasks.map((task) => {
      if(task.id == taskId) return {... task, completed: !task.completed}

      return task
    });

    setTasks(newTask);
  }

  const handleTaskAddition = (taskTitle) => {
    const newTask = [ ... tasks, {
      title: taskTitle,
      id: uuidv4(),
      completed: false
    }]

    setTasks(newTask);
  }

  
  const handleTaskRemove = (taskId) => {
    const newTask = tasks.filter(task => task.id != taskId) 
     
    setTasks(newTask);
  }

  return (
    <div>

      <div className="container">
        <AddTasks handleTaskAddition={handleTaskAddition}/>
        <Tasks tasks={tasks} 
          HandleTaskCompleted={HandleTaskCompleted}
          handleTaskRemove={handleTaskRemove}/>
      </div> 
      
    </div> 
  )
  
}

export default App;