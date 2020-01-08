import React, {useState, useReducer} from 'react';

import {initialState, todoReducer} from '../reducers/';

const TodoForm = () =>{
  const [newTaskText, setNewTaskText] = useState("");

  const [state, dispatch] = useReducer(todoReducer, initialState);

  const handleChanges = e => {
    setNewTaskText(e.target.value);
  };

  const addTask = e => {
    e.preventDefault();

    dispatch({type:"NEW_TODO", payload:newTaskText});
    setNewTaskText("")
    console.log("after state:", state);
  };

  const submitClear = e =>{
    e.preventDefault();
    dispatch({type:"CLEAR_TODO"});
  };

  const debugMe = e =>{
    e.preventDefault();
    console.log("current State:", state);
    console.log();
  }


    return(
      <form onSubmit={addTask}>
        {/* This is needs to be controlled */}
        <input
          type= 'text'
          name= 'taskText'
          placeholder= "New Task"
          value= {newTaskText}
          onChange= {handleChanges}
           />{' '}
        <button type='submit'>Add</button>
        <br />
        <br />
        <button onClick={submitClear}>Clear Completed</button>
        <br />
        <br />
        <button onClick={debugMe}>DEBUG</button>
      </form>
    );


}

export default TodoForm;
