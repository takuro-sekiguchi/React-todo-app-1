import React from "react";

const InCompleteTodos = (props) => {
  const { incompleteTodos, onClickDelete, onClickComplete } = props;
  return (
    <div className="incomplete-area">
      <p className="title">未完了のTODO</p>
      <ul>
        {incompleteTodos.map((todo, index) => {
          return (
            <li key={todo} className="list-row">
              <div>{todo}</div>
              <button onClick={() => onClickComplete(index)}>完了</button>
              <button onClick={() => onClickDelete(index)}>削除</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default InCompleteTodos;
