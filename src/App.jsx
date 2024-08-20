import React, { useState } from "react";
import "./App.css";
import TodoInput from "./components/todoInput";
import TodoList from "./components/TodoList";

function App() {
  const [listTodo, setListTodo] = useState([]);
  let addList = (inputText) => {
    if (inputText !== "") setListTodo([...listTodo, inputText]);
  };
  const deleteItem = (key) => {
    let newListTodo = [...listTodo];
    newListTodo.splice(key, 1);
    setListTodo(newListTodo);
  };
  return (
    <div className="main-container">
      <div className="content-container">
        <TodoInput addList={addList} />
        <h3 className="app-heading">TODO</h3>
        <hr />
        {listTodo.map((listItem, i) => {
          return (
            <TodoList
              key={1}
              index={i}
              item={listItem}
              deleteItem={deleteItem}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
