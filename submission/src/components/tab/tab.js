import React from 'react';
import PropTypes from 'prop-types';
import styles from './tab.css';
class Tab extends React.Component {
    render () {
        return <div className={styles.tab}>{this.props.children}</div>
    }
}

Tab.propTypes = {
    selectionKey: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired
};

export default Tab;
