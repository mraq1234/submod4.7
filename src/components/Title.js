import React from 'react';
import style from './Title.css';

class Title extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className={style.TodoTitle}>
                ToDo list ({this.props.todos.length})
            </div>
        )
    }
}

export default Title;