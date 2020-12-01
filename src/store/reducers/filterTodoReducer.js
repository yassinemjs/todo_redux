import { SHOW_ALL,SHOW_ACTIVE , SHOW_COMPLETED} from '../actions/actions';

  const filterActive = (list) => list.filter (todo => todo.completed  )
  const filterComplete = (list) =>list.filter (todo => !todo.completed)

  const initialState = [
    { id: 1, title: 'checkpoint redux', completed: true },
    { id: 3, title: 'checkpoint routing', completed: false },
    { id: 2, title: 'checkpoint API', completed: false },
  ];
       
  const filterTodoReducer = (state =initialState, action) => {
    switch(action.type) {
      case SHOW_ALL: return state 
      case SHOW_ACTIVE :return filterActive(state )
      case SHOW_COMPLETED :return filterComplete(state )
      default: return state;
    }
  };

  export default filterTodoReducer






