import React from "react";
import { FaCheck, FaTrash, FaPen } from "react-icons/fa";
import "./taskItem.css";

const TaskItem = ({ todo, toggleCompleted, deleteTask, editTask }) => {
  return (
    <div className={`cards ${todo.completed ? "resolved" : ""}`} key={todo.id}>
      <button
        className={`resolved-btn ${todo.completed ? "active" : ""}`}
        onClick={() => toggleCompleted(todo)}
      >
        {todo.completed && <FaCheck size={15} />}
      </button>
      <div className="cards-info">
        <h3 className="task">{todo.task}</h3>
      </div>
      <button className="btn delete-btn" onClick={() => deleteTask(todo)}>
        <FaTrash size={14} />
      </button>
      <button className="btn edit-btn" onClick={() => editTask(todo)}>
        <FaPen size={14} />
      </button>
    </div>
  );
};

export default TaskItem;
