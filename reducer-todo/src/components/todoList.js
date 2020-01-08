import React from 'react';

import Todo from './todoCard.js';
// import {initialState, todoReducer} from '../reducers';

const TodoList = (props) =>{
  // const [state, dispatch] = useReducer(todoReducer, initialState);


  return(

    <div className='todo-list'>
      <div className='header'>
        <h1>Your Todo List</h1>
      </div>
      <br />
      <br />
        {props.tasks.map(task =>{

          return <Todo id={task.id} item={task.item} completed={task.completed} key={task.key} finishTask={props.finishTask}  />
        })}

    </div>
  );

};


export default TodoList;
