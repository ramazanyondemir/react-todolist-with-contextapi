import { useTodoContextValue } from "../contexts/TodoContext";

export const Todo = ({ todo }) => {
   const { todoList, setTodoList } = useTodoContextValue();

   const removeTodo = (id) => {
      // no need to declare to localstorage, because useEffect is already updating.
      setTodoList(todoList.filter((t) => t.id !== id));
   };

   const handleOnClick = (id) => {
      const newList = todoList.map((todo) => {
         if (todo.id === id) {
            return {
               ...todo,
               isCompleted: !todo.isCompleted,
            };
         }
         return todo;
      });
      setTodoList(newList);
   };

   return (
      <div className="todo">
         <div
            className="title"
            style={{
               textDecoration: todo.isCompleted ? "line-through" : "none",
            }}
            onClick={() => handleOnClick(todo.id)}
         >
            {todo.title}
         </div>
         <button
            className="remove-btn"
            onClick={() => {
               removeTodo(todo.id);
            }}
         >
            X
         </button>
      </div>
   );
};
