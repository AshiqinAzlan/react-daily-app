import React, { useState } from "react";
import "./ToDoList.css";
function ToDoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }

  function addTask() {
    if (newTask.trim() !== "") {
      setTasks((t) => [...t, newTask]);
      setNewTask("");
    }
  }

  function deleteTask(index) {
    const updatedTask = tasks.filter((_, i) => i !== index);
    setTasks(updatedTask);
  }

  function moveTaskUp(index) {
    if (index > 0) {
      const updatedTask = [...tasks];
      [updatedTask[index], updatedTask[index - 1]] = [
        updatedTask[index - 1],
        updatedTask[index],
        setTasks(updatedTask),
      ];
    }
  }

  function moveTaskDown(index) {
    if (index < tasks.length - 1) {
      const updatedTask = [...tasks];
      [updatedTask[index], updatedTask[index + 1]] = [
        updatedTask[index + 1],
        updatedTask[index],
        setTasks(updatedTask),
      ];
    }
  }

  return (
    <div className="todolist">
      <h1>To Do List</h1>
      <div>
        <input
          type="text"
          placeholder="Enter a new task..."
          value={newTask}
          onChange={handleInputChange}
        />
        <button className="addBtn" onClick={addTask}>
          Add
        </button>
      </div>
      <ol>
        {tasks.map((tasks, index) => (
          <li key={index}>
            <span className="text">{tasks}</span>
            <button className="deleteBtn" onClick={() => deleteTask(index)}>
              🗑️
            </button>
            <button className="moveBtn" onClick={() => moveTaskUp(index)}>
              👆
            </button>
            <button className="moveBtn" onClick={() => moveTaskDown(index)}>
              👇
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default ToDoList;
