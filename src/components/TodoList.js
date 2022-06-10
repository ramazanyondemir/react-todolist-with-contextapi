import React from "react";
import { Todo } from "./Todo";
import { useTodoContextValue } from "../contexts/TodoContext";

export const TodoList = () => {
  const { todoList } = useTodoContextValue();
  return (
    <div className="todo-list">
      {todoList && todoList.map((todo) => <Todo todo={todo} key={todo.id} />)}
    </div>
  );
};
