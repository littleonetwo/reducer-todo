import React, {useReducer} from 'react';
import {initialState, todoReducer} from './reducers';

import TodoList from './components/todoList.js';
// import Todo from './components/todoCard.js';
import TodoForm from './components/todoForm.js';

import './App.css';

function App() {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  const finishTask = (id) => {
    // console.log("props.id:", !props.completed);
    dispatch({type:"FINISH_TODO", id: id}  );
  }

  const addTask = (task) => {
    dispatch({type:"NEW_TODO", payload:task});
  }

  const clearTodo = () => {
    dispatch({type:"CLEAR_TODO"});

  }

  return (
    <div className="App">


      <TodoList finishTask={finishTask} tasks={state.tasks}/>
      <TodoForm  addTask={addTask} clearTodo={clearTodo}/>

    </div>
  );
}

export default App;
