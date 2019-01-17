import React, { useState, useReducer, memo, useCallback } from "react";
import "./Todo.css";

function todoReducer(state, action) {
  switch (action.type) {
    case "ADD":
      return [
        ...state,
        { value: action.value, id: Math.random(), complete: false }
      ];
    case "TOGGLE":
      return state.map(todo =>
        todo.id === action.id ? { ...todo, complete: !todo.complete } : todo
      );
    case "REMOVE":
      return state.filter(todo => todo !== action.value);
    default:
      return state;
  }
}

const TodoItem = memo(({ todo, toggle: onToggle, onDelete }) => {
  console.log("render item");

  return (
    <li>
      <p
        className="todo"
        style={{ textDecoration: todo.complete ? "line-through" : "none" }}
        onClick={() => onToggle(todo.id)}
      >
        {todo.value}
      </p>
      <button onClick={() => onDelete(todo.id)}>&times;</button>
    </li>
  );
});

function TodoList() {
  const [newTodo, updateTodo] = useState("");
  const [todoList, dispatch] = useReducer(todoReducer, []);

  const handleAdd = () => {
    dispatch({ type: "ADD", value: newTodo });
  };

  const handleDelete = id => {
    dispatch({ type: "REMOVE", id });
  };

  const toggleTodo = id => {
    dispatch({ type: "TOGGLE", id });
  };

  const handleInputChange = e => {
    updateTodo(e.target.value);
  };

  return (
    <div>
      <input value={newTodo} onChange={handleInputChange} />
      <button onClick={handleAdd}>add</button>
      <ul>
        {todoList.map((todo, index) => (
          <TodoItem
            key={index}
            todo={todo}
            onToggle={toggleTodo}
            onDelete={handleDelete}
          />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
