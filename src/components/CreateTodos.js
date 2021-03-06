import React from 'react';
import _ from 'lodash';

export default class CreateTodos extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      error: null,
    };
  }

  handleCreate(e) {
    e.preventDefault();

    // we need to get values from input box and add them to the todo array
    const createInput = this.refs.createInput;
    const task = createInput.value;
    const validateInput = this.validateInput(task);

    if (validateInput) {
      this.setState({ error: validateInput });
      return;
    }

    this.setState({ error: null });
    this.props.createTask(task);
    this.refs.createInput.value = '';
  }

  renderError() {
    if (!this.state.error) {
      return null;
    }
    return <div style={{color: 'red'}}>{this.state.error}</div>
  }

  render() {
    return (
      <form onSubmit={this.handleCreate.bind(this)} >
        <input type="text" placeholder="What to do?" ref="createInput" />
        <button>Create</button>
        {this.renderError()}
      </form>
    );
  }

  validateInput(task) {
    if (!task) {
      return 'please enter a task!';
    } else if (_.find(this.props.todos, todo => todo.task === task)) {
      return 'task already exists';
    } else {
      return null;
    }
  }

}