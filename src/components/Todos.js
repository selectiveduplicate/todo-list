import React, { Component } from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

class Todos extends Component {

  render() {
    return this.props.todos.map((elements) => (
        <TodoItem key={ elements.id } todo={elements} markCompleted={ this.props.markCompleted } 
        deleteTodoItem={ this.props.deleteTodoItem }
        />
    ));
  }
}

/* check that appropriate form of props are delivered
   using React's validators */

Todos.propTypes = {
    todos: PropTypes.array.isRequired,
    markCompleted: PropTypes.func.isRequired,
    deleteTodoItem: PropTypes.func.isRequired,
}

export default Todos;
