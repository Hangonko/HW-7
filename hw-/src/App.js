import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import ToDoProvider from "./context/TodoProvider";
function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
      <ToDoProvider>
        <TodoList />
        <TodoInput />
      </ToDoProvider>
    </div>
  );
}

export default App;
