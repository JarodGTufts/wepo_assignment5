import React, { Component } from 'react';

import './App.css';

/* These are not submission components */
import Button from './components/button/button.js';
import Title from './components/title/title.js';
import Modal from './components/modal/modal.js';
import ProgressBar from './components/progressBar/progressBar.js';
import NameCard from './components/nameCard/nameCard.js';
import Row from './components/row/row.js';
import Col from './components/col/col.js';
import TimePicker from './components/timePicker/timePicker.js';
import DatePicker from './components/datePicker/datePicker.js';
import Tabs from './components/tabs/tabs.js';



class App extends Component {
    render() {
        return (
            <div className='App'>
                {/* Sample components */}
                <Button>Test button</Button>
                <Title>Testing</Title>

                {/* Submission components */}
                <Modal />
                <ProgressBar />
                <NameCard />

                <Row>
                    <Col />
                </Row>
                <TimePicker />
                <DatePicker />
                <Tabs />

            </div>
        );
    }
}

export default App;
