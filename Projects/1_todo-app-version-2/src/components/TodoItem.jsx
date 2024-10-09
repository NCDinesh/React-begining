import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { todoitemscontext } from "../store/todoitems-store";

let TodoItem = ({ Todoname, Tododate }) => {
  let { deleteitem } = useContext(todoitemscontext);
  return (
    <div className="container ">
      <div className="row kg-row">
        <div className="col-6">{Todoname}</div>

        <div className="col-4">{Tododate}</div>

        <div className="col-2">
          <button
            type="button "
            className="btn btn-danger kg-button"
            onClick={() => deleteitem(Todoname)}>
            <MdDelete />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
