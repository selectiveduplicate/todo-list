import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import axios from 'axios'

import Todos from './components/Todos';
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo';
import About from './components/Pages/About';

import './App.css';


class App extends Component {
  state = {
    todos: []
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
        .then((response) => this.setState({todos: response.data}))
  }
  
  // mark/unmark todo items and toggle complete status
  markCompleted = (id) => {
    this.setState({ todos: this.state.todos.map(todoItem => {
      if (todoItem.id === id) {
        todoItem.completed = !todoItem.completed;
      }
      return todoItem;
    })})
  }

  // delete todo item
  deleteTodoItem = (id) => {
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
        .then((response) => this.setState({ todos: [...this.state.todos.filter(todoItem => todoItem.id !== id)] }))
  }

  // add todo item
  addToDoItem = (title) => {
    axios.post('https://jsonplaceholder.typicode.com/todos/', {
      title: title,
      completed: false
    })
      .then((response) => this.setState({ todos: [...this.state.todos, response.data] }))
  }

  render() {
    console.log(this.state.todos);
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />

            <Route exact path="/" render={() =>
              <React.Fragment>
                <Todos todos={this.state.todos} markCompleted={ this.markCompleted } 
                  deleteTodoItem={ this.deleteTodoItem } 
                />
                <AddTodo addToDoItem={ this.addToDoItem }/>
              </React.Fragment>
            }>
            </Route>

            <Route path="/about" component={About}></Route>
          </div>
      </div>
      </Router>
    );
  }
}

export default App;
