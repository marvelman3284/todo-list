import React from "react";
import { Todo } from "./Todo"

export class TodoList extends React.Component {
  render () {
    return (
      <div className="todo-container">
        <ul className="todo-list">
          {this.props.filteredTodos.map((todo) => (
            <Todo 
              setTodos={this.props.setTodos} 
              todos={this.props.todos} 
              key={todo.id} 
              text={todo.text}
              todo={todo}
            />
          ))}
        </ul>
      </div>
    );
  }
};
