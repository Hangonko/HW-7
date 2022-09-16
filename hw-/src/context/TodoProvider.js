import React, { createContext, useState, useContext } from "react";
import { v4 } from "uuid";

const TodoContext = createContext();
export const useTodoContext = () => useContext(TodoContext);

const ToDoProvider = ({ children }) => {
  const [todo, setTodo] = useState([]);

  const addTodo = (task) => {
    setTodo([...todo], { id: v4(), task, complete: false });
  };
  const setStatusTask = (id, status) => {
    setTodo(todo.map((t) => (t.id === id ? { ...t, complete: status } : t)));
  };
  return (
    <TodoContext.Provider value={(todo, addTodo, setStatusTask)}>
      {children}
    </TodoContext.Provider>
  );
};

export default ToDoProvider;
