import React from "react";
import { useTodoContext } from "../context/TodoProvider";

export const Task = ({ id, task, complete }) => {
  const { setStatusTask } = useTodoContext();

  const checkTask = (e) => setStatusTask(id, e.target.checked);

  return (
    <tr>
      <td>
        <input type="checkbox" onChange={checkTask} />
      </td>
      <td>
        <span className={complete ? "task-done" : ""}>{task}</span>
      </td>
    </tr>
  );
};

export default Task;
