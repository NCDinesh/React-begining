function TodoItem2() {
  let todoitem = "Go to bank";
  let tododate = "02/23/2025";
  let todobutton = "Delete";
  return (
    <div class="container ">
      <div class="row kg-row">
        <div class="col-6">{todoitem}</div>

        <div class="col-4">{tododate}</div>

        <div class="col-2">
          <button type="button " class="btn btn-danger kg-button">
            {todobutton}
          </button>
        </div>
      </div>
    </div>
  );
}
export default TodoItem2;
