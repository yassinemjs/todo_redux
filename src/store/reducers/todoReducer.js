import { ADD_TODO,TOGGLE_TODO , DELETE_TODO, TOGGLE_UPDATE ,EDIT_TODO ,SHOW_ALL,SHOW_ACTIVE , SHOW_COMPLETED} from '../actions/actions';


const initialState = [
    { id: 1, title: 'checkpoint redux', completed: true,edit :false },
    { id: 3, title: 'checkpoint routing', completed: false,edit :false },
    { id: 2, title: 'checkpoint API', completed: false,edit :false },
  ];
  
  const addTodo = (state, newTodo) => {
    const { title, completed } = newTodo;
    const todo = {
      id: new Date(),
      title,
      completed :false ,
      edit :false
    };
    const newState = [...state, todo]
    return newState
  };
  
   const toggleTodo =(state ,todoId) => {
   const newState =state.map ((item => item.id === todoId ? { ...item, completed: !item.completed } : item))
   return newState
    }
  
   const deleteTodo = (state, todoId) => {
    const newState = state.filter(todo => todo.id !== todoId );
    return newState 
  }
   
   const toggleUpdate = (state, todoId) => {
    const newState =state.map ((item => item.id === todoId ? { ...item, edit: !item.edit } : item))
    return newState
  }

  const editTodo =(state ,todoId ,txt) => {
    const newState = state.map (item => item.id ==todoId ? {...item ,title :txt} :item )
    return newState 
  }

  const filterActive = (state) => state.filter (todo => !todo.completed  )
  const filterComplete = (state) =>state.filter (todo => todo.completed)

  const todoReducer = (state = initialState, action) => {
    switch(action.type) {
      case ADD_TODO: return addTodo(state, action.payload);
      case TOGGLE_TODO :return toggleTodo(state ,action.payload)
      case DELETE_TODO: return deleteTodo(state,action.payload)
      case TOGGLE_UPDATE: return toggleUpdate(state, action.payload)
      case EDIT_TODO : return editTodo (state ,action.id ,action.txt)
      case SHOW_ALL: return state 
      case SHOW_ACTIVE :return filterActive(state )
      case SHOW_COMPLETED :return filterComplete(state )
      default: return state;
    }
  };


export default todoReducer