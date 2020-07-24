import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class AddTodo extends Component {

    state = {
        itemTitle: ''
    }

    onChange = (e) => {
        this.setState( { itemTitle: e.target.value } )
    }

    onSubmit = (e) => {
        e.preventDefault(); // prevent default submit action
        this.props.addToDoItem(this.state.itemTitle);
        this.setState( { itemTitle: "" } ); // clear the itemTitle key after adding new item
    }

    render() {
        return (
            <form className="add-submit-form" onSubmit={ this.onSubmit }>
                
                <label for="new-todo">
                    <input 
                      type="text" 
                      name="todo-title" 
                      id="new-todo" 
                      placeholder="Type in your new todo..."
                      className="adding-todo"
                      value= { this.state.itemTitle }
                      onChange={ this.onChange }>
                    </input>
                </label>
                <label for="todo-submit">
                    <input
                      type="submit"
                      name="todo-submit-button"
                      id="todo-submit"
                      value="Add"
                      className="submit-btn">
                    </input>
                </label>

            </form>
        )
    }
}

AddTodo.propTypes = {
    addToDoItem: PropTypes.func.isRequired
}

export default AddTodo;
