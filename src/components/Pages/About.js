import React from 'react';

function About() {
    return (
        <div>
            <h1 style={{ color: '#6e6d8c', paddingTop: '1em' }}>About</h1>
            <p style={{ color: '#6e6d8c' }}>This is a simple Todo List application built with React.</p>
            <p style={{ color: '#6e6d8c' }}>
                I built it for learning and understanding how app development in React works. Obviously
                this is far from a real todo list application, since it doesn't have a real backend.
            </p>
            <p style={{ color: '#6e6d8c' }}>
                It uses <a href="https://jsonplaceholder.typicode.com/">JSONPlaceholder</a>, a free online REST API to simulate the app's behaviour with fake data. You can delete items, add items, but none of them actually get saved.
            </p>
        
        </div>
    )
}

export default About;
