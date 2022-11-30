import React from "react";

const TodoListItem: React.FC<IListItem> = ({item}) => {
  return (
    <li>
      {item.isDone ? (
        <p className="checked">{item.text} </p>
      ) : (
        <p> {item.text} </p>
      )}

      <span className="task-icons">✖️</span>
    </li>
  );
};

export default TodoListItem;
