import React, {useReducer} from 'react';

import {initialState, todoReducer} from '../reducers';

const Todo = (props) =>{

  const [state, dispatch] = useReducer(todoReducer, initialState);

  const finishTask = () => {
    // console.log("props.id:", !props.completed);
    dispatch({type:"FINISH_TODO", completed:!props.completed, id: props.id}  );
  }

  console.log(props);
  return(

    <div
      className={`item${props.completed ? ' completed' : ""}`}
      onClick={finishTask}
    >

       {props.item}

    </div>
  );

};


export default Todo;
