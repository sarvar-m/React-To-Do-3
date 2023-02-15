import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEdit,
  faSave,
  faTimes,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";
import { faArrowAltCircleRight } from "@fortawesome/free-regular-svg-icons";
import "./Task.css";

const Task = ({ id, value, isCompleted, onEdit, onComplete, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTask, setEditedTask] = useState(value);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    if (editedTask.trim() !== "") {
      onEdit(id, editedTask);
      setIsEditing(false);
    }
  };

  const handleCancelClick = () => {
    setEditedTask(value);
    setIsEditing(false);
  };

  const handleCompleteClick = () => {
    onComplete(id);
  };

  const handleDeleteClick = () => {
    onDelete(id);
  };

  const handleEditedTaskChange = (e) => {
    setEditedTask(e.target.value);
  };

  return (
    <li className={`task${isCompleted ? " completed" : ""}`}>
      {isEditing ? (
        <div className="task-edit">
          <input
            type="text"
            value={editedTask}
            onChange={handleEditedTaskChange}
          />
          <div className="task-actions">
            <FontAwesomeIcon
              icon={faSave}
              className="task-icon task-save"
              onClick={handleSaveClick}
            />
            <FontAwesomeIcon
              icon={faTimes}
              className="task-icon task-cancel"
              onClick={handleCancelClick}
            />
          </div>
        </div>
      ) : (
        <div className="task-content">
          <span>{value}</span>
          <div className="task-actions">
            {!isCompleted && (
              <FontAwesomeIcon
                icon={faEdit}
                className="task-icon"
                onClick={handleEditClick}
              />
            )}
            <FontAwesomeIcon
              icon={faArrowAltCircleRight}
              className="task-icon"
              onClick={handleCompleteClick}
            />
            <FontAwesomeIcon
              icon={faTrashAlt}
              className="task-icon task-delete"
              onClick={handleDeleteClick}
            />
          </div>
        </div>
      )}
    </li>
  );
};

export default Task;
