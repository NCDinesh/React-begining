import { createContext, useReducer } from "react";

let todoitemscontext = createContext([]);

// Reducer function using if-else for managing the todo items
let todoitemsreducer = (currenttodoitems, action) => {
  let newtodoitems = currenttodoitems;

  if (action.type === "NEW_ITEM") {
    newtodoitems = [
      ...currenttodoitems,
      { name: action.payload.todoname, date: action.payload.tododate },
    ];
  } else if (action.type === "DELETE_ITEM") {
    newtodoitems = currenttodoitems.filter(
      (item) => item.name !== action.payload.todoname
    );
  }

  return newtodoitems;
};

let TodoItemsContextProvider = ({ children }) => {
  let [todoitems, dispatchtodoitems] = useReducer(todoitemsreducer, []);

  let addnewitem = (todoname, tododate) => {
    let newitemaction = {
      type: "NEW_ITEM",
      payload: {
        todoname,
        tododate,
      },
    };
    dispatchtodoitems(newitemaction);
  };

  let deleteitem = (todoname) => {
    let deleteitemaction = {
      type: "DELETE_ITEM",
      payload: {
        todoname,
      },
    };
    dispatchtodoitems(deleteitemaction);
  };

  return (
    <todoitemscontext.Provider
      value={{
        todoitems: todoitems,
        addnewitem: addnewitem,
        deleteitem: deleteitem,
      }}>
      {children}
    </todoitemscontext.Provider>
  );
};

export default TodoItemsContextProvider;
export { todoitemscontext };
