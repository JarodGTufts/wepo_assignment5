import React from 'react';
import styles from './progressBar.css';
import PropTypes from 'prop-types';


/* TODO: Striping and animating */
class ProgressBar extends React.Component {
    render () {
        
        var curr_style;

        switch(this.props.state) {
            case 'info':
                curr_style = 'Info';
                break;

            case 'success':
                curr_style = 'Success';
                break;

            case 'warning':
                curr_style = 'Warning';
                break;

            case 'danger':
                curr_style = 'Danger';
                break;

            default:
                curr_style = 'Info';
            
        }

        /* Load all of the styles as described by the props */
        var all_styles = [styles["progressBar" + curr_style]];

        if (this.props.striped) {
            all_styles.push(styles.striped)
        }

        if (this.props.animated) {
            all_styles.push(styles.animated);
        }

        /* Get the progress, capped at 100 */
        var curr_progress = this.props.progress;
        if (curr_progress >= 100) {
            curr_progress = 100;
        }

        /* Cap the lower bound of progress at 0 */
        else if (curr_progress < 0) {
            curr_progress = 0;
        }

        return (
            <div className={styles.progressWrapper}>
                <div className={all_styles.join(' ')} style={{width: curr_progress + '%'}}></div>
            </div>
        );
    }
};

ProgressBar.propTypes = {
    progress: PropTypes.number.isRequired,
    striped: PropTypes.bool.isRequired,
    animated: PropTypes.bool.isRequired,
    state: PropTypes.oneOf(['info', 'success', 'warning', 'danger']).isRequired
}

ProgressBar.defaultProps = {
    striped: false,
    animated: false
}


export default ProgressBar;