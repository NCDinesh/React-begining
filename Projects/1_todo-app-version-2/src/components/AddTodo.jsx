import { useState, useRef, useContext } from "react";
import { IoIosAddCircle } from "react-icons/io";
import { todoitemscontext } from "../store/todoitems-store";

function AddTodo({}) {
  let { addnewitem } = useContext(todoitemscontext);
  let todonameElement = useRef();
  let tododateElement = useRef();

  let handleaddbutton = (event) => {
    event.preventDefault();
    let todoname = todonameElement.current.value;
    let tododate = tododateElement.current.value;
    addnewitem(todoname, tododate);

    todonameElement.current.value = "";
    tododateElement.current.value = "";
  };

  return (
    <div className="container text-center">
      <form className="row kg-row" onSubmit={handleaddbutton}>
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter Todo Here"
            ref={todonameElement}></input>
        </div>

        <div className="col-4">
          <input type="date" ref={tododateElement}></input>
        </div>

        <div className="col-2 ">
          <button
            type="submit"
            className="btn btn-success kg-button"
            // onClick={handleaddbutton}
          >
            <IoIosAddCircle />
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTodo;
