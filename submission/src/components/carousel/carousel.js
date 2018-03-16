import React from 'react';
import styles from './carousel.css';
import PropTypes from 'prop-types';

class Carousel extend React.Component {
    render () {
        return <div>Carousel not implemented</div>;
    }
};

Carousel.PropTypes = {
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    size: PropTypes.oneOf(['small', 'medium', 'large']).isRequired
}

export default Carousel;