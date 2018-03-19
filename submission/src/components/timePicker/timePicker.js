import React from 'react';
import styles from './timePicker.css';
import PropTypes from 'prop-types';

function importAll(r) {
    return r.keys().map(r);
}

const images = importAll(require.context('../../static/img/timePicker/', false, /\.(png|jpe?g|svg)$/));
const clock12h = images[0];
const clock24h = images[1];
const minutes = images[2];

class TimePicker extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hours: 0,
            minutes: 0,
            chooseHours: true

        }
    }

    getHourAreas() {
        let timeAreas = this.calculateAreas(80, 12, 100, 100, 0, i => this.setState({hours: i, minutes: this.state.minutes, chooseHours: false}));
        if(this.props.format === 24) {
            let timeAreas24 = this.calculateAreas(60, 12, 100, 100, 12, i => this.setState({hours: i, minutes: this.state.minutes, chooseHours: false}));
            timeAreas.push.apply(timeAreas, timeAreas24);
        }
        return timeAreas;
    }

    calculateAreas(radius, parts, centerX, centerY, iStart, callback) {
        let timeAreas = [];

        for(let angle = -90, i = iStart; angle < 270; angle+= 360/parts, i++) {
            let radian = angle * 0.0174532925;
            let x = radius * Math.cos(radian) + centerX;
            let y = radius * Math.sin(radian) + centerY;
            let coords = x + ',' + y + ',' + 5;
            timeAreas.push(
                <area
                    shape="circle"
                    coords={coords}
                    href=""
                    alt={""}
                    onClick={(e) => {
                        e.preventDefault();
                        callback(i);
                    }}/>
            )
        }
        return timeAreas;
    }
    getMinuteAreas() {
        return this.calculateAreas(80, 60, 100, 100, 0, i => this.setState({hours: this.state.hours, minutes: i, chooseHours: false}));
    }

    render () {
        console.log(this.state);
        let timeAreas;
        let circleUrl;
        if(this.state.chooseHours) {
            timeAreas = this.getHourAreas();
            if(this.props.format === 24)
                circleUrl = clock24h;
            else
                circleUrl = clock12h
        }
        else {
            circleUrl = minutes;
            timeAreas =  this.getMinuteAreas();
        }
        return <div className={styles.main}>
            <div className={styles.clock}> {this.state.hours.toString().padStart(2,"0")} : {this.state.minutes.toString().padStart(2,"0")} </div>
            <img className={styles.circle} src={circleUrl} width="200" height="200" alt="clock" useMap="#clockMap"/>
            <map name="clockMap">
                {timeAreas}
            </map>
            <div className={styles.buttons}>
                <button className={styles.button} onClick={event => { this.setState({hours: this.state.hours, minutes: this.state.minutes, chooseHours: true})}}>Back</button>
                <button className={styles.button} onClick={event => { this.props.onTimePick(this.state.hours + ":" + this.state.minutes);}}>Done</button>
            </div>


        </div>;
    }
};

TimePicker.propTypes = {
    onTimePick: PropTypes.func.isRequired,
    format: PropTypes.oneOf([24, 12]).isRequired
};

TimePicker.defaultProps = {
    format: 24
};

export default TimePicker;