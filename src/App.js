import Todo from "./Components/Todo/Todo";
import View from "./Components/View/View";
import { useState } from "react";

function App() {
  const [toDo, setTodo] = useState("");
  const [toDos, setToDos] = useState([]);

  const addTodo = () => {
    setToDos([...toDos, { text: toDo, status: false }]);
    setTodo("");
  };
  const completeTodo = (key) => {
    setToDos(
      toDos.map((toDo, k) =>
        k === key ? { ...toDo, status: !toDo.status } : toDo
      )
    );
  };
  const deleteTodo = (key) => {
    const NewTodos = toDos.filter((text, index) => index !== key);
    setToDos(NewTodos);
  };
  return (
    <div>
      <h3>React Todo App</h3>
      <Todo toDo={toDo} setTodo={setTodo} addTodo={() => addTodo()} />
      {toDos.map(({ text, status }, key) => {
        return (
          <View
            key={key}
            text={text}
            status={status}
            completeTodo={() => completeTodo(key)}
            deleteTodo={() => {
              deleteTodo(key);
            }}
          />
        );
      })}
    </div>
  );
}

export default App;
