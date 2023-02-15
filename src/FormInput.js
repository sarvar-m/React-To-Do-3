import React, { useState } from "react";
import "./FormInput.css";

const FormInput = ({ onAddTask }) => {
  const [task, setTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim() !== "") {
      onAddTask(task);
      setTask("");
    }
  };

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter a new task"
        value={task}
        onChange={handleChange}
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default FormInput;
