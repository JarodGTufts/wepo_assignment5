import React from 'react';
import styles from './col.css';
import PropTypes from 'prop-types';

class Col extends React.Component {
    render () {

        var curr_width = (this.props.size/12)*100 + '%';
        return (
            <div className={styles.col} style={{width: curr_width}}>
                {this.props.children}
            </div>
        );
    }
};

Col.propTypes = {
    size: PropTypes.number.isRequired
}

export default Col;