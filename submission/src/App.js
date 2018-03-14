import React, { Component } from 'react';

import './App.css';

import StyleButton from './components/button/Button.js';
import Title from './components/title/Title.js';

class App extends Component {
    render() {
        return (
            <div className='App'>
                <StyleButton>Test button</StyleButton>
                <Title>Testing</Title>
            </div>
        );
    }
}

export default App;
