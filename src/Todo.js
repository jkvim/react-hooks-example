import React, { useState, useReducer } from "react";
import './Todo.css'

function todoReducer(state, action) {
  switch (action.type) {
    case "ADD":
      return [...state, action.value];
    case "REMOVE":
      return state.filter(todo => todo !== action.value);
    default:
      return state;
  }
}

function TodoList() {
  const [newTodo, updateTodo] = useState("");
  const [todoList, dispatch] = useReducer(todoReducer, []);

  const handleAdd = () => {
    dispatch({ type: "ADD", value: newTodo });
  };

  const handleDelete = (value) => {
    console.log('value', value)
    dispatch({ type: "REMOVE", value });
  };

  const handleInputChange = (e) => {
    updateTodo(e.target.value)
  }

  return (
    <div>
      <input value={newTodo} onChange={handleInputChange} />
      <button onClick={handleAdd}>add</button>
      <ul>
        {todoList.map((todo, index) => (
          <li key={index}>
           <p className="todo">{todo}</p>
           <button onClick={() => handleDelete(todo)}>&times;</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
