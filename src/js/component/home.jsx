import React, { useState } from 'react';
import './TodoApp.css';

function TodoApp() {
  const [taskInput, setTaskInput] = useState('');
  const [taskList, setTaskList] = useState([]);

  const handleTaskInputChange = (event) => {
    setTaskInput(event.target.value);
  };

  const handleTaskAdd = () => {
    if (taskInput.trim() !== '') {
      setTaskList([...taskList, taskInput.trim()]);
      setTaskInput('');
    }
  };

  const handleTaskDelete = (index) => {
    const updatedTaskList = [...taskList];
    updatedTaskList.splice(index, 1);
    setTaskList(updatedTaskList);
  };

  return (
    <div className="todo-app">
      <h1>Lista de Tareas</h1>
      <div className="input-container">
        <input
          type="text"
          placeholder="Agregar tarea"
          value={taskInput}
          onChange={handleTaskInputChange}
          onKeyDown={(event) => {
            if (event.key === 'Enter') {
              handleTaskAdd();
            }
          }}
        />
        <button className="add-button" onClick={handleTaskAdd}>
          Agregar
        </button>
      </div>
      <ul className="task-list">
        {taskList.length === 0 ? (
          <li className="no-tasks">No hay tareas, añadir tareas</li>
        ) : (
          taskList.map((task, index) => (
            <li key={index} className="task">
              {task}
              <span
                className="delete"
                onClick={() => handleTaskDelete(index)}
              >
                x
              </span>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default TodoApp;
