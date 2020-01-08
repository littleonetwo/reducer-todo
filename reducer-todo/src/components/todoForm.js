import React, {useState} from 'react';

// import {initialState, todoReducer} from '../reducers/';

const TodoForm = (props) =>{
  const [newTaskText, setNewTaskText] = useState("");

  // const [state, dispatch] = useReducer(todoReducer, initialState);

  const handleChanges = e => {
    setNewTaskText(e.target.value);
  };

  const addTask = e => {
    e.preventDefault();

    // dispatch({type:"NEW_TODO", payload:newTaskText});
    props.addTask(newTaskText);
    setNewTaskText("");
    // console.log("after state:", state);
  };

  const submitClear = e =>{
    e.preventDefault();
    props.clearTodo();
    // dispatch({type:"CLEAR_TODO"});
  };

  // const debugMe = e =>{
  //   e.preventDefault();
  //   // console.log("current State:", state);
  //   console.log();
  // }


    return(
      <form onSubmit={addTask}>

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
        
      </form>
    );


}

export default TodoForm;
