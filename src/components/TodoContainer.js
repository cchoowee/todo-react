import React from "react";
import TodosList from "./TodosList";
import Header from "./Header";
import InputTodo from "./InputTodo";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";

class TodoContainer extends React.Component {
  state = {
   todos: [],
  };

  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/todos?_limit=10")
      .then(response => this.setState({ todos: response.data }));
  }

  handleChange = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
	return todo;
      })
    });
  };

  addTodo = (title) => {
    axios
      .post("https://jsonplaceholder.typicode.com/todos", {
        title: title,
        completed: false,
      })
      .then(response =>
        this.setState({
          todos: [...this.state.todos, response.data],
        })
      )
  }

  delTodo = (id) => {
    axios
      .delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then(reponse =>
        this.setState({
          todos: [
            ...this.state.todos.filter(todo => {
              return todo.id !== id
            }),
          ],
        })
      )
  };

  render() {
    return (
      <div className="container">
        <Header />
        <InputTodo
          addTodoProps={this.addTodo}
        />
        <TodosList
          todos={this.state.todos}
          handleChangeProps={this.handleChange}
          delTodoProps={this.delTodo}
        />
      </div>
    )
  }
}

export default TodoContainer
