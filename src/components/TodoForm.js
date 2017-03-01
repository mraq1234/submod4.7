import React from 'react';
import style from './css/TodoForm.css';

const TodoForm = ({addFunc}) => { 
        return (
            <form id='thisForm' className={style.formTodo} onSubmit={addFunc}>
                <input type="text" id="inputTodo" className={style.inputTodo}/>
                <input
                    className={style.btnSubmit}
                    type="submit"
                    id="btnTodoFormSubmit"
                    value="ADD"
                    />
            </form>
        );
}

TodoForm.propTypes = {
    addFunc: React.PropTypes.func.isRequired,
};

export default TodoForm;