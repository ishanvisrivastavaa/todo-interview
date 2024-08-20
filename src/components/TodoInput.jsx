import React, { useState } from "react";

function TodoInput(props) {
  const [inputText, setinputText] = useState("");

  return (
    <div className="todo-container">
      <input
        type="text"
        className="input-box-todo"
        placeholder="enter your text"
        value={inputText}
        onChange={(e) => {
          setinputText(e.target.value);
        }}
      />
      <button
        className="add-btn"
        onClick={() => {
          props.addList(inputText);
          setinputText("");
        }}
      >
        +
      </button>
    </div>
  );
}

export default TodoInput;
