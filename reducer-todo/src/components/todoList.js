import React, {useReducer} from 'react';

import Todo from './todoCard.js';
import {initialState, todoReducer} from '../reducers/';

const TodoList = () =>{
  // const [newTitleText, setNewTitleText] = useState("");

  const [state, dispatch] = useReducer(todoReducer, initialState);


  // console.log(state);


  // let count = 0;


  return(

    <div className='todo-list'>
      <div className='header'>
        <h1>Your Todo List</h1>
      </div>
      <br />
      <br />
        {state.tasks.map(task =>{

          return <Todo id={task.id} item={task.item} completed={task.completed} key={task.id}  />
        })}

    </div>
  );

};


export default TodoList;
