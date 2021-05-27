import React from "react";

function View({ text, status, completeTodo, deleteTodo }) {
  let status_val = "Complete";
  if (status) {
    status_val = "Completed";
  }

  return (
    <div>
      <button onClick={completeTodo}>{status_val}</button>
      <div style={{ textDecoration: status ? "line-through" : "" }}>{text}</div>
      <button onClick={deleteTodo}>Delete</button>
    </div>
  );
}

export default View;
