import React from "react";
import Task from "./Task";
import "./TaskList.css";

const TaskList = ({ tasks, onEdit, onComplete, onDelete }) => {
  return (
    <div className="task-list-container">
      <h2 className="task-list-heading">Tasks To Do</h2>
      <ul className="task-list">
        {tasks.length ? (
          tasks.map((task) => (
            <Task
              key={task.id}
              id={task.id}
              value={task.value}
              onEdit={onEdit}
              onComplete={onComplete}
              onDelete={onDelete}
            />
          ))
        ) : (
          <li className="task-list-empty">No tasks to do</li>
        )}
      </ul>
    </div>
  );
};

export default TaskList;
