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
        this.id = Math.random()%1;
    }

    getHourAreas() {
        let timeAreas = this.calculateAreas(80, 12, 100, 100, 0,
          (i) => this.setState({hours: i,
                                minutes: this.state.minutes,
                                chooseHours: false}));
        if(this.props.format === 24) {
            let timeAreas24 = this.calculateAreas(55, 12, 100, 100, 12,
              (i) => this.setState({hours: i,
                                    minutes: this.state.minutes,
                                    chooseHours: false}));
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
            let key = "area" + radius + parts + i;
            timeAreas.push(
                <area
                    key={key}
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
        return this.calculateAreas(80, 60, 100, 100, 0,
          (i) => this.setState({ hours: this.state.hours,
                                minutes: i,
                                chooseHours: false}));
    }

    render () {
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
        let paddedHours = this.state.hours.toString().padStart(2,"0");
        let paddedMinutes = this.state.minutes.toString().padStart(2,"0")
        let id = "#" + this.id;
        return <div className={styles.main}>
            <div className={styles.clock}>
              {paddedHours} : {paddedMinutes}
            </div>
            <img
              className={styles.circle}
              src={circleUrl}
              alt="clock"
              useMap={id}/>
            <map name={this.id}>
                {timeAreas}
            </map>
            <div className={styles.buttons}>
                <button
                  className={styles.button}
                  onClick={ (event) => {
                    this.setState({hours: this.state.hours,
                                  minutes: this.state.minutes,
                                  chooseHours: true})}}>
                    Back
                </button>
                <button
                  className={styles.button}
                  onClick={ (event) => {
                      this.props.onTimePick(this.state.hours + ":" + this.state.minutes);}}>
                  Done
                </button>
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
