import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';

import Header from '../../components/Header';
import TodoInput from '../../components/TodoInput';
import TodoList from '../../containers/TodoList';

import './styles.css';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <Paper className="container">

          <Header title='Todo List' />
          <TodoInput />
          <TodoList />

        </Paper>
      </MuiThemeProvider>
    )
  }
}

export default App;
