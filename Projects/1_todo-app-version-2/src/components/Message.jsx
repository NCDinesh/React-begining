import { useContext } from "react";
import { todoitemscontext } from "../store/todoitems-store";

let Message = () => {
  let { todoitems } = useContext(todoitemscontext);

  return todoitems.length === 0 && <h2>Enjoy Your Day! </h2>;
};
export default Message;
