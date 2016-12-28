import React from 'react';
import _ from 'lodash';

import TodosListHeader from './TodosListHeader';
import TodosListItem from './TodosListItem';

export default class TodosList extends React.Component {
  renderItems() {
    return _.map(this.props.todos, (todo, index) => <TodosListItem key={index} {...todo} />);
  }


  render() {
    return (
      <table>
        <TodosListHeader />
        <tbody>
          {this.renderItems()}
        </tbody>
      </table>
    );
  }
}
