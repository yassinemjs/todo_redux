export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO ='TOGGLE_TODO'
export const DELETE_TODO = 'DELETE_TODO';
export const EDIT_TODO = 'EDIT_TODO';
export const SHOW_ALL ='SHOW_ALL'
export const SHOW_ACTIVE = 'SHOW_ACTIVE';
export const SHOW_COMPLETED = 'SHOW_COMPLETED';
export const TOGGLE_UPDATE = 'TOGGLE_UPDATE'



export const addTodo = (newTodo) => ({
    type: ADD_TODO,
    payload: newTodo,
  });

  export const toggleTodo = (todoId) => ({

      type: TOGGLE_TODO,
      payload : todoId
    });
 
    
  export const deleteTodo = (todoId) => ({
    type: DELETE_TODO,
    payload: todoId
  })
  
    
  export const toggleUpdate = (todoId) => ({
    type: TOGGLE_UPDATE,
    payload: todoId
  })

  export const editTodo = (val,desc) => ({
  type : EDIT_TODO ,
  id : val ,
  txt :desc

  });

  export const filterActive =() => ({

    type :SHOW_ACTIVE ,
   

  })

  export const filterComplete =() =>({
    type :SHOW_COMPLETED ,
    
  })