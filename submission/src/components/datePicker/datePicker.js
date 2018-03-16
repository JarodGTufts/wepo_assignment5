import React from 'react';
import styles from './datePicker.css';
import PropTypes from 'prop-types';

class DatePicker extends React.Component {
    render () {
        return <div>DatePicker not implemented</div>;
    }
};

DatePicker.propTypes = {
    onDatePick: PropTypes.func.isRequired,
    locale: PropTypes.string.isRequired
}

export default DatePicker;