import React from "react";
import "./Todo.css";

function Todo({ toDo, setTodo, addTodo }) {
  return (
    <div>
      <div className="row">
        <div className="offset-md-2 col-8 col-md-6">
          <input
            type="text"
            className="form-control"
            placeholder="Todo"
            value={toDo}
            onChange={(e) => setTodo(e.target.value)}
          />
        </div>
        <div className="col-4 col-md-2">
          <button className="btn btn-outline-success" onClick={addTodo}>
            Add Todo
          </button>
        </div>
      </div>
      <div className="row text">
        <div className="offset-md-2 offset-2 text-info">{toDo}</div>
      </div>
    </div>
  );
}

export default Todo;
