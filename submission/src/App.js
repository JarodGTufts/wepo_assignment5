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
<<<<<<< HEAD
import Tab from './components/tab/tab.js';
import CartoonNetworkSpinner from './components/cartoonNetworkSpinner/cartoonNetworkSpinner.js';

=======
import CartoonNetworkSpinner from './components/cartoonNetworkSpinner/cartoonNetworkSpinner';
>>>>>>> 6900ba7997d90f130da6d51bc8628cb43ba82c0f

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isOpen: false,
            progress: 10,
            tab: 1
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

                {/* Submission components */}
                <button onClick={this.open_modal}>Open Modal</button>

                <Modal 
                    isOpen={this.state.isOpen} 
                    onClose={() => this.setState({isOpen: false})}>

                    <Modal.Title>New Title</Modal.Title>
                    <Modal.Body>Put your body here</Modal.Body>
                    <Modal.Footer>Put my foot down</Modal.Footer>
                
                </Modal>

                {/* Testing all flavors of progress bar */}
                <br />
                <button onClick={() => this.setState({progress: this.state.progress+10})}>Make progress (goes past 100 for testing)</button>
                <br />
                <button onClick={() => this.setState({progress: this.state.progress-10})}>Lose progress (goes below 0 for testing)</button>

                <ProgressBar 
                    progress={this.state.progress}
                    striped={true}
                    animated={true}
                    state={"info"} />
                <ProgressBar 
                    progress={this.state.progress + 10}
                    striped={false}
                    animated={true}
                    state={"success"} />
                <ProgressBar 
                    progress={this.state.progress + 20}
                    striped={true}
                    animated={true}
                    state={"warning"} />
                <ProgressBar 
                    progress={this.state.progress + 30}
                    striped={true}
                    animated={false}
                    state={"danger"} />


                <NameCard
                    name="Jarod Gowgiel"
                    email="mail@ru.us"
                    telephone="+123-456-7890"
                    imageUrl="https://vignette.wikia.nocookie.net/spongebob/images/a/ac/Spongebobwithglasses.jpeg/revision/latest?cb=20121014113150" />

                <Row>
                    <Col size={12} />
                </Row>

                <TimePicker
                    onTimePick={time => this.setState({ time })}
                    format = {24} />
                <DatePicker
                    onDatePick={date => this.setState({ date })}
                    locale="en-EN" />
                <Tabs 
                    theme="dark"
                    layout="horizontal"
                    onSelect={newTab => this.setState({ tab: newTab})}
                    currentSelectedTab={this.state.tab}>

                    <Tab selectionKey={1} title="Tab 1">
                        Content 1
                    </Tab>
                    <Tab selectionKey={2} title="Tab 2">
                        Content 2
                    </Tab>
                </Tabs>
                <CartoonNetworkSpinner
                    interval={4} />

            </div>
        );
    }
}

export default App;
