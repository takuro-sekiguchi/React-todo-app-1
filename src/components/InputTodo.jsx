import React from "react";

const InputTodo = (props) => {
  const { todoText, onChange, onClickAdd, disabled } = props;
  return (
    <div className="input-area">
      <input
        type="text"
        placeholder="TODOを入力"
        value={todoText}
        onChange={onChange}
        disabled={disabled}
      />
      <button onClick={onClickAdd} disabled={disabled}>追加</button>
    </div>
  );
};

export default InputTodo;

//分割代入: const { todoText, onChange, onClickAdd } = props;
