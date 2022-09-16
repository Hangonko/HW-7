import React from "react";
import Task from "./Task";
import { useTodoContext } from "../context/TodoProvider";

export const TodoList = () => {
  const { todo } = useTodoContext();
  return (
    <table>
      <tbody>
        {todo.map((task, i) => (
          <Task key={i} {...task} />
        ))}
      </tbody>
    </table>
  );
};

export default TodoList;
