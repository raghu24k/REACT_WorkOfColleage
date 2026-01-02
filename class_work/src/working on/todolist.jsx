import React, { Component } from "react";
class Todolist extends Component {
    constructor(props) {
        super(props);
        this.state = { todos: [], inputvalue: '' };
    }

    onInputChange = (e) => {
        this.setState({ inputvalue: e.target.value });
    }
    deltetodo = (id) => {
        this.setState((prevState) => ({
            todos: prevState.todos.filter((x) => x.id !== id)
        }));
    }

    updatetask = (id) => {
        this.setState((prevState) => ({
            todos: prevState.todos.map((x) =>
                x.id === id ? { ...x, completed: !x.completed } : x
        )
        }));
    }
    addTodoList = () => {
        if (this.state.inputvalue.trim() === "")
            return;
        const neweentry = {
            id: Date.now(),
            text: this.state.inputvalue,
            completed: false,
        };
        this.setState((prevState) => ({
            todos: [neweentry, ...prevState.todos],
            inputvalue: '',
        }));

    }

    render() {
        const { todos, inputvalue } = this.state;
        return (
            <>
                <input type="text" value={inputvalue} onChange={this.onInputChange} />
                <br />
                <button onClick={this.addTodoList}>Add</button>
                <ul>
                    {todos.map((x) => <li key={x.id}>
                        <input type="checkbox" value={x.completed}/>
                        {x.text}
                        <button onClick={() => this.deltetodo(x.id)}>Delete</button>
                        
                        </li>)}
                </ul>
            </>
        );
    }
}
export default Todolist;
