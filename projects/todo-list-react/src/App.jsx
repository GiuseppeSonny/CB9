import "./App.css";
import { useState } from "react";
import Task from "./components/Task.jsx";
import AddTask from "./components/AddTask/AddTask.jsx";

const App = () => {
  const [tasks, setTasksList] = useState([]);

  return (
    <div>
      <h1>To DO List</h1>
      <AddTask setTasks={setTasksList} tasks={tasks} />
      <div className="container">
        <ul className="todo-list">
          {tasks.map((task, index) => (
            <Task key={index} textProp={task} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
