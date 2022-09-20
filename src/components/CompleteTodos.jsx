import React from "react";

const CompleteTodos = (props) => {
  const {completeTodos, onClickReturn, onClickCompletedDelete} = props;
  return (
    <div className="complete-area">
      <p className="title">完了のTODO</p>
      <ul>
        {completeTodos.map((todo, index) => {
          return (
            <li key={todo} className="list-row">
              <div>{todo}</div>
              <button onClick={() => onClickReturn(index)}>戻す</button>
              <button onClick={() => onClickCompletedDelete(index)}>
                削除
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CompleteTodos;
