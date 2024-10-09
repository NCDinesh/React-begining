function TodoItem2() {
  let todoitem = "Go to bank";
  let tododate = "02/23/2025";
  let todobutton = "Delete";
  return (
    <div className="container ">
      <div className="row kg-row">
        <div className="col-6">{todoitem}</div>

        <div className="col-4">{tododate}</div>

        <div className="col-2">
          <button type="button " className="btn btn-danger kg-button">
            {todobutton}
          </button>
        </div>
      </div>
    </div>
  );
}
export default TodoItem2;
