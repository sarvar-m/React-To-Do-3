import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import { FaPlus, FaTrash, FaEdit, FaSave, FaTimes } from "react-icons/fa";

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [editingTaskId, setEditingTaskId] = useState(null);
  const [editingTaskText, setEditingTaskText] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    const data = localStorage.getItem("tasks");
    if (data) {
      setTasks(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleAddTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, { id: Date.now(), text: newTask }]);
      setNewTask("");
      inputRef.current.focus();
    }
  };

  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const handleEditTask = (taskId) => {
    const task = tasks.find((task) => task.id === taskId);
    setEditingTaskId(taskId);
    setEditingTaskText(task.text);
  };

  const handleUpdateTask = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, text: editingTaskText } : task
      )
    );
    setEditingTaskId(null);
    setEditingTaskText("");
  };

  const handleCancelEdit = () => {
    setEditingTaskId(null);
    setEditingTaskText("");
  };

  return (
    <div className="App">
      <h1>To Do List</h1>
      <div className="input-container">
        <input
          type="text"
          placeholder="Enter task..."
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          ref={inputRef}
        />
        <button onClick={handleAddTask}>
          <FaPlus />
        </button>
      </div>
      {tasks.length === 0 ? (
        <p>No tasks added yet.</p>
      ) : (
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>
              {editingTaskId === task.id ? (
                <>
                  <input
                    type="text"
                    value={editingTaskText}
                    onChange={(e) => setEditingTaskText(e.target.value)}
                  />
                  <div className="buttons">
                    <button
                      className="save"
                      onClick={() => handleUpdateTask(task.id)}
                    >
                      <FaSave />
                    </button>
                    <button className="cancel" onClick={handleCancelEdit}>
                      <FaTimes />
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <span>{task.text}</span>
                  <div className="buttons">
                    <button
                      className="edit"
                      onClick={() => handleEditTask(task.id)}
                    >
                      <FaEdit />
                    </button>
                    <button
                      className="delete"
                      onClick={() => handleDeleteTask(task.id)}
                    >
                      <FaTrash />
                    </button>
                  </div>
                </>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
