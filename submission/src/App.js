import React, { Component } from 'react';

import './App.css';

/* These are not submission components */
import Button from './components/button/button.js';


import Modal from './components/modal/modal.js';
import ProgressBar from './components/progressBar/progressBar.js';
import NameCard from './components/nameCard/nameCard.js';
import Row from './components/row/row.js';
import Col from './components/col/col.js';
import TimePicker from './components/timePicker/timePicker.js';
import DatePicker from './components/datePicker/datePicker.js';
import Tabs from './components/tabs/tabs.js';



class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isOpen: false
        };

        this.open_modal = this.open_modal.bind(this);
    }

    open_modal() {
        this.setState({
            isOpen: true
        });
    }

    render() {

        return (
            <div className='App'>
                {/* Sample components */}
                <Button>Test button</Button>

                {/* Submission components */}
                <button onClick={this.open_modal}>Open Modal</button>

                <Modal isOpen={this.state.isOpen} onClose={() => this.setState({isOpen: false})}>
                    <Modal.Title>New Title</Modal.Title>
                    <Modal.Body>Put your body here</Modal.Body>
                    <Modal.Footer>Put my foot down</Modal.Footer>
                </Modal>
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
