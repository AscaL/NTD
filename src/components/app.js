import React from 'react';
import _ from 'lodash';

import TodosList from './TodosList';
import CreateTodos from './CreateTodos';

const todos = [
  {
    task: 'make react tut',
    isCompleted: false,
  },
  {
    task: 'second task',
    isCompleted: true,
  },
];

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todos,
    };
  }

  toggleTask(task) {
    const foundTodo = _.find(this.state.todos, todo => todo.task === task);
    foundTodo.isCompleted = !foundTodo.isCompleted;
    this.setState({ todos: this.state.todos });
  }

  createTask(task) {
    this.state.todos.push({
      task,
      isCompleted: false,
    });
    this.setState({ todos: this.state.todos });
  }

  saveTask(oldTask, newTask) {
    const foundTodo = _.find(this.state.todos, todo => todo.task === oldTask);

    foundTodo.task = newTask;
    this.setState({ todos: this.state.todos });
  }

  deleteTask(task) {
    const foundTodo = _.remove(this.state.todos, todo => todo.task === task);
    this.setState({todos: this.state.todos });


  }

  render() {
    return (
      <div>
        <h1>Nested ToDo and Daily</h1>
        <CreateTodos todos={this.state.todos} createTask={this.createTask.bind(this)} />
        <TodosList 
          todos={this.state.todos} 
          toggleTask={this.toggleTask.bind(this)}
          saveTask={this.saveTask.bind(this)}
          deleteTask={this.deleteTask.bind(this)}
        />
      </div>
    );
  }
}
