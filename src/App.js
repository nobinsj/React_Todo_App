import Todo from "./Components/Todo/Todo";

import { useState } from "react";

function App() {
  const [toDo, setTodo] = useState("");
  const [toDos, setToDos] = useState([]);

  const addTodo = () => {
    setToDos([...toDos, { text: toDo, status: false }]);
    setTodo("");
  };

  return (
    <div>
      <h3>React Todo App</h3>

      <Todo toDo={toDo} setTodo={setTodo} addTodo={() => addTodo()} />
    </div>
  );
}

export default App;
