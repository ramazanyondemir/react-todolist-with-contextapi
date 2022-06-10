import "./main.scss";
import { TodoForm } from "./components/TodoForm";
import { TodoList } from "./components/TodoList";
import { TodoProvider } from "./contexts/TodoContext";

function App() {
  return (
    <div className="App">
      <TodoProvider>
        <TodoForm />
        <TodoList />
      </TodoProvider>
    </div>
  );
}

export default App;
