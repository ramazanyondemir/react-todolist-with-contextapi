import React, { useEffect, createContext, useContext, useState } from "react";

const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [todoList, setTodoList] = useState(() => {
    const todoStore = localStorage.getItem("todoStore");
    return todoStore ? JSON.parse(todoStore) : [];
  });

  useEffect(() => {
    localStorage.setItem("todoStore", JSON.stringify(todoList));
  }, [todoList]);

  const contextValue = {
    todoList,
    setTodoList,
  };

  return (
    <TodoContext.Provider value={contextValue}>{children}</TodoContext.Provider>
  );
};

export const useTodoContextValue = () => useContext(TodoContext);
