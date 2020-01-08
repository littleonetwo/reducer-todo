export const initialState = {
  tasks:[
    {
      item: 'Learn about reducers',
      completed: false,
      id: 3892987589
    },
    {
      item: 'Make this work',
      completed: false,
      id: 4222111314
    }
  ]
}
;

export const todoReducer = (state, action) =>{
  switch(action.type) {
      case "NEW_TODO":
        return {...state, tasks: [...state.tasks, {item: action.payload, completed:false, id:Date.now()}]};
      case "FINISH_TODO":
         console.log("action completed:", action.completed);
         console.log("action id:", action.id);
         console.log("state:", state);

        return { ...state, tasks: state.tasks.map(item => {

          if(item.id === action.id){
              return  {...item, completed: action.completed};
            } else {
              return  item;
            }
        })};

      case "CLEAR_TODO":
        return state;


      default:
        return state;
  }

};
