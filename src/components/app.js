import React from 'react';

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

  render() {
    return (
      <div>
        <h1>Nested ToDo and Daily</h1>
        <TodosList todos={this.state.todos} />
      </div>
    );
  }
}
