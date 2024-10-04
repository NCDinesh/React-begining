import { MdDelete } from "react-icons/md";

let TodoItem = ({ Todoname, Tododate, handledelete }) => {
  return (
    <div class="container ">
      <div class="row kg-row">
        <div class="col-6">{Todoname}</div>

        <div class="col-4">{Tododate}</div>

        <div class="col-2">
          <button
            type="button "
            class="btn btn-danger kg-button"
            onClick={() => handledelete(Todoname)}>
            <MdDelete />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
