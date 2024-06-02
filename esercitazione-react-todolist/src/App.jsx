import { useState } from "react";
import "./App.css";
import TodoList from "./components/TodoList/TodoList";
import AddPurpose from "./components/AddPurpose/AddPurpose.jsx";
function App() {
  const [taskList, setTodoList] = useState([]);
  return (
    <>
      <div>
        <h1 className="main-title">TODO - LIST</h1>
        <h2 className="subtitle">APP</h2>
        <AddPurpose setPurposes={setTodoList} purpose={taskList} />
        <TodoList task={taskList} color="green" setTodoList={setTodoList} />
      </div>
    </>
  );
}
export default App;
