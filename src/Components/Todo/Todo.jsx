import React from "react";

function Todo({ toDo, setTodo, addTodo }) {
  return (
    <div>
      <input
        type="text"
        placeholder="Todo"
        value={toDo}
        onChange={(e) => setTodo(e.target.value)}
      />

      <button onClick={addTodo}>Add Todo</button>

      <div>{toDo}</div>
    </div>
  );
}

export default Todo;
