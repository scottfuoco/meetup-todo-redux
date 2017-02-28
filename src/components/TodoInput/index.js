import React from 'react';
import TextField from 'material-ui/TextField';

import { connect } from 'react-redux';
import { handleInputChange, submitTodo } from './actions';

import './styles.css';

const styles = {
  title: {
    marginBottom: '20px',
  },
  submit: {
    alignSelf: 'flex-end',
  }
}

const dispatchSubmitTodo = (todoInput, lastId, e) => {
  e.preventDefault();
  return submitTodo(todoInput, lastId);
}

const TodoInput = ({ todoInput, lastId, dispatch }) => {
  return (
    <div className="inputContainer">
      <form onSubmit={e => dispatch(dispatchSubmitTodo(todoInput, lastId, e))}>
        <TextField
          floatingLabelText="Title"
          style={styles.title}
          fullWidth={true}
          value={todoInput}
          onChange={(e) => dispatch(handleInputChange(e.target.value))}
        />
      </form>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    lastId: state.lastId,
    todoInput: state.todoInput
  }
}

export default connect(mapStateToProps)(TodoInput);