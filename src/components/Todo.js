import React from 'react';
import style from './css/Todo.css';

const Todo = ({removeFunc, id, todoText}) => 
                        <div 
                            className={style.todoItem}
                            onClick={removeFunc}
                            title="click to remove"
                            id={id}>
                            {todoText}
                        </div>

Todo.propTypes = {
    id: React.PropTypes.string.isRequired,
    todoText: React.PropTypes.string.isRequired,
    removeFunc: React.PropTypes.func.isRequired,
};

export default Todo;