import React, {
  useState,
  useReducer,
  memo,
  useCallback,
  useContext,
  useMemo
} from "react";

import "./Todo.css";
import TodoContext from "./TodoContext";

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
      return state.filter(todo => todo.id !== action.id);
    default:
      return state;
  }
}

const TodoItem = memo(({ todo }) => {
  console.log("render item");
  const { dispatch } = useContext(TodoContext)

  return (
    <li>
      <p
        className="todo"
        style={{ textDecoration: todo.complete ? "line-through" : "none" }}
        onClick={() => dispatch({ type: 'TOGGLE', id: todo.id })}
      >
        {todo.value}
      </p>
      <button onClick={() => dispatch({ type: 'REMOVE', id: todo.id })}>&times;</button>
    </li>
  );
});

function TodoList() {
  const [newTodo, updateTodo] = useState("");
  const [todoList, dispatch] = useReducer(todoReducer, []);
  const todoContext = useMemo(() => ({ dispatch }), [])

  const handleAdd = useCallback(() => {
    dispatch({ type: "ADD", value: newTodo });
  });

  const handleInputChange = e => {
    updateTodo(e.target.value);
  };

  return (
    <TodoContext.Provider value={todoContext}>
      <div>
        <input value={newTodo} onChange={handleInputChange} />
        <button onClick={handleAdd}>add</button>
        <ul>
          {todoList.map((todo, index) => (
            <TodoItem key={index} todo={todo} />
          ))}
        </ul>
      </div>
    </TodoContext.Provider>
  );
}

export default TodoList;
