import React from "react";
import "./TodoItem.css";

function TodoItem({ todo, handleCompleteTodo, handleDeleteTodo }) {

  const handleComplete = () => {
    handleCompleteTodo && handleCompleteTodo(todo.id);
  };
  return (
    <li className={`todo-item ${todo.isCompleted ? "completed" : ""}`}>
      <label className="todo-item-label">
        <input className="todo-item-input" type="checkbox"
          checked={todo.isCompleted}
          onChange={handleComplete} />
        {todo.text}
      </label>
    </li>
  );
}

export default TodoItem;
