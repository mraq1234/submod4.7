import uuid from 'uuid';
import React from 'react';
import style from './App.css';
import Title from '../components/Title.js'
import TodoList from '../components/TodoList.js'
import TodoForm from '../components/TodoForm.js'


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    id: "0",
                    text: "Start adding todos ..."
                }
            ]
        };
        this.removeTodo = this.removeTodo.bind(this);
        this.addTodo = this.addTodo.bind(this);
    }

    addTodo(e) {
        e.preventDefault();
        const val = e.target.inputTodo.value;
        if (val.trim()==='') {
            e.target.inputTodo.value = "... wprowadź tekst ...";
            e.target.inputTodo.select();
            return;
        }
        e.target.inputTodo.value = '';
        e.target.inputTodo.focus();
        const todo = {
            text: val,
            id: uuid.v4()
        };
        const data = [...this.state.data, todo];
        this.setState({data});
    }

    removeTodo(event) {
        const id = event.target.id;
        const remainder = this.state.data.filter(todo => {
            return(todo.id != id);});
        this.setState({data: remainder});
    }

    render() {
        return (
            <div className={style.TodoApp}>
                <Title todosNumber={this.state.data.length}/>
                <TodoForm addFunc={this.addTodo}/>
                <TodoList todos={this.state.data} removeFunc={this.removeTodo}/>
            </div>
        );
    }
}

export default App;