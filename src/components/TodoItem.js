import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

export class TodoItem extends Component {
    
    /* method for CSS styling */
    /* doing styling in JSX is fucking weird... */
    getStyle = () => {
        return {
            backgroundColor: '#282A36',
            color: '#9076ed',
            padding: '1em',
            borderBottom: '1px #6D4E79 dotted',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none' /* completed tasks are line-throughed */
        }
    }

    render() {
        /* Use destructuring to pull out the id, title */
        const { id, title } = this.props.todo;
        return (
            <div style={ this.getStyle() }>
                <p>
                    <label className="checkbox-container" for="checkbox">
                        <input 
                            type="checkbox" 
                            className="item-checkbox" 
                            id="checkbox"
                            title="Mark this todo as completed"
                            style={{ cursor: 'pointer' }}
                            onChange={ this.props.markCompleted.bind(this, id) } 
                        />
                        <span className="custom-checkbox"></span>
                        { title }
                        
                    </label>
                    <FontAwesomeIcon 
                        icon={faTrash} 
                        style={ getTrashIconStyle } 
                        title="Delete this item" 
                        onClick={ this.props.deleteTodoItem.bind(this, id) }
                    />
                </p>
            </div>
        )
    }
}

const getTrashIconStyle = {
    color: '#a35bc0',
    float: 'right',
    scale: '90%',
    cursor: 'pointer'
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    markCompleted: PropTypes.func.isRequired,
    deleteTodoItem: PropTypes.func.isRequired
}

export default TodoItem
