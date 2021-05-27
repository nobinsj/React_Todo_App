import "./App.css";
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
      <div className="NavBar">
        <h3 className="Title">React Todo App</h3>
      </div>
      <div className="container">
        <Todo toDo={toDo} setTodo={setTodo} addTodo={() => addTodo()} />

        <div className="Scroll content">
          <div className="data">
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
        </div>
        {console.log(toDos)}
      </div>
    </div>
  );
}

export default App;
