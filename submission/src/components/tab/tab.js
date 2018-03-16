import React from 'react';
import styles from './tab.css';

class Tab extends React.Component {
    render() {
        return <div>{this.props.children}</div>
    }
}

export default Tab;