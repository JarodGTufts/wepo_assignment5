import React from 'react';
import styles from './carousel.css';
import PropTypes from 'prop-types';

class Carousel extends React.Component {
    render () {
        return <div>Carousel not implemented</div>;
    }
};

Carousel.propTypes = {
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    size: PropTypes.oneOf(['small', 'medium', 'large']).isRequired
}

Carousel.defaultProps = {
    size: 'medium'
}

export default Carousel;