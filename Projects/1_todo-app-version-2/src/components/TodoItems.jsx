import { useContext } from "react";
import TodoItem from "./TodoItem";
import { todoitemscontext } from "../store/todoitems-store";
let TodoItems = () => {
  let { todoitems } = useContext(todoitemscontext);

  return (
    <div className="container ">
      {todoitems.map((item) => (
        <TodoItem Todoname={item.name} Tododate={item.date}></TodoItem>
      ))}
    </div>
  );
};

export default TodoItems;
