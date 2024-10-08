import "bootstrap/dist/css/bootstrap.min.css";
import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import Message from "./components/Message";
import { todoitemscontext } from "./store/todoitems-store";
import TodoItems from "./components/TodoItems";
import "./App.css";
import { useState } from "react";

function App() {
  let addnewitem = (todoname, tododate) => {
    // console.log(todoname, tododate);
    // let newtodoitem = [...todoitems, { name: todoname, date: tododate }];
    // settodoitems(newtodoitem);

    settodoitems((currValue) => [
      ...currValue,
      { name: todoname, date: tododate },
    ]);
  };

  let deleteitem = (todoname) => {
    console.log(`${todoname} deleted!`);
    let newtodoitem = todoitems.filter((items) => items.name !== todoname);
    settodoitems(newtodoitem);
  };

  let [todoitems, settodoitems] = useState([]);
  return (
    <todoitemscontext.Provider
      value={{
        todoitems: todoitems,
        addnewitem: addnewitem,
        deleteitem: deleteitem,
      }}>
      <center class="todo-container ">
        <AppName></AppName>
        <AddTodo></AddTodo>
        <Message></Message>
        <TodoItems></TodoItems>
      </center>
    </todoitemscontext.Provider>
  );
}

export default App;
