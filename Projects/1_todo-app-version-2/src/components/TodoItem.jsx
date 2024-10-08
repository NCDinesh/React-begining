import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { todoitemscontext } from "../store/todoitems-store";

let TodoItem = ({ Todoname, Tododate }) => {
  let { deleteitem } = useContext(todoitemscontext);
  return (
    <div class="container ">
      <div class="row kg-row">
        <div class="col-6">{Todoname}</div>

        <div class="col-4">{Tododate}</div>

        <div class="col-2">
          <button
            type="button "
            class="btn btn-danger kg-button"
            onClick={() => deleteitem(Todoname)}>
            <MdDelete />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
