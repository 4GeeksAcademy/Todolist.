import React from "react";
import Task from "./Task.jsx";

const TaskList = ({ tasks, onDelete }) => {
  return (
    <div className="task-list">
      {tasks.length ? (
        tasks.map((task) => (
          <Task key={task.id} task={task} onDelete={onDelete} />
        ))
      ) : (
        <p>No hay tareas, añadir tareas</p>
      )}
    </div>
  );
};

export default TaskList;