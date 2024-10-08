import "bootstrap/dist/css/bootstrap.min.css";
import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import Message from "./components/Message";
import TodoItems from "./components/TodoItems";
import TodoItemsContextProvider from "./store/todoitems-store";
import "./App.css";

function App() {
  return (
    <TodoItemsContextProvider>
      <center className="todo-container">
        <AppName />
        <AddTodo />
        <Message />
        <TodoItems />
      </center>
    </TodoItemsContextProvider>
  );
}

export default App;
