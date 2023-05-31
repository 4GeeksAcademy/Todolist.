import React from "react";

const Task = ({ task, onDelete }) => {
  return (
    <div className="task">
      <span className="task-title">{task.title}</span>
      {task.active && (
        <button className="delete-btn" onClick={() => onDelete(task.id)}>
          Eliminar
        </button>
      )}
    </div>
  );
};

export default Task;