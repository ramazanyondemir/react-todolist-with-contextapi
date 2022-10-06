import React, { useState } from "react";
import { useTodoContextValue } from "../contexts/TodoContext";

export const TodoForm = () => {
   const { todoList, setTodoList } = useTodoContextValue();
   const [content, setContent] = useState("");

   const handleSubmit = (e) => {
      e.preventDefault();
      if (content.trim() === "") return;
      if (!content && content.length < 1) return;
      const newTodo = {
         id: Math.floor(Math.random() * 999999),
         title: content,
         isCompleted: false,
      };
      console.log(newTodo.title);
      setTodoList([newTodo, ...todoList]);
      setContent("");
   };

   return (
      <form className="form" onSubmit={handleSubmit}>
         <input
            className="todo-input"
            maxLength="50"
            type="text"
            onChange={(e) => setContent(e.target.value)}
            value={content}
         />
         <input className="todo-submit" type="submit" value="Ekle" />
      </form>
   );
};
