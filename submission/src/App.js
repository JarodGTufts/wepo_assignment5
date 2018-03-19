import React, { Component } from 'react';

import './App.css';


import Modal from './components/modal/modal.js';
import ProgressBar from './components/progressBar/progressBar.js';
import NameCard from './components/nameCard/nameCard.js';
import Carousel from './components/carousel/carousel.js';
import Row from './components/row/row.js';
import Col from './components/col/col.js';
import TimePicker from './components/timePicker/timePicker.js';
import DatePicker from './components/datePicker/datePicker.js';
import Tabs from './components/tabs/tabs.js';
import Tab from './components/tab/tab.js';
import CartoonNetworkSpinner from './components/cartoonNetworkSpinner/cartoonNetworkSpinner.js';

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isOpen_first: false,
            progress: 10,
            tab: 1
        };

        this.open_modal_one = this.open_modal_one.bind(this);

    }

    open_modal_one() {
        this.setState({
            isOpen_first: true,
            tab : 1
        });
    }


    render() {
        console.log(this.state);
        return (
            <div className='App'>




                {/*****************
                 Date picker
                 *****************/}
                <hr />
                <h2>Date picker test</h2>
                <h3>en-EN test</h3>
                <DatePicker
                    onDatePick={first_date => this.setState({ first_date })}
                    locale="en-EN" />

                <h3>Default test (is-IS)</h3>
                <DatePicker
                    onDatePick={second_date => this.setState({ second_date })} />


                    {/*****************
                     Time Picker
                     *****************/}
                    <hr />
                    <h2>Time picker test</h2>

                    <h3>12H format</h3>
                    <TimePicker
                        onTimePick={first_time => this.setState({ first_time })}
                        format = {12} />
                    <h3>With default (24)</h3>
                    <TimePicker
                        onTimePick={second_time => this.setState({ second_time })} />

                {/* Submission components */}

                {/*****************
                        Modal
                 *****************/}
                <h2>Modal tests</h2>
                <button onClick={this.open_modal_one}>Open first Modal</button>

                <Modal
                    isOpen={this.state.isOpen_first}
                    onClose={() => this.setState({isOpen_first: false})}>

                    <Modal.Title>New Title</Modal.Title>
                    <Modal.Body>Put your body here</Modal.Body>
                    <Modal.Footer>Put my foot down</Modal.Footer>

                </Modal>
                <br />

                {/* Modal default value test - this modal should not appear */}
                <Modal
                    onClose={() => this.setState({isOpen_second: false})}>

                    <Modal.Title>This should not appear</Modal.Title>
                    <Modal.Body>Because it has no specified prop</Modal.Body>
                    <Modal.Footer>That's fun</Modal.Footer>

                </Modal>


                {/*****************
                    Progress Bar
                 *****************/}
                <hr />
                <h2>Progress bar tests</h2>
                <button onClick={() => this.setState({progress: this.state.progress+10})}>Make progress (goes past 100 for testing)</button>
                <br />
                <button onClick={() => this.setState({progress: this.state.progress-10})}>Lose progress (goes below 0 for testing)</button>
                <br />
                <br />

                {/* Core progress bar testing */}
                Striped and animated, info
                <ProgressBar
                    progress={this.state.progress}
                    striped={true}
                    animated={true}
                    state={"info"} />
                Animated but not striped (invisible), success
                <ProgressBar
                    progress={this.state.progress + 10}
                    striped={false}
                    animated={true}
                    state={"success"} />
                Not striped or animated, warning
                <ProgressBar
                    progress={this.state.progress + 20}
                    striped={false}
                    animated={false}
                    state={"warning"} />
                Striped but not animated, danger
                <ProgressBar
                    progress={this.state.progress + 30}
                    striped={true}
                    animated={false}
                    state={"danger"} />

                {/* Progress bar default test */}
                Default values (not striped, not animated), info
                <ProgressBar
                    progress={this.state.progress + 40}
                    state={"info"} />


                {/*****************
                     Name Card
                 *****************/}
                <hr />
                <h2>Name card test</h2>
                <NameCard
                    name="Jarod Gowgiel"
                    email="mail@ru.us"
                    telephone="+123-456-7890"
                    imageUrl="https://vignette.wikia.nocookie.net/spongebob/images/a/ac/Spongebobwithglasses.jpeg/revision/latest?cb=20121014113150" />


                {/*****************
                      Carousel
                 *****************/}
                <hr />
                <h2>Carousel test</h2>
                <h3>Small size test</h3>
                <Carousel
                    images={[
                        'https://vignette.wikia.nocookie.net/cartoons/images/4/47/Spongebob.png/revision/latest?cb=20150913114858',
                        'http://s1.dmcdn.net/gunHY/1280x720-y-w.jpg'
                    ]}
                    size="small" />

                {/* Default size */}
                <h3>Default size test (medium)</h3>
                <Carousel
                    images={[
                        'https://vignette.wikia.nocookie.net/cartoons/images/4/47/Spongebob.png/revision/latest?cb=20150913114858',
                        'http://s1.dmcdn.net/gunHY/1280x720-y-w.jpg'
                    ]}
                    size="medium" />

                <h3>Large size test</h3>
                <Carousel
                    images={[
                        'https://vignette.wikia.nocookie.net/cartoons/images/4/47/Spongebob.png/revision/latest?cb=20150913114858',
                        'http://s1.dmcdn.net/gunHY/1280x720-y-w.jpg'
                    ]}
                    size="large" />


                {/*****************
                     Row and Col
                 *****************/}
                <hr />
                <h2>Row and column tests</h2>
                <Row>
                    <Col size={6}><h3 style={{'textAlign': 'center'}}>6-wide content</h3></Col>
                    <Col size={6}><h3 style={{'textAlign': 'center'}}>6-wide content</h3></Col>
                    <Col size={12}><h3 style={{'textAlign': 'center'}}>12-wide wrapped content</h3></Col>

                    {/* Default size tests */}
                    <Col>1</Col>
                    <Col>2</Col>
                    <Col>3</Col>
                    <Col>4</Col>
                    <Col>5</Col>
                    <Col>6</Col>
                    <Col>7</Col>
                    <Col>8</Col>
                    <Col>9</Col>
                    <Col>10</Col>
                    <Col>11</Col>
                    <Col>12</Col>
                </Row>




                {/*****************
                    Tabs and Tab
                 *****************/}
                <hr />
                <h2>Tabs and Tab test</h2>
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

                <Tabs
                    theme="light"
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

                <Tabs
                    theme="dark"
                    layout="vertical"
                    onSelect={newTab => this.setState({ tab: newTab})}
                    currentSelectedTab={this.state.tab}>

                    <Tab selectionKey={1} title="Tab 1">
                        Content 1
                    </Tab>
                    <Tab selectionKey={2} title="Tab 2">
                        Content 2
                    </Tab>
                </Tabs>

                <Tabs
                    theme="light"
                    layout="vertical"
                    onSelect={newTab => this.setState({ tab: newTab})}
                    currentSelectedTab={this.state.tab}>

                    <Tab selectionKey={1} title="Tab 1">
                        Content 1
                    </Tab>
                    <Tab selectionKey={2} title="Tab 2">
                        Content 2
                    </Tab>
                </Tabs>

                {/*****************
                      Spinner
                 *****************/}
                <hr />
                <h2>Spinner test</h2>
                <h3>1 second interval</h3>

                <CartoonNetworkSpinner
                    interval={1} />

                {/* Default interval test */}
                <h3>Default interval (3)</h3>
                <CartoonNetworkSpinner />
            </div>
        );
    }
}

export default App;
