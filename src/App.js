import "./App.css";
import React, { useEffect, useState } from "react";
import Moment from "react-moment";
import Alert from "./components/alert/Alert";
import AddTask from "./components/addTask/AddTask";
import TaskList from "./components/taskList/TaskList";
import FilterTask from "./components/filterTask/FilterTask";

function App() {
  var listOfTask = [
    { id: 1, task: "learn html", completed: true },
    { id: 2, task: "learn css", completed: true },
    { id: 3, task: "learn reactJs", completed: false },
    { id: 4, task: "learn nodeJS", completed: false },
  ];

  const date = new Date();

  const [time, setTime] = useState(new Date().toLocaleTimeString());

  const [todos, setTodos] = useState(listOfTask);
  const [textTask, setTextTask] = useState("");
  const [alert, setAlert] = useState({ show: false, msg: "", type: "" });
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);
  const [toggleFilter, setToggleFilter] = useState("all");

  useEffect(() => {
    setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
  }, []);

  const showAlert = (show = false, type = "", msg = "") => {
    setAlert({ show, type, msg });
  };

  const hundelSubmit = (e) => {
    e.preventDefault();
    if (textTask.trim().length === 0) {
      showAlert(true, "danger", "Please enter value");
    } else if (textTask && isEditing) {
      setTodos(
        todos.map((item) =>
          item.id === editId ? { ...item, task: textTask } : item
        )
      );
      setTextTask("");
      setIsEditing(false);
      showAlert(true, "success", "Task edited");
    } else {
      showAlert(true, "success", "Task added to the list");
      const newTask = {
        id: Date.now(),
        task: textTask,
        completed: false,
      };
      setTodos([...todos, newTask]);
      setTextTask("");
    }
  };

  const deleteTask = (todoSelected) => {
    showAlert(true, "danger", "Task deleted");
    // eslint-disable-next-line
    setTodos([...todos].filter((item) => item.id != todoSelected.id));
  };

  const toggleCompleted = (todoSelected) => {
    setTodos(
      todos.map((todo) =>
        todo.id === todoSelected.id
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    );
  };

  const editTask = (todoSelected) => {
    const itemSelected = todos.find((item) => item.id === todoSelected.id);
    setIsEditing(true);
    setTextTask(itemSelected.task);
    setEditId(itemSelected.id);
  };

  const clearAll = (e) => {
    e.preventDefault();
    setTodos([]);
    showAlert(true, "danger", "all tasks deleted");
  };

  return (
    <>
      <h1 className="title">Todo-list app</h1>
      <main>
        <div id="wrapper">
          <header>
            <h2 className="date">
              <Moment format="dddd DD MMM YYYY">{date}</Moment>
            </h2>
            <p className="time">{time}</p>
            <p className="task-count">
              You have {todos.length} {todos.length > 1 ? "tasks" : "task"} to
              do today
            </p>
            <AddTask
              isEditing={isEditing}
              hundelSubmit={hundelSubmit}
              textTask={textTask}
              setTextTask={setTextTask}
            />
            {alert.show && <Alert {...alert} showAlert={showAlert} />}
          </header>
          <TaskList
            todos={todos}
            toggleCompleted={toggleCompleted}
            deleteTask={deleteTask}
            editTask={editTask}
            toggleFilter={toggleFilter}
            setToggleFilter={setToggleFilter}
          />
          {todos.length > 0 && (
            <button className="clear-all" onClick={(e) => clearAll(e)}>
              Clear all tasks
            </button>
          )}
          {todos.length > 0 && <FilterTask setToggleFilter={setToggleFilter} />}
        </div>
      </main>
    </>
  );
}

export default App;
