import React from 'react';

export class Todo extends React.Component {
  render () {

    const deleteHandler = () => {
      this.props.setTodos(this.props.todos.filter(el => el.id !== this.props.todo.id))
    }

    const completeHandler = () => {
      this.props.setTodos(this.props.todos.map(item => {
        if(item.id === this.props.todo.id) {
          return {
            ...item, completed: !item.completed
          }
        }
        return item;
      }))
    }

    return (
      <div className="todo">
        <li className={`todo-item ${this.props.todo.completed ? "completed" : ''}`}> { this.props.text }</li>
        <button onClick={completeHandler} className='complete-btn'>
          <i className="fas fa-check"></i>
        </button>
        <button onClick={deleteHandler} className="trash-btn">
          <i className='fas fa-trash'></i>
        </button>
      </div>
    );
  }
};
