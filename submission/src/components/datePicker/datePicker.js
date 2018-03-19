import React from 'react';
import styles from './datePicker.css';
import PropTypes from 'prop-types';

class DatePicker extends React.Component {
    constructor(props) {
        super(props);
        let date = new Date();
        this.state = {
            year : date.getFullYear(),
            month : date.getMonth(),
            day : date.getDate()
        }
    }

    calculateDays() {
        let days = [];
        let date = new Date(this.state.year, this.state.month, 0);
        let numberDays = date.getDate();
        let month = new Date().getMonth();
        date.setDate(1);
        let weekDay = date.getDay();
        for(let i = 0; i < weekDay - 1; i++) {
            days.push(<li key={"padding" + i} className={styles.day}><br/></li>);
        }
        for(let i = 1; i <= numberDays; i++) {
            let className = "day";
            if(i === this.state.day && month === this.state.month) {
                className+= "Active";
            }

            days.push(
                <li key={"day"+i} className={styles[className]} onClick = {() => {
                    this.setState(Object.assign({}, this.state, {day : i}));
                }}>{i}</li>
            )
        }
        return days;
    }

    getHeader() {
        let days = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "So"];
        let items = [];
        days.forEach(day => {
            items.push(<li key={"weekDay" + day} className={styles.weekDay}>{day}</li>);
        });
        return items;
    }

    submitDate() {
        let date = new Date();
        date.setFullYear(this.state.year, this.state.month, this.state.day);
        let string = date.toLocaleDateString(this.props.locale);
        this.props.onDatePick(string);
    }
    render () {
        let days = this.calculateDays();
        let weekDays = this.getHeader();
        return (
            <div className={styles.main}>
                <div className = {styles.monthYear}>
                    <button
                        className={styles.monthYearButton}
                        onClick = {() => {
                            let month = this.state.month;
                            let year = this.state.year;
                            if(--month < 0) {
                                month = 11;
                                year--;
                            }
                            this.setState(Object.assign({}, this.state, {year: year, month: month}));
                        }}>-</button>
                    {this.state.day}/{this.state.month + 1}/{this.state.year}
                    <button className={styles.monthYearButton}
                    onClick = {() => {
                        let month = this.state.month;
                        let year = this.state.year;
                        if(++month > 11) {
                            month = 0;
                            year++;
                        }
                        this.setState(Object.assign({}, this.state, {year: year, month: month}));
                    }}>+</button>
                    <button className = {styles.done} onClick={this.submitDate.bind(this)}>Done</button>
                </div>

                <div className = {styles.weekDays}>
                    <ul className = {styles.weekDayList}>
                        {weekDays}
                    </ul>
                </div>
                <div className = {styles.days}>
                    <ul className = {styles.daysList}>
                        {days}
                    </ul>
                </div>
            </div>);
    }
};

DatePicker.propTypes = {
    onDatePick: PropTypes.func.isRequired,
    locale: PropTypes.string.isRequired
}

DatePicker.defaultProps = {
    locale: "is-IS"
};

export default DatePicker;
