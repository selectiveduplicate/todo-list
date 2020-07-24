import React from 'react';
import { Link } from 'react-router-dom'

function Header() {
    return (
        <header style={ getHeaderStyle }>
            <h1>Todo List</h1>
            <h3>
                <Link to="/" className="navlink">Home</Link> | 
                <Link to="/about" className="navlink"> About</Link>
            </h3>
        </header>
    )
}

const getHeaderStyle = {
    backgroundColor: '#000',
    color: '#6e6d8c',
    padding: '0.5rem 0.5rem',
    textAlign: 'center'
}

export default Header;