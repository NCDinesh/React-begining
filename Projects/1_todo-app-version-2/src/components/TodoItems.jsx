import TodoItem from "./TodoItem";
let TodoItems = ({ items, handledelete }) => {
  return (
    <div class="container ">
      {items.map((item) => (
        <TodoItem
          Todoname={item.name}
          Tododate={item.date}
          handledelete={handledelete}></TodoItem>
      ))}
    </div>
  );
};

export default TodoItems;
