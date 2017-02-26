import React from 'react';
import style from './css/TodoList.css';

const TodoList = (props) => {
        return(
        <ul>{props.todos.map(
            element => {
                return(
                    <li
                        id={element.id}
                        key={element.id}
                        onClick={props.remove}
                        title='click to remove'
                    >{element.text}
                    </li>
                );}
            )}
        </ul>
        );}

TodoList.propTypes = {
    todos: React.PropTypes.array.isRequired,
    remove: React.PropTypes.func.isRequired
};

export default TodoList;