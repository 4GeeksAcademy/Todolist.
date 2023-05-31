import React, { useState } from "react";

const TodoForm = ({ onAdd }) => {
  const [inputValue, setInputValue] = useState("");

  const handleKeyPress = (event) => {
    if (event.key === "Enter" && inputValue.trim() !== "") {
      onAdd(inputValue.trim());
      setInputValue("");
    }
  };

  return (
    <input
      className="todo-input"
      type="text"
      placeholder="Agregar tarea..."
      value={inputValue}
      onChange={(event) => setInputValue(event.target.value)}
      onKeyPress={handleKeyPress}
    />
  );
};

export default TodoForm;