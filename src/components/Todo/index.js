import React from 'react';
import Checkbox from 'material-ui/Checkbox';
import ActionDelete from 'material-ui/svg-icons/action/delete';
import RaisedButton from 'material-ui/RaisedButton';

import { connect } from 'react-redux';
import { toggleComplete, deleteTodo } from './actions';

import './styles.css';

const styles = {
  option: {
    width: 'auto',
    marginLeft: '5%',
  }
}

const Todo = ({todo, dispatch}) => {
  return (
    <div className='todoContainer'>
      <h2 >{todo.text}</h2>
      <div className='todoFilters'>
        <Checkbox
          label="Completed"
          onCheck={() => dispatch(toggleComplete(todo.id))}
          checked={todo.complete ? true : false}
          style={styles.option}
        />
        <RaisedButton
          label="Remove"
          style={styles.option}
          onClick={() => dispatch(deleteTodo(todo.id))}
          icon={<ActionDelete />}
        />
      </div>
    </div>
  );
};

export default connect()(Todo);