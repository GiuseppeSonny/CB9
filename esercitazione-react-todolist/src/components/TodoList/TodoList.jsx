import Purpose from "../Pupose/Purpose.jsx";
import "./TodoList.css";

const TodoList = ({ task = [], setTodoList = () => {} }) => {
  const handleDeleteCLick = (id) => {
    setTodoList(task.filter((e) => e.id !== id));
  };
  return (
    <ul className="todoList">
      {task.map((e, index) => (
        <Purpose
          key={index}
          text={e.text}
          handleClick={() => handleDeleteCLick(e.id)}
        />
      ))}
    </ul>
  );
};

export default TodoList;
