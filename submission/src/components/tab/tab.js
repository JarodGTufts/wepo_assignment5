import React from 'react';
import styles from './tab.css';
import PropTypes from 'prop-types';

class Tab extends React.Component {
    render () {
        return <div>Tab not implemented</div>
    }
}

Tab.propTypes = {
    selectionKey: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired
}

export default Tab;