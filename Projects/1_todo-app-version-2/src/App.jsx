import "bootstrap/dist/css/bootstrap.min.css";
import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import Message from "./components/Message";

import TodoItems from "./components/TodoItems";
import "./App.css";
import { useState } from "react";

function App() {
  let handleOnClick = (todoname, tododate) => {
    // console.log(todoname, tododate);
    // let newtodoitem = [...todoitems, { name: todoname, date: tododate }];
    // settodoitems(newtodoitem);

    settodoitems((currValue) => [
      ...currValue,
      { name: todoname, date: tododate },
    ]);
  };

  let handledelete = (todoname) => {
    console.log(`${todoname} deleted!`);
    let newtodoitem = todoitems.filter((items) => items.name !== todoname);
    settodoitems(newtodoitem);
  };

  let [todoitems, settodoitems] = useState([]);
  return (
    <center class="todo-container ">
      <AppName></AppName>
      <AddTodo handleOnClick={handleOnClick}></AddTodo>
      {todoitems.length == 0 && <Message></Message>}
      <TodoItems items={todoitems} handledelete={handledelete}></TodoItems>
    </center>
  );
}

export default App;
