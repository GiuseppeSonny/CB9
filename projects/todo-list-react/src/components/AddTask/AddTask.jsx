import { useState } from "react";

const AddTask = ({ setTasks = () => {}, tasks = [] }) => {
  const [inputValue, setInputValue] = useState("");

  return (
    <div>
      <input
        type="text"
        className="input-task"
        placeholder="Inserisci la tua task"
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      />
      <button
        className="button-task"
        type="button"
        onClick={() => {
          setTasks([...tasks, inputValue]);
        }}
      >
        Insert
      </button>
    </div>
  );
};

export default AddTask;
