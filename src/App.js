import React, { useState } from 'react';
import TodoList from './components/TodoList/TodoList';
import './App.css';

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

  function onItemClick (id) {
    setTodos(todos.map(todo => todo.id === id ? {...todo, done: true} : todo));
  }

  return (
    <div className="App">
      <h1>Zen Smart To Do App</h1>
      <div className="container">
        <TodoList items={todos} onItemClick={onItemClick} />
      </div>
    </div>
  );
}

export default App;
