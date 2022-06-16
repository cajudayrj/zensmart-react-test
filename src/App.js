import React, { useState } from 'react';
import TodoList from './components/TodoList/TodoList';
import './App.css';
import LargeButton from './components/LargeButton/LargeButton';

function App() {
  const items = [
    {
      id: 1,
      text: "Finish Todo Component",
      done: true
    },
    {
      id: 2,
      text: "Finish Large Button Component",
      done: true
    },
    {
      id: 3,
      text: "Wash the dishes",
      done: false
    },
    {
      id: 4,
      text: "Throw the garbage",
      done: false
    }
  ];

  const [todos, setTodos] = useState(items);
  const [todo, setTodo] = useState("");

  function onItemClick (id) {
    setTodos(todos.map(todo => todo.id === id ? {...todo, done: true} : todo));
  }

  function addTodo(e) {
    e.preventDefault();
    setTodos([...todos, {id: Date.now(), text: todo, done: false}]);
    setTodo("");
  }

  function removeTodo(id) {
    setTodos(todos.filter(todo => todo.id !== id ));
  }

  return (
    <div className="App">
      <h1>Zen Smart To Do App</h1>
      <form className='todo-add-form' onSubmit={e => addTodo(e)}>
        <input type="text" value={todo} onChange={e => setTodo(e.target.value)} />
        <LargeButton type="submit" disabled={todo === ""} text="Add To Do" />
      </form>
      <div className="container">
        <TodoList items={todos} onItemClick={onItemClick} removeTodo={removeTodo} />
      </div>
    </div>
  );
}

export default App;
