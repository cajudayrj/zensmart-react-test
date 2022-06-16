import React from 'react';
import TodoList from './components/TodoList/TodoList';
import './App.css';

function App() {
  const items = [
    {
      id: 1,
      text: "Finish Todo Component",
      done: false
    },
    {
      id: 2,
      text: "Finish Large Button Component",
      done: false
    },
    {
      id: 3,
      text: "Wash the dishes",
      done: true
    },
    {
      id: 4,
      text: "Throw the garbage",
      done: true
    }
  ]

  function onItemClick () {
    alert("Todo item clicked");
  }

  return (
    <div className="App">
      <h1>Zen Smart To Do App</h1>
      <div className="container">
        <TodoList items={items} onItemClick={onItemClick} />
      </div>
    </div>
  );
}

export default App;
