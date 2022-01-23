import React from 'react';

export class Form extends React.Component {

  render () {

    const inputTextHandler = (e) => {
      this.props.setInputText(e.target.value);
    }  

    const sumbitTodoHandler = (e) => {
      e.preventDefault();
      this.props.setTodos([
        ...this.props.todos, 
        {text: this.props.inputText, completed: false, id: Math.random() * 1000}
      ]);
      this.props.setInputText("");
    }

    const statusHandler = (e) => {
      this.props.setStatus(e.target.value);
    }

    return (
      <form>
        <input value={this.props.inputText} onChange={inputTextHandler} type="text" className="todo-input" />
        <button onClick={sumbitTodoHandler} className="todo-button" type="sumbit">
          <i className="fas fa-plus-square"></i>
        </button>
        <div className="select">
          <select onChange={statusHandler} name="todos" className="filter-todo">
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
        </div>
      </form>
    );
  }
};
