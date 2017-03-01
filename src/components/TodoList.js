import React from 'react';
import style from './css/TodoList.css';
import Todo from './Todo.js'

const TodoList = ({todos, removeFunc}) => {
        return(
        <div className={style.todoList}>
            {todos.map(element => {
                return(
                    <Todo key={element.id} id={element.id} removeFunc={removeFunc} todoText={element.text}/>
                );}
            )}
        </div>
        );
    }

TodoList.propTypes = {
    todos: React.PropTypes.array.isRequired,
    removeFunc: React.PropTypes.func.isRequired
};

export default TodoList;