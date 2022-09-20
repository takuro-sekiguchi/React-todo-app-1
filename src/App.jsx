import React, { useState } from "react";
import "./App.css";
import CompleteTodos from "./components/CompleteTodos";
import InCompleteTodos from "./components/InCompleteTodos";
import InputTodo from "./components/InputTodo";

const App = () => {
  const [todoText, setTodoText] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState([]);
  const [completeTodos, setCompleteTodos] = useState([]);

  const onChangeTodoText = (event) => setTodoText(event.target.value);

  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTodoText("");
  };

  const onClickDelete = (index) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
  };

  const onClickCompletedDelete = (index) => {
    const newCompTodos = [...completeTodos];
    newCompTodos.splice(index, 1);
    setCompleteTodos(newCompTodos);
  };

  const onClickComplete = (index) => {
    const newIncompleteTodos = [...incompleteTodos];
    newIncompleteTodos.splice(index, 1);
    setIncompleteTodos(newIncompleteTodos);
    const newCompleteTodos = [...completeTodos, incompleteTodos[index]];
    setCompleteTodos(newCompleteTodos);
  };

  const onClickReturn = (index) => {
    const newCompletedTodos = [...completeTodos];
    newCompletedTodos.splice(index, 1);
    setCompleteTodos(newCompletedTodos);
    const newInCompletedTodos = [...incompleteTodos, completeTodos[index]];
    setIncompleteTodos(newInCompletedTodos);
  };

  return (
    <div className="container">
      <h1>Reactで開発したToDoアプリ</h1>

      <InputTodo
        todoText={todoText}
        onChange={onChangeTodoText}
        onClickAdd={onClickAdd}
        disabled={incompleteTodos.length >= 5}
      />

      {incompleteTodos.length >= 5 && (
        <p style={{ color: "red" }}>※登録できるタスクは5個までです。</p>
      )}
      <InCompleteTodos
        incompleteTodos={incompleteTodos}
        onClickDelete={onClickDelete}
        onClickComplete={onClickComplete}
      />

      <CompleteTodos
        completeTodos={completeTodos}
        onClickReturn={onClickReturn}
        onClickCompletedDelete={onClickCompletedDelete}
      />
    </div>
  );
};

export default App;

