import React, { useState } from "react";
import FormInput from "./FormInput";
import TaskList from "./TaskList";
import CompletedTasks from "./CompletedTasks";
import "./App.css";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);

  const handleAddTask = (task) => {
    setTasks((prevTasks) => [...prevTasks, { id: Date.now(), value: task }]);
  };

  const handleEditTask = (id, editedTask) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, value: editedTask } : task
      )
    );
  };

  const handleCompleteTask = (id) => {
    const taskToComplete = tasks.find((task) => task.id === id);
    setCompletedTasks((prevCompletedTasks) => [
      ...prevCompletedTasks,
      taskToComplete,
    ]);
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  const handleDeleteTask = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  return (
    <div className="app">
      <FormInput onAddTask={handleAddTask} />
      <div className="tasks-container">
        <TaskList
          tasks={tasks}
          onEdit={handleEditTask}
          onComplete={handleCompleteTask}
          onDelete={handleDeleteTask}
        />
        <CompletedTasks tasks={completedTasks} />
      </div>
    </div>
  );
};

export default App;
