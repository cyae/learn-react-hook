import React, { useReducer, useState } from "react";
import Todo from "./Todo";

export const ACTIONS = {
  ADD_TODO: "add-todo",
  TOGGLE_TODO: "toggle-todo",
  DELETE_TODO: "delete-todo",
};

function reducer(curTodos, action) {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return [...curTodos, newTodo(action.payload.name)];

    case ACTIONS.TOGGLE_TODO:
      return curTodos.map(todo => {
        if (todo.id === action.payload.id) {
          return { ...todo, complete: !todo.complete };
        }
        return curTodos;
      });

    case ACTIONS.DELETE_TODO:
      return curTodos.filter(todo => todo.id !== action.payload.id);

    default:
      return curTodos;
  }
}

function newTodo(name) {
  return { id: Date.now(), name: name, complete: false };
}

const TodoList = () => {
  const [todos, dispatch] = useReducer(reducer, [], null);
  const [name, setName] = useState("");

  function handleSubmit(e) {
    // disable refreshing after submit
    e.preventDefault();
    // pass state as payload object to give access of state to reducer
    dispatch({ type: ACTIONS.ADD_TODO, payload: { name: name } });
    // after adding a new todo, clean input
    setName("");
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </form>
      {todos.map(todo => {
        return <Todo key={todo.id} todo={todo} dispatch={dispatch} />;
      })}
    </div>
  );
};

export default TodoList;
