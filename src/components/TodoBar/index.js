import React from 'react';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';
import ActionDelete from 'material-ui/svg-icons/action/delete';
import { Toolbar, ToolbarGroup } from 'material-ui/Toolbar';
import RaisedButton from 'material-ui/RaisedButton';

import { connect } from 'react-redux';
import { handleFilterChange, deleteCompleted } from './actions';

const styles = {
  toolbarGroup: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
  },
  radioButtonGroup: {
    width: '60%',
    display: 'flex',
  },
  radioButton: {
    width: '33%',
  }
}

const TodoBar = ({dispatch}) => {
  return (
    <Toolbar style={styles.toolbar}>
      <ToolbarGroup style={styles.toolbarGroup}>
        <RadioButtonGroup name="todoFilter" defaultSelected="none" onChange={(e) => dispatch(handleFilterChange(e.target.value))} style={styles.radioButtonGroup}>
          <RadioButton
            value="none"
            label="Show All"
            style={styles.radioButton}
          />
          <RadioButton
            value="incomplete"
            label="Show Incomplete"
            style={styles.radioButton}
          />
          <RadioButton
            value="complete"
            label="Show Complete"
            style={styles.radioButton}
          />
        </RadioButtonGroup>

        <RaisedButton
          label="Remove Completed"
          primary={true}
          onClick={() => dispatch(deleteCompleted())}
          icon={<ActionDelete />}
        />
      </ToolbarGroup>
    </Toolbar>
  );
};

export default connect()(TodoBar);