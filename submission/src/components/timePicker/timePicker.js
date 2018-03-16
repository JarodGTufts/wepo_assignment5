import React from 'react';
import styles from './timePicker.css';
import PropTypes from 'prop-types';

class TimePicker extends React.Component {
    render () {
        return <div>TimePicker not implemented</div>;
    }
};

TimePicker.propTypes = {
    onTimePick: PropTypes.func.isRequired,
    format: PropTypes.oneOf([24, 12]).isRequired
}

TimePicker.defaultProps = {
    format: 24
}

export default TimePicker;