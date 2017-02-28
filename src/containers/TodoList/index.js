import React, { PropTypes } from 'react';

import TodoBar from '../../components/TodoBar';
import Todo from '../../components/Todo';

import { connect } from 'react-redux';

const listTodos = (todos, filter) => {
  return todos
    .filter(todo => {
      switch (filter) {
        case 'none':
          return todo;
        case 'complete':
          if (todo.complete === true)
            return todo;
          break;
        case 'incomplete':
          if (todo.complete === false)
            return todo;
          break;
        default:
          break;
      }
      return false;
    })
    .map(todo => <Todo key={todo.id} todo={todo} />)
}

const TodoList = ({ todos, filter }) => {
  console.log(todos);
  return (
    <div>
      <TodoBar />
      {listTodos(todos, filter)}
    </div>
  );
};

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  filter: PropTypes.string.isRequired,
}

TodoList.defaultProps = {
  filter: 'none'
};

const mapStateToProps = state => {
  return {
    todos: state.todos,
    filter: state.filter,
  }
}

export default connect(mapStateToProps)(TodoList);