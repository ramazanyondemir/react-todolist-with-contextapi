import "./App.scss";
import { TodoForm } from "./components/TodoForm";
import { TodoList } from "./components/TodoList";
import { TodoProvider } from "./contexts/TodoContext";

function App() {
   return (
      <div className="App">
         <div className="todoapp-container">
            <TodoProvider>
               <TodoForm />
               <TodoList />
            </TodoProvider>
         </div>
      </div>
   );
}

export default App;
