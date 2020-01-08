import React from 'react';


import TodoList from './components/todoList.js';
// import Todo from './components/todoCard.js';
import TodoForm from './components/todoForm.js';

import './App.css';

function App() {



  return (
    <div className="App">


      <TodoList />
      <TodoForm />

    </div>
  );
}

export default App;
