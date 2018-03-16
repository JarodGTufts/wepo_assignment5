import React, { Component } from 'react';

import './App.css';


import Modal from './components/modal/modal.js';
import ProgressBar from './components/progressBar/progressBar.js';
import NameCard from './components/nameCard/nameCard.js';
import Row from './components/row/row.js';
import Col from './components/col/col.js';
import TimePicker from './components/timePicker/timePicker.js';
import DatePicker from './components/datePicker/datePicker.js';
import Tabs from './components/tabs/tabs.js';
import Tab from './components/tab/tab.js';
import CartoonNetworkSpinner from './components/cartoonNetworkSpinner/cartoonNetworkSpinner';

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isOpen: false,
            tab : 1
        };

        this.open_modal = this.open_modal.bind(this);
    }

    open_modal() {
        this.setState({
            isOpen: true,
            tab : 1
        });
    }

    render() {

        return (
            <div className='App'>

                {/* Submission components */}
                <button onClick={this.open_modal}>Open Modal</button>

                <Modal isOpen={this.state.isOpen} onClose={() => this.setState({isOpen: false})}>
                    <Modal.Title>New Title</Modal.Title>
                    <Modal.Body>Put your body here</Modal.Body>
                    <Modal.Footer>Put my foot down</Modal.Footer>
                </Modal>
                <ProgressBar />
                <NameCard
                    name="Jarod Gowgiel"
                    email="mail@ru.us"
                    telephone="+123-456-7890"
                    imageUrl="https://vignette.wikia.nocookie.net/spongebob/images/a/ac/Spongebobwithglasses.jpeg/revision/latest?cb=20121014113150" />

                <Row>
                    <Col />
                </Row>
                <TimePicker />
                <DatePicker />
                <Tabs
                    theme="dark"
                    layout="vertical"
                    onSelect={newTab => this.setState({ tab: newTab, isOpen: this.state.isOpen })}
                    currentSelectedTab={this.state.tab}>

                    <Tab selectionKey = {1} title={"Tab 1"}>
                        Content 1
                    </Tab>
                    <Tab selectionKey={2} title={"Tab 2"}>
                        Content 2
                    </Tab>
                    <Tab selectionKey={3} title={"Tab 3"}>
                        Content 3
                    </Tab>

                </Tabs>
                {
                    // <CartoonNetworkSpinner interval={4}/>
                }
            </div>
        );
    }
}

export default App;
