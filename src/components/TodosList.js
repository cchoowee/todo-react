import React from "react";
import TodoItem from "./TodoItem";

class TodoLists extends React.Component {
  render() {
    return (
      <div>
        {this.props.todos.map(todo => (
          <TodoItem 
            key={todo.id}
            todo={todo}
            hcp={this.props.handleChangeProps}
            del={this.props.delTodoProps}
          />
        ))}
      </div>
    )
  }
}

export default TodoLists
