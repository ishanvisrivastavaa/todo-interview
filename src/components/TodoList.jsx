import React from "react";

function TodoList(props) {
  return (
    <li className="item">
      {props.item}
      <button
        onClick={(e) => {
          props.deleteItem(props.index);
        }}
      >
        delete
      </button>
    </li>
  );
}

export default TodoList;
