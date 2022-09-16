import React, { useState } from "react";
import { useTodoContext } from "../context/TodoProvider";

export const TodoInput = () => {
  const [task, setTask] = useState("");
  const { addTodo } = useTodoContext();

  const submit = (e) => {
    e.preventDefault();
    addTodo(task);
    setTask("");
  };

  console.log(task);
  return (
    <form onSubmit={submit}>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        required
      />

      <button>Add</button>
    </form>
  );
};

export default TodoInput;
