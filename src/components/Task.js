import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import  {editTodo} from '../store/actions/actions';


const Task = ({ toggleTodo,removeTodo,toggleUpdate, isDone, text ,id,edit ,dispatch }) => { 
   
   let input ; 
   return ( 
 <div className="todo-card">
     <li className={'item'}
      onClick={() => toggleTodo(id)}
      style={{ textDecoration: isDone ? 'line-through' : 'none' }}>
     {text}
     </li>
     <div>
      <input style ={{display : edit ?'inline' : 'none'}} type="text" name="name" ref={node => (input = node)} />    
      <button onClick={() => removeTodo(id)} className="btn">
       DELETE
      </button>
      <button className="btn" onClick=
         {() => {
        toggleUpdate(id) ;
        if (!input.value.trim()) { return }
        dispatch(editTodo(id ,input.value));
        input.value = ''; 
       } }
      >
      {edit ? 'DONE' : 'UPDATE'}
     </button>
     </div>
</div>
  
)}


Task.propTypes = {
  toggleTodo: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

Task.iddefaultProps = {
    isDone: false}

export default connect()(Task)