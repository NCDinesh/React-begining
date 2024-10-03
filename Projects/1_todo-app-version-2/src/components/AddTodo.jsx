import { useState } from "react";

function AddTodo({ handleOnClick }) {
  let [todoname, settodoname] = useState();
  let [tododate, settododate] = useState();

  let handletodoname = (event) => {
    settodoname(event.target.value);
  };

  let handletododate = (event) => {
    settododate(event.target.value);
  };

  let handleaddbutton = () => {
    handleOnClick(todoname, tododate);
    settodoname("");
    settododate("");
  };
  return (
    <div class="container text-center">
      <div class="row kg-row">
        <div class="col-6">
          <input
            type="text"
            placeholder="Enter Todo Here"
            value={todoname}
            onChange={handletodoname}></input>
        </div>

        <div class="col-4">
          <input type="date" value={tododate} onChange={handletododate}></input>
        </div>

        <div class="col-2">
          <button
            type="button "
            class="btn btn-success kg-button"
            onClick={handleaddbutton}>
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
