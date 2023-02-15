import React from "react";
import Task from "./Task";
import "./CompletedTasks.css";

const CompletedTasks = ({ tasks }) => {
  return (
    <div className="completed-tasks-container">
      <h2 className="completed-tasks-heading">Completed Tasks</h2>
      <ul className="completed-tasks">
        {tasks.length ? (
          tasks.map((task) => (
            <Task key={task.id} value={task.value} isCompleted={true} />
          ))
        ) : (
          <li className="completed-tasks-empty">No completed tasks</li>
        )}
      </ul>
    </div>
  );
};

export default CompletedTasks;
