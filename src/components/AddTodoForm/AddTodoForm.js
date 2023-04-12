import React, { useState } from "react";
import "./AddTodoForm.css";

function AddTodo({ handleAddTodo }) {
  const [newTodo, setNewTodo] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!newTodo.trim()) {
      return;
    }
    const todo = { id: Date.now(), text: newTodo, isCompleted: false };
    handleAddTodo(todo);
    setNewTodo("");
  };

  const handleChange = (event) => {
    setNewTodo(event.target.value);
  };

  return (
    <form className="add-todo-form" onSubmit={handleSubmit}>
      <input className="add-todo-input" type="text" placeholder="add detail" value={newTodo}
        onChange={handleChange} />
      <button type="submit" className="add-todo-btn">Add</button>
    </form>
  );
}

export default AddTodo;
