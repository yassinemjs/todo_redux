import React from 'react'
import { connect } from 'react-redux'
import { deleteTodo ,toggleTodo, toggleUpdate } from '../store/actions/actions';
import Task from './Task';

const ListTask = ({ items ,toggleUpdate, toggleTodo , deleteTodo  }) => (
    <ul>
        {items.map(item => (
            <Task 
            key={ item.id } 
            toggleTodo={toggleTodo}
            removeTodo ={deleteTodo}
            toggleUpdate ={toggleUpdate}
            text ={item.title}
            isDone ={item.completed}
            id={item.id}
            edit={item.edit}
                              
            />
        ))}
    </ul>
)

const mapStateToProps = state => ({
    items: state.todoReducer
})

const mapDispatchToProps = dispatch => ({
    deleteTodo: (id) => dispatch(deleteTodo(id)),
    toggleUpdate : (id) => dispatch (toggleUpdate(id)),
    toggleTodo : (id) => dispatch(toggleTodo(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(ListTask)