import React from "react";
import TaskItem from "../taskItem/TaskItem";
import "./taskList.css";

const TaskList = ({
  todos,
  toggleCompleted,
  deleteTask,
  editTask,
  toggleFilter,
}) => {
  return (
    <section className="list">
      {toggleFilter === "all"
        ? todos.map((todo, i) => (
            <TaskItem
              todo={todo}
              toggleCompleted={toggleCompleted}
              deleteTask={deleteTask}
              editTask={editTask}
              key={i}
            />
          ))
        : toggleFilter === "completed"
        ? todos
            .filter((todo) => todo.completed)
            .map((todo, i) => (
              <TaskItem
                todo={todo}
                toggleCompleted={toggleCompleted}
                deleteTask={deleteTask}
                editTask={editTask}
                key={i}
              />
            ))
        : todos
            .filter((todo) => !todo.completed)
            .map((todo, i) => (
              <TaskItem
                todo={todo}
                toggleCompleted={toggleCompleted}
                deleteTask={deleteTask}
                editTask={editTask}
                key={i}
              />
            ))}
    </section>
  );
};

export default TaskList;
