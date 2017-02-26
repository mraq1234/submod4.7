import React from 'react';
import style from './css/Title.css';

const Title = ({todosNumber}) => <div className={style.TodoTitle}>ToDo list ({todosNumber}):</div>;

Title.propTypes = {
    todosNumber: React.PropTypes.number.isRequired
};

export default Title;