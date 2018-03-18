import React from 'react';
import styles from './timePicker.css';
import PropTypes from 'prop-types';


const circleUrl = "https://cssanimation.rocks/images/posts/clocks/ios_clock.svg";
const clockArm = "http://www.clker.com/cliparts/U/t/A/Q/E/N/hour-arm.svg";
class TimePicker extends React.Component {
    render () {
        let timeAreas = [
        ];
        for(let angle = -90, i = 0; angle < 270; angle+= 360/12, i++) {
            let radian = angle * 0.0174532925;
            let x = 100 * Math.cos(radian) + 100;
            let y = 100 * Math.sin(radian) + 100;
            let coords = x + ',' + y + ',' + 20;
            console.log(coords);
            timeAreas.push(
                <area shape="circle" coords={coords} href="" alt={""} onClick={(e) => {e.preventDefault(); console.log(i)}}/>
            )
        }

        return <div className={styles.mainDiv}>

            <img className={styles.circle} src={circleUrl} width="200" height="200" alt="clock" useMap="#clockMap"/>
            <map name="clockMap">
                {timeAreas}
            </map>
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